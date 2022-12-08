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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.app.Registration.model.mo60;
import com.app.Registration.service.mo60Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo60Controller {
	@Autowired
	private mo60Service service1;

	@GetMapping("/getmo60list")
	public List<mo60> fetchProductList() {
		List<mo60> gses = new ArrayList<mo60>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo60")
	public mo60 saveproduct(@RequestBody mo60 mo60) {
		return service1.saveservicetoDB(mo60);
	}

	@GetMapping("/getmo60byid/{id}")
	public mo60 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo60byidtest/{id}")
	public Optional<mo60> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo60/page/{pageNo}/{perpage}")
	public List<mo60> getPaginatedmo60(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo60(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo60")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo60")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo60")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo60/{pno}/{perpage}")
	public List<mo60> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();

		List<mo60> selectspareno = (List<mo60>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo60> selectspareno1 = (List<mo60>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}