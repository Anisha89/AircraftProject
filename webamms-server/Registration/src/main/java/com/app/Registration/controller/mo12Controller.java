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
import com.app.Registration.model.mo12;
import com.app.Registration.service.mo12Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo12Controller {
	@Autowired
	private mo12Service service1;

	@GetMapping("/getmo12list")
	public List<mo12> fetchProductList() {
		List<mo12> gses = new ArrayList<mo12>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo12")
	public mo12 saveproduct(@RequestBody mo12 mo12) {
		return service1.saveservicetoDB(mo12);
	}

	@GetMapping("/getmo12byid/{id}")
	public mo12 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo12byidtest/{id}")
	public Optional<mo12> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo12/page/{pageNo}/{perpage}")
	public List<mo12> getPaginatedmo12(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo12(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo12")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo12")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo12")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo12/{pno}/{perpage}")
	public List<mo12> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<mo12> selectspareno = (List<mo12>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo12> selectspareno1 = (List<mo12>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}