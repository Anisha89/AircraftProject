package com.app.Registration.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.Registration.Exception.ResourceNotFoundException;
import com.app.Registration.constants.Constants;
import com.app.Registration.model.Sortie;
import com.app.Registration.repository.AircraftRepository;
import com.app.Registration.repository.SortieRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SortieController {
	@Autowired
	public SortieRepository sortierepository;

	@Autowired
	public AircraftRepository aircraftRepository;
	@Autowired
	private static final String Path = Constants.pdfUploadingPath;
	@Autowired
	@CrossOrigin(origins = "*")
	@GetMapping("/sortie")
	public @ResponseBody List<Sortie> getallSortie() {
		return sortierepository.findAll();
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/sortie/{id}")
	public ResponseEntity<Sortie> getsortieById(@PathVariable Long id) {
		Sortie sortie = sortierepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Sortie not exist with id :" + id));
		return ResponseEntity.ok(sortie);
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/sortie")
	public Sortie createSortie(@RequestBody Sortie sortie) {
		return sortierepository.save(sortie);
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getStatusAvailable")
	public int getStatusAvailable() {
		return sortierepository.getStatusAvailable();
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getStatusAog")
	public int getStatusAog() {
		return sortierepository.getStatusAog();
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getStatusInspection")
	public int getStatusInspection() {
		return sortierepository.getStatusInspection();
	}

	@CrossOrigin(origins = "*")
	@PutMapping("/sortie/{id}")
	public ResponseEntity<Sortie> updateSortie(@PathVariable Long id, @RequestBody Sortie sortieDetails)
			throws ParseException {
		Sortie sortie = sortierepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Aircraftinfo not exist with id :" + id));
		sortie.setSrc_from(sortieDetails.getSrc_from());
		sortie.setDst_no(sortieDetails.getDst_no());
		sortie.setSortie_no(sortieDetails.getSortie_no());
		sortie.setDate_flown(sortieDetails.getDate_flown());
		sortie.setUp_time_hrs(sortieDetails.getUp_time_hrs());
		sortie.setDown_time_hrs(sortieDetails.getDown_time_hrs());
		sortie.setPort_hrs(sortieDetails.getPort_hrs());
		sortie.setStbd_hrs(sortieDetails.getStbd_hrs());
		sortie.setAarc(sortieDetails.getAarc());
		sortie.setApu_hrs(sortieDetails.getApu_hrs());
		sortie.setApuc_hrs(sortieDetails.getApuc_hrs());
		sortie.setApu_cycle(sortieDetails.getApu_cycle());
		sortie.setApuc_cycle(sortieDetails.getApuc_cycle());
		sortie.setFlight_cycle(sortieDetails.getFlight_cycle());
		sortie.setAfter_flight_log(sortieDetails.getAfter_flight_log());
		sortie.setRepair_log(sortieDetails.getRepair_log());
		sortie.setAircraft_status(sortieDetails.getAircraft_status());
		sortie.setAircraft(sortieDetails.getAircraft());
		sortie.setFile(sortieDetails.getFile());
		Sortie updatedSortie = sortierepository.save(sortie);
		return ResponseEntity.ok(updatedSortie);
	}

	@CrossOrigin(origins = "*")
	@DeleteMapping("/sortie/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteSortie(@PathVariable Long id) {
		Sortie sortie = sortierepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Sortie not exist with id :" + id));
		sortierepository.delete(sortie);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	@GetMapping("/Sortie/{aircraft}/{startDate}/{endDate}/{optradio}")
	@CrossOrigin(origins = "*")
	public List<Sortie> findbyaircraft(@PathVariable String aircraft, @PathVariable("startDate") Long startDate,
			@PathVariable("endDate") Long endDate, @PathVariable("optradio") int optradio) {
		System.out.println(aircraft);
		List<Sortie> selectaircraft = (optradio == 0) ? (List<Sortie>) sortierepository.findbyaircraft(aircraft)
				: (List<Sortie>) sortierepository.findbyaircraft(aircraft, startDate, endDate);
		return selectaircraft;
	}

	@GetMapping("/Sortie/{aircraft}")
	@CrossOrigin(origins = "*")
	public List<Sortie> findbyaircraft(@PathVariable String aircraft) {
		System.out.println(aircraft);
		List<Sortie> selectaircraft = (List<Sortie>) sortierepository.findbyaircraft(aircraft);
		return selectaircraft;
	}
	
	private static String UPLOAD_DIR="uploads";
	
	 @RequestMapping(value="uploadsortie", method=RequestMethod.POST)
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
	 @RequestMapping(value="/downloadsortie/{fileName}",method=RequestMethod.GET)
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
	 @RequestMapping(value="/deletesortie/{fn}",method=RequestMethod.GET)
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
	


}