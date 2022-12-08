package com.app.Registration.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.Registration.model.Concession;
import com.app.Registration.constants.*;
import com.app.Registration.service.ConcessionService;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ConcessionController {
	@Autowired
	private static final String Path = Constants.pdfUploadingPath;

	@Autowired
	private ConcessionService service1;

	@GetMapping("/getConcessionlist")
	public List<Concession> fetchProductList() {
		List<Concession> Concessions = new ArrayList<Concession>();
		Concessions = service1.fetchProductList();
		return Concessions;
	}

	@PostMapping("/addConcession")
	public Concession saveproduct(@RequestBody Concession Concession) {
		return service1.saveConcessiontoDB(Concession);
	}

	@GetMapping("/getConcessionbyid/{id}")
	public Concession fetchConcessionById(@PathVariable int id) {
		return service1.fetchConcessionById(id).get();
	}

	@DeleteMapping("/deleteConcessionbyid/{id}")
	public String DeleteProductById(@PathVariable int id) {
		return service1.deleteProductById(id);
	}

	@DeleteMapping("/deleteconcessionbyidtest/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Optional<Concession> DeleteToolsByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteConcessionByIdtest(id);
	}

	@GetMapping("/Concession1/page/{pageNo}/{perpage}")
	public List<Concession> getPaginatedConcessions(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedconcession(pageNo, perpage);
	}

	@GetMapping("/Concessionaircraft/{aircraft}")
	public List<Concession> findby(@PathVariable String aircraft) {
		System.out.print(aircraft);
		List<Concession> selectaircraft = (List<Concession>) service1.findby(aircraft);
		return selectaircraft;
	}

	private static String UPLOAD_DIR="pdf";
	
	 @RequestMapping(value="uploadconcession", method=RequestMethod.POST)
	 @CrossOrigin(origins="http://localhost:4200")
		public String uploadconsumable(@RequestParam("file") MultipartFile file, HttpServletRequest request)
		{
			try {
				
				
				String fileName=file.getOriginalFilename();
				String path=request.getServletContext().getRealPath("")+UPLOAD_DIR
						+java.io.File.separator+ fileName;
				savefile(file.getInputStream(),path);
	
				return path;
			}
			catch(Exception e){
				return e.getMessage();
				}
		
	}
	 private void savefile(InputStream inputstream,String path)
	 {
	 try
	 { 
	 	OutputStream outputstream= new FileOutputStream (new File(path)); 
	 	int read=0;
	 	byte[] bytes=new byte[1024];
	 	while((read=inputstream.read(bytes))!=-1)
	 	{
	 		outputstream.write(bytes,0,read);
	 	}
	 	outputstream.flush();
	 	outputstream.close();
	 }
	 catch(Exception e) {
	 	e.printStackTrace();
	 					}
	 }
	 @RequestMapping(value="/downloadconcession/{fileName}",method=RequestMethod.GET)
	 @CrossOrigin(origins="http://localhost:4200")
	 public ResponseEntity<Object> downloadpdffile(@PathVariable String fileName)throws IOException
	 {
		 fileName=Path+ fileName;
		 File file=new File(fileName);
		 InputStreamResource resource=new InputStreamResource(new FileInputStream(file));
		 HttpHeaders headers=new HttpHeaders();
		 headers.add("Content - Disposition", String.format(file.getName()));
		 headers.add("Cache-Control", "no-cache,no-store,must-revalidate");
		 headers.add("Pragma","no-cache");
		 headers.add("Expires","0");
		 ResponseEntity<Object> responseEntity=ResponseEntity.ok().headers(headers)
				 .contentLength(file.length())
		//		 .contentType(MediaType.parseMediaType("application/txt")).body(resource);
				 .contentType(MediaType.parseMediaType("image/jpeg")).body(resource);
				 

		 
		return responseEntity;
		 
	 }

	


	@GetMapping("/displayconcession/{aircraft}/{pno}/{perpage}")
	public List<Concession> findtoolsnotools(@PathVariable String aircraft, @PathVariable int pno,
			@PathVariable int perpage) {
		List<Concession> selectservice1 = findby(aircraft);
		System.out.println(selectservice1);
		List<Concession> subsets = new ArrayList<>();
		int startRow = (pno - 1) * perpage;
		int endRow = startRow + perpage;
		endRow = (endRow > selectservice1.size() ? selectservice1.size() : endRow);
		for (int row = startRow; row < endRow; row++) {
			subsets.add(selectservice1.get(row));
		}
		return subsets;
	}

	@GetMapping("/concessionlist/{pageNo}/{perpage}")
	public List<Concession> getPaginatedUsers(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginated1(pageNo, perpage);
	}
}