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
import com.app.Registration.model.mo90;
import com.app.Registration.service.mo90Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo90Controller {
	@Autowired
	private mo90Service service1;

	@GetMapping("/getmo90list")
	public List<mo90> fetchProductList() {
		List<mo90> gses = new ArrayList<mo90>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo90")
	public mo90 saveproduct(@RequestBody mo90 mo90) {
		return service1.saveservicetoDB(mo90);
	}

	@GetMapping("/getmo90byid/{id}")
	public mo90 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo90byidtest/{id}")
	public Optional<mo90> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo90/page/{pageNo}/{perpage}")
	public List<mo90> getPaginatedmo90(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo90(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo90")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo90")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo90")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo90/{pno}/{perpage}")
	public List<mo90> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<mo90> selectspareno = (List<mo90>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo90> selectspareno1 = (List<mo90>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}