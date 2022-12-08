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

import com.app.Registration.constants.Constants;
import com.app.Registration.model.Gse;
import com.app.Registration.model.Tools;
import com.app.Registration.service.GseService;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class GseController {
	@Autowired
	private GseService service1;
	@Autowired
	private static final String Path = Constants.ImageUploadingPath;
	@GetMapping("/getgselist")
	public List<Gse> fetchProductList() {
		List<Gse> gses = new ArrayList<Gse>();
		gses = service1.fetchProductList();
		return gses;
	}

	@GetMapping("/getgselist1/{val}")
	public List<Gse> fetchserviceBylist(@PathVariable String val) {
		return service1.findlist(val);
	}

	@PostMapping("/addgse")
	public Gse saveproduct(@RequestBody Gse gse) {
		return service1.saveGsetoDB(gse);
	}




	@GetMapping("/getgsebyid/{id}")
	public Gse fetchGseById(@PathVariable int id) {
		return service1.fetchGseById(id).get();
	}

	@DeleteMapping("/deletegsebyidtest/{id}")
	public Optional<Gse> DeleteGseByIdtestt(@PathVariable int id) throws Exception {
		return service1.deletegseByIdtest(id);
	}

	@GetMapping("/gse1/page/{pageNo}/{perpage}")
	public List<Gse> getPaginatedGses(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedgse(pageNo, perpage);
	}

	@GetMapping("/getcountlistgse")
	public long mycountgse() {
		return service1.getcount();
	}

	@GetMapping("/findlastgse")
	public int findlastgse() {
		return service1.findlast();
	}

	@GetMapping("/getcountgse")
	public int mycountgse(Model model, @RequestParam String gseno) {
		gseno = gseno.toLowerCase();
		return service1.countgse(gseno);
	}
	
	private static String UPLOAD_DIR="uploads";
	
	 @RequestMapping(value="uploadgse", method=RequestMethod.POST)
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
	 @RequestMapping(value="/downloadgse/{fileName}",method=RequestMethod.GET)
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
	 @RequestMapping(value="/deletegse/{fn}",method=RequestMethod.GET)
		@CrossOrigin(origins="http://localhost:4200")
	 public String  filedeletegse(@PathVariable String fn)throws IOException
	 {
		 String fileName = Path + fn;
		 File f= new File(fileName);
		 if(f.delete())
		 return ("successfully deleted");
		 else
			 return("no such file to delete");
			 
	 }
	
	
	@GetMapping("/displaygse/{pno}/{perpage}")
	public List<Gse> findgsenogse(Model model, @RequestParam String gseno, @PathVariable int pno,
			@PathVariable int perpage) {
		gseno = gseno.toLowerCase();
		List<Gse> selectgseno = (List<Gse>) service1.findByGsenumber(gseno, pno, perpage);
		if (selectgseno.isEmpty() != true) {
			return selectgseno;
		} else {
			List<Gse> selectgseno1 = (List<Gse>) service1.findByGsegdm(gseno, pno, perpage);
			model.addAttribute("gdm", gseno);
			return selectgseno1;
		}
	}
}