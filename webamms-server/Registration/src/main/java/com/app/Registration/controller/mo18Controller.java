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
import com.app.Registration.model.mo18;
import com.app.Registration.service.mo18Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo18Controller {
	@Autowired
	private mo18Service service1;

	@GetMapping("/getmo18list")
	public List<mo18> fetchProductList() {
		List<mo18> gses = new ArrayList<mo18>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo18")
	public mo18 saveproduct(@RequestBody mo18 mo18) {
		return service1.saveservicetoDB(mo18);
	}

	@GetMapping("/getmo18byid/{id}")
	public mo18 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo18byidtest/{id}")
	public Optional<mo18> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo18/page/{pageNo}/{perpage}")
	public List<mo18> getPaginatedmo18(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo18(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo18")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo18")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo18")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo18/{pno}/{perpage}")
	public List<mo18> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<mo18> selectspareno = (List<mo18>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo18> selectspareno1 = (List<mo18>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}