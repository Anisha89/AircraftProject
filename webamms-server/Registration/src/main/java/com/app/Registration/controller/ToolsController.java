package com.app.Registration.controller;

					
							   
								
						   
						   
							
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

											 

import org.springframework.beans.factory.annotation.Autowired;
													   
											
										  
											   
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
import com.app.Registration.model.Tools;

import com.app.Registration.service.ToolsService;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;


import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;


@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ToolsController {
	@Autowired
	private ToolsService service2;
	@Autowired
	private static final String Path = Constants.ImageUploadingPath;
	@GetMapping("/gettoolslist")
	public List<Tools> fetchProductList() {
		List<Tools> toolss = new ArrayList<Tools>();
		toolss = service2.fetchProductList();
		return toolss;
	}

	@GetMapping("/gettoolslist1/{val}")
	public List<Tools> fetchserviceBylist(@PathVariable String val) {
		return service2.findlist(val);
	}

	@PostMapping("/addtools")
	public Tools saveproduct(@RequestBody Tools tools) {
		return service2.saveToolstoDB(tools);
	}

	@GetMapping("/gettoolsbyid/{id}")
	public Tools fetchToolsById(@PathVariable int id) {
		return service2.fetchToolsById(id).get();
	}

	@DeleteMapping("/deletetoolsbyidtest/{id}")
	public Optional<Tools> DeleteToolsByIdtestt(@PathVariable int id) throws Exception {
		return service2.deletetoolsByIdtest(id);
	}

	@GetMapping("/tools1/page/{pageNo}/{perpage}")
	public List<Tools> getPaginatedToolss(@PathVariable int pageNo, @PathVariable int perpage) {
		return service2.findPaginatedtools(pageNo, perpage);
	}

	@GetMapping("/getcountlisttools")
	public long mycounttools() {
		return service2.getcount();
	}

	@GetMapping("/findlasttools")
	public int findlasttools() {
		return service2.findlast();
	}

	@GetMapping("/getcounttools")
	public int mycounttools(Model model, @RequestParam String toolsno) {
		toolsno = toolsno.toLowerCase();
		return service2.counttools(toolsno);
	}

	
	
	 private static String UPLOAD_DIR="uploads";
		
	 @RequestMapping(value="uploadtools", method=RequestMethod.POST)
	 @CrossOrigin(origins="http://localhost:4200")
		public String uploadtools(@RequestParam("file") MultipartFile file, HttpServletRequest request)
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
	 @RequestMapping(value="/downloadtools/{filename}",method=RequestMethod.GET)
	 @CrossOrigin(origins="http://localhost:4200")
	 public ResponseEntity<Object> downloadfile(@PathVariable String fileName)throws IOException
	 {
          fileName=Path + fileName;
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
	 @RequestMapping(value="/deletetools/{fn}",method=RequestMethod.GET)
		@CrossOrigin(origins="http://localhost:4200")
	 public String  filedeletetools(@PathVariable String fn)throws IOException
	 {
		 String fileName = Path + fn;
		 File f= new File(fileName);
		 if(f.delete())
		 return ("successfully deleted");
		 else
			 return("no such file to delete");
			 
	 }
	


	@GetMapping("/displaytools/{pno}/{perpage}")
	public List<Tools> findtoolsnotools(Model model, @RequestParam String toolsno, @PathVariable int pno,
			@PathVariable int perpage) {
		toolsno = toolsno.toLowerCase();
		List<Tools> selecttoolsno = (List<Tools>) service2.findByToolsnumber(toolsno, pno, perpage);
		if (selecttoolsno.isEmpty() != true) {
			return selecttoolsno;
		} else {
			List<Tools> selecttoolsno1 = (List<Tools>) service2.findBytoolsgdm(toolsno, pno, perpage);
			model.addAttribute("gdm", toolsno);
			return selecttoolsno1;
   
		}
	}
}
	
	