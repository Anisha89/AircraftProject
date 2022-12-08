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
import com.app.Registration.model.mo36;
import com.app.Registration.service.mo36Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo36Controller {
	@Autowired
	private mo36Service service1;

	@GetMapping("/getmo36list")
	public List<mo36> fetchProductList() {
		List<mo36> gses = new ArrayList<mo36>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo36")
	public mo36 saveproduct(@RequestBody mo36 mo36) {
		return service1.saveservicetoDB(mo36);
	}

	@GetMapping("/getmo36byid/{id}")
	public mo36 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo36byidtest/{id}")
	public Optional<mo36> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo36/page/{pageNo}/{perpage}")
	public List<mo36> getPaginatedmo36(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo36(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo36")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo36")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo36")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo36/{pno}/{perpage}")
	public List<mo36> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<mo36> selectspareno = (List<mo36>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo36> selectspareno1 = (List<mo36>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}