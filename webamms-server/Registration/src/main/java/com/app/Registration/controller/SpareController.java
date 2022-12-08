package com.app.Registration.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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

import com.app.Registration.constants.*;
import com.app.Registration.model.spare;
import com.app.Registration.service.SpareService;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SpareController {
	@Autowired
	private SpareService service1;
	@Autowired
	private static final String Path = Constants.ImageUploadingPath;

	@GetMapping("/getsparelist")
	@CrossOrigin(origins = "*")
	public List<spare> fetchProductList() {
		List<spare> spares = new ArrayList<spare>();
		spares = service1.fetchProductListspare();
		return spares;
	}

	@GetMapping("/getsparelist1/{val}")
	@CrossOrigin(origins = "*")
	public List<spare> fetchserviceBylist(@PathVariable String val) {
		return service1.findlist(val);
	}

	@PostMapping("/addspare")
	@CrossOrigin(origins = "*")
	public spare saveproduct(@RequestBody spare spare) {
		return service1.saveSpare(spare);
	}

	@GetMapping("/getsparebyid/{id}")
	@CrossOrigin(origins = "*")
	public spare fetchspareById(@PathVariable int id) {
		return service1.fetchspareById(id).get();
	}

	@DeleteMapping("/deletesparebyidtest/{id}")
	@CrossOrigin(origins = "*")
	public Optional<spare> DeletespareByIdtest(@PathVariable int id) throws Exception {
		return service1.deletespareByIdtest(id);
	}

	@GetMapping("/spare1/page/{pageNo}/{perpage}")
	@CrossOrigin(origins = "*")
	public List<spare> getPaginatedspares(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedspare(pageNo, perpage);
	}

	@GetMapping("/getcountlistspare")
	@CrossOrigin(origins = "*")
	public long mycountspare() {
		return service1.getcount();
	}

	@GetMapping("/findlastspare")
	@CrossOrigin(origins = "*")
	public int findlastspare() {
		return service1.findlast();
	}

	

	@GetMapping("/getcountspare")
	@CrossOrigin(origins = "*")
	public int mycountspare(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countspare(seqno);
	}
	private static String UPLOAD_DIR="uploads";
	
	 @RequestMapping(value="uploadspare", method=RequestMethod.POST)
	 @CrossOrigin(origins="http://localhost:4200")
		public String uploadgse(@RequestParam("file") MultipartFile file, HttpServletRequest request)
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
	 @RequestMapping(value="/downloadspare/{fileName}",method=RequestMethod.GET)
	 @CrossOrigin(origins="http://localhost:4200")
	 public ResponseEntity<Object> downloadfile(@PathVariable String fileName)throws IOException
	 {
		 fileName=Path+ fileName;
		 File file=new File(fileName);
		 InputStreamResource resource=new InputStreamResource(new FileInputStream(file));
		 HttpHeaders headers=new HttpHeaders();
		 headers.add("Content - Disposition", String.format("attachment;filename=\"%s\"",file.getName()));
		 headers.add("Cache-Control", "no-cache,no-store,must-revalidate");
		 headers.add("Pragma","no-cache");
		 headers.add("Expires","0");
		 ResponseEntity<Object> responseEntity=ResponseEntity.ok().headers(headers)
				 .contentLength(file.length())
		//		 .contentType(MediaType.parseMediaType("application/txt")).body(resource);
				 .contentType(MediaType.parseMediaType("image/jpeg")).body(resource);
				 

		 
		return responseEntity;
		 
	 }
	 @RequestMapping(value="/deletespare/{fn}",method=RequestMethod.GET)
		@CrossOrigin(origins="http://localhost:4200")
	 public String  filedeletegse(@PathVariable String fn)throws IOException
	 {
		 String fileName = Path+ fn;
		 File f= new File(fileName);
		 if(f.delete())
		 return ("successfully deleted");
		 else
			 return("no such file to delete");
			 
	 }
	
	
	@GetMapping("/displayspare/{pno}/{perpage}")
	@CrossOrigin(origins = "*")
	public List<spare> findsparenospare(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<spare> selectspareno = (List<spare>) service1.findBysparenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<spare> selectspareno1 = (List<spare>) service1.findByspareodm(seqno, pno, perpage);
			model.addAttribute("oem", seqno);	
			return selectspareno1;
					   
		}
	}
}