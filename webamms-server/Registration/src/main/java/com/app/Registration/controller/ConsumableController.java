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
import com.app.Registration.model.Consumable;
//import com.app.Registration.model.Consumable;
import com.app.Registration.model.Tools;
import com.app.Registration.service.ConsumableService;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ConsumableController {
	@Autowired
	private ConsumableService service3;
	@Autowired
	private static final String Path = Constants.ImageUploadingPath;
	@GetMapping("/getconsumablelist")
	public List<Consumable> fetchProductList() {
		List<Consumable> consumabless = new ArrayList<Consumable>();
		consumabless = service3.fetchProductList();
		return consumabless;
	}

	@GetMapping("/getconsumablelist1/{val}")
	public List<Consumable> fetchserviceBylist(@PathVariable String val) {
		return service3.findlist(val);
	}

	@PostMapping("/addconsumable")
	public Consumable saveproduct(@RequestBody Consumable consumable) {
		return service3.saveConsumabletoDB(consumable);
	}




	@GetMapping("/getconsumablebyid/{id}")
	public Consumable fetchConsumableById(@PathVariable int id) {
		return service3.fetchConsumableById(id).get();
	}

	@DeleteMapping("/deleteconsumablebyidtest/{id}")
	public Optional<Consumable> DeleteConsumableByIdtestt(@PathVariable int id) throws Exception {
		return service3.deleteconsumableByIdtest(id);
	}

	@GetMapping("/consumable1/page/{pageNo}/{perpage}")
	public List<Consumable> getPaginatedConsumables(@PathVariable int pageNo, @PathVariable int perpage) {
		return service3.findPaginatedconsumable(pageNo, perpage);
	}

	@GetMapping("/getcountlistconsumable")
	public long mycountconsumable() {
		return service3.getcount();
	}

	@GetMapping("/findlastconsumable")
	public int findlastconsumable() {
		return service3.findlast();
	}

	@GetMapping("/getcountconsumable")
	public int mycountconsumable(Model model, @RequestParam String consumableno) {
		consumableno = consumableno.toLowerCase();
		return service3.countconsumable(consumableno);
	}
 
	private static String UPLOAD_DIR="uploads";
	
	 @RequestMapping(value="uploadconsumable", method=RequestMethod.POST)
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
	 @RequestMapping(value="/downloadconsumable/{fileName}",method=RequestMethod.GET)
	 @CrossOrigin(origins="http://localhost:4200")
	 public ResponseEntity<Object> downloadfile(@PathVariable String fileName)throws IOException
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
	 @RequestMapping(value="/deleteconsumable/{fn}",method=RequestMethod.GET)
		@CrossOrigin(origins="http://localhost:4200")
	 public String  filedeleteconsumable(@PathVariable String fn)throws IOException
	 {
		 String fileName = Path+ fn;
		 File f= new File(fileName);
		 if(f.delete())
		 return ("successfully deleted");
		 else
			 return("no such file to delete");
			 
	 }
	

	@GetMapping("/displayconsumable/{pno}/{perpage}")
	public List<Consumable> findconsumablenoconsumable(Model model, @RequestParam String consumableno,
			@PathVariable int pno, @PathVariable int perpage) {
		consumableno = consumableno.toLowerCase();
		List<Consumable> selectconsumableno = (List<Consumable>) service3.findByConsumablenumber(consumableno, pno,
				perpage);
		if (selectconsumableno.isEmpty() != true) {
			return selectconsumableno;
		} else {
			List<Consumable> selectconsumableno1 = (List<Consumable>) service3.findByConsumablegdm(consumableno, pno,
					perpage);
			model.addAttribute("oem", consumableno);
			return selectconsumableno1;
  
		}
	}
	}
