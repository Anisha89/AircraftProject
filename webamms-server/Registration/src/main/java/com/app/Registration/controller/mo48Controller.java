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
import com.app.Registration.model.mo48;
import com.app.Registration.service.mo48Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo48Controller {
	@Autowired
	private mo48Service service1;

	@GetMapping("/getmo48list")
	public List<mo48> fetchProductList() {
		List<mo48> gses = new ArrayList<mo48>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo48")
	public mo48 saveproduct(@RequestBody mo48 mo48) {
		return service1.saveservicetoDB(mo48);
	}

	@GetMapping("/getmo48byid/{id}")
	public mo48 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo48byidtest/{id}")
	public Optional<mo48> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo48/page/{pageNo}/{perpage}")
	public List<mo48> getPaginatedmo48(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo48(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo48")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo48")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo48")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo48/{pno}/{perpage}")
	public List<mo48> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();

		List<mo48> selectspareno = (List<mo48>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo48> selectspareno1 = (List<mo48>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}