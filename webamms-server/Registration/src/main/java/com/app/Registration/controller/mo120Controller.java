package com.app.Registration.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.app.Registration.model.mo120;
import com.app.Registration.service.mo120Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo120Controller {
	@Autowired
	private mo120Service service1;

	@GetMapping(value = "/getmo120list", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<mo120> fetchProductList() {
		List<mo120> gses = new ArrayList<mo120>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping(value = "/addmo120", produces = { MediaType.APPLICATION_JSON_VALUE })
	public mo120 saveproduct(@RequestBody mo120 mo120) {
		return service1.saveservicetoDB(mo120);
	}

	@GetMapping(value = "/getmo120byid/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public mo120 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping(value = "/deletemo120byidtest/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public Optional<mo120> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping(value = "/mo120/page/{pageNo}/{perpage}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<mo120> getPaginatedmo120(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo120(pageNo, perpage);
	}

	@GetMapping(value = "/getcountlistmo120", produces = { MediaType.APPLICATION_JSON_VALUE })
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo120")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping(value = "/getcountmo120", produces = { MediaType.APPLICATION_JSON_VALUE })
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping(value = "/displaymo120/{pno}/{perpage}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<mo120> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<mo120> selectspareno = (List<mo120>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo120> selectspareno1 = (List<mo120>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}