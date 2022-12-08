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
import com.app.Registration.model.mo1;
import com.app.Registration.service.mo1Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo1Controller {
	@Autowired
	private mo1Service service1;

	@GetMapping("/getmo1list")
	public List<mo1> fetchProductList() {
		List<mo1> gses = new ArrayList<mo1>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo1")
	public mo1 saveproduct(@RequestBody mo1 mo1) {
		return service1.saveservicetoDB(mo1);
	}

	@GetMapping("/getmo1byid/{id}")
	public mo1 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo1byidtest/{id}")
	public Optional<mo1> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo1/page/{pageNo}/{perpage}")
	public List<mo1> getPaginatedmo1(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo1(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo1")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo1")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo1")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo1/{pno}/{perpage}")
	public List<mo1> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<mo1> selectspareno = (List<mo1>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo1> selectspareno1 = (List<mo1>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}