package com.app.Registration.controller;

import java.util.regex.Pattern;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.Registration.constants.Constants;
import com.app.Registration.model.User;
import com.app.Registration.response.MessageResponse;
import com.app.Registration.service.EmailService;
//import com.app.Registration.service.RegistrationService;
import com.app.Registration.service.RegistrationService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import java.util.Optional;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import org.springframework.mail.SimpleMailMessage;

//import com.app.Registration.constants.Constants;
//import com.app.Registration.model.User;
//import com.app.Registration.constants.*;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RegistrationController {
	String filename;
	String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\." + "[a-zA-Z0-9_+&*-]+)*@" + "(?:[a-zA-Z0-9-]+\\.)+[a-z"
			+ "A-Z]{2,7}$";

	@Autowired
	private JavaMailSender sender;
	@Autowired
	private static final String Path = Constants.ImageUploadingPath;

	
	@Autowired
    private EmailService emailService;


	@Autowired
	private RegistrationService service;
	

	@GetMapping("/getuserlist")
	public List<User> fetchProductList() {
		List<User> users = new ArrayList<User>();
		users = service.fetchProductList();
		return users;
	}

	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmailId();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			User userobj = service.fetchUserByEmailId(tempEmailId);
			if (userobj != null) {
				throw new Exception("User with " + tempEmailId + "is already exist");
			}
		}
		User userobj = null;
		userobj = service.saveUser(user);
		return userobj;
	}

	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmailId();
		String tempPass = user.getPassword();
		User userobj = null;
		if (tempEmailId != null && tempPass != null) {
			userobj = service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if (userobj == null) {
			throw new Exception("Bad credentials c");
		}
		return userobj;
	}

	@PostMapping("/adduser")
	public User saveproduct(@RequestBody User user) {
		return service.saveUsertoDB(user);
	}

	@GetMapping("/getuserbyid/{id}")
	public User fetchUserById(@PathVariable int id) {
		return service.fetchUserById(id).get();
	}
	
	@GetMapping("/getbyuserid/{id}")
	public int getbyUserId(@PathVariable String id) {
		return service.getbyUserId(id);
	}

	@DeleteMapping("/deleteuserbyidtest/{id}")
	public Optional<User> DeleteUserByIdtestt(@PathVariable int id) throws Exception {
		return service.deleteuserByIdtest(id);

	}

	@GetMapping("/user1/page/{pageNo}/{perpage}")
	public List<User> getPaginatedUsers(@PathVariable int pageNo, @PathVariable int perpage) {
		return service.findPaginated(pageNo, perpage);
	}

	@GetMapping("/getcountlist")
	public long mycount() {
		return service.getcount();
	}

	@GetMapping("/findlast")
	public int findlast() {
		return service.findlast();
	}

	@RequestMapping(value = "/delete/{fn}", method = RequestMethod.GET)
	public String filedelete(@PathVariable String fn) throws IOException {
		filename = Path + fn;
		File f = new File(filename);
		if (f.delete())
			return ("successfully deleted");
		else
			return ("no such file to delete");
	}

	@GetMapping("/displayusername/{pno}/{perpage}")
	public List<User> findUsernameuser(Model model, @RequestParam String username, @PathVariable int pno,
			@PathVariable int perpage) {
		username = username.toLowerCase();
		Pattern pat = Pattern.compile(emailRegex);
		boolean b = pat.matcher(username).matches();
		if (b != true) {
			List<User> cities = (List<User>) service.findByUsername(username, pno, perpage);
			model.addAttribute("userName", username);
			return cities;
		} else {

			List<User> cities = (List<User>) service.findByEmail(username, pno, perpage);
			model.addAttribute("emailId", username);
			return cities;
		}
	}

	@GetMapping("/getcountuser")
	public int mycountuser(Model model, @RequestParam String username) {
		username = username.toLowerCase();
		return service.countuser(username);
	}


	@PostMapping("/forgotpassword")
	public ResponseEntity<?> forgot(@RequestBody User user) {
		  ResponseEntity<MessageResponse> responsemsg=null;
	      String email = user.getEmailId();
         String response = service.forgotPassword(email);
		if (!response.startsWith("Invalid")) {
			response = "http://localhost:4200/#/resetpassword?token=" + response;
			try {
				emailService.sendMail(email, "Reset Password", response);
			} catch (MessagingException e) {

				e.printStackTrace();
			}
			  return  responsemsg=ResponseEntity.ok(new MessageResponse("password reset token send successfully to user " + email));
			    } 
		
		

		return responsemsg;

		
	}

	@GetMapping("/sendMail/{mailid}/{tok}")
	public String sendMail(@PathVariable String mailid, @PathVariable String tok) {
		SimpleMailMessage message = new SimpleMailMessage();
		String bod = "http://localhost:4200/#/resetpassword/" + tok;
		message.setTo(mailid);
		message.setSubject("Forget Password Recovery");
		message.setText(bod);
		sender.send(message);
		return ("email send successfully");
	}



	@PutMapping("/resetpassword")
	public ResponseEntity<?>  resetPassword(@RequestParam String token, @RequestBody User user) {
		//User use1 = new User();
		String password =user.getPassword();
		service.resetPassword(token, password);
	    return ResponseEntity.ok(new MessageResponse("password updated Successfully"));
	}

	@RequestMapping(value = "/tokenselection/{tok}", method = RequestMethod.GET)
	public User tokenselectionprocess(@PathVariable String tok) {
		User usetok = new User();
		usetok = service.toksel(tok);
		return usetok;
	}

	@RequestMapping(value = "/mailcheckinregister/{mail}", method = RequestMethod.GET)
	public User emailcheck(@PathVariable String mail) throws Exception {
		User userobj = service.fetchUserByEmailId(mail);
		if (userobj == null)
			return null;
		else
			return userobj;
	}
	
	
	//image upload
	
	
	 private static String UPLOAD_DIR="uploads";
		
	 @RequestMapping(value="upload", method=RequestMethod.POST)
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
	 @RequestMapping(value="/download/{filename}",method=RequestMethod.GET)
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
	 @RequestMapping(value="/deleteimage/{fn}",method=RequestMethod.GET)
		@CrossOrigin(origins="http://localhost:4200")
	 public String  filedeletetools(@PathVariable String fn)throws IOException
	 {
		 String fileName = Path+ fn;
		 File f= new File(fileName);
		 if(f.delete())
		 return ("successfully deleted");
		 else
			 return("no such file to delete");
			 
	 }
	


}