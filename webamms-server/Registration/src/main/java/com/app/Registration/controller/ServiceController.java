package com.app.Registration.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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
import com.app.Registration.constants.*;
import com.app.Registration.model.servicetab;
import com.app.Registration.service.Service1Service1;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ServiceController {
	

	@Autowired
	private Service1Service1 service1;
	@Autowired
	private static final String Path = Constants.pdfUploadingPath;
	@GetMapping(value = "/getservicelist", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<servicetab> fetchProductList() {
		List<servicetab> gses = new ArrayList<servicetab>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping(value = "/addservice", produces = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin(origins = "*")
	public servicetab saveproduct(@RequestBody servicetab service) {
		return service1.saveservicetoDB(service);
	}

	@GetMapping(value = "/getservicebyid/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin(origins = "*")
	public servicetab fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping(value = "/deleteservicebyidtest/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin(origins = "*")
	public Optional<servicetab> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping(value = "/service1/page/{pageNo}/{perpage}", produces = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin(origins = "*")
	public List<servicetab> getPaginatedservices(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedservice(pageNo, perpage);
	}

	@GetMapping(value = "/getcountlistservice", produces = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin(origins = "*")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping(value = "/findlastservice", produces = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin(origins = "*")
	public int findlastservice() {
		return service1.findlast();
	}

	@RequestMapping(value = "/deleteservice/{fn}", method = RequestMethod.GET, produces = {
			MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin(origins = "*")
	public String filedeletegse(@PathVariable String fn) throws IOException {
		String fileName = Path + fn;
		File f = new File(fileName);
		if (f.delete())
			return ("successfully deleted");
		else
			return ("no such file to delete");
	}

	@GetMapping(value = "/getcountservice", produces = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin(origins = "*")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping(value = "/displayservice/{pno}/{perpage}", produces = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin(origins = "*")
	public List<servicetab> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<servicetab> selectspareno = (List<servicetab>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<servicetab> selectspareno1 = (List<servicetab>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}