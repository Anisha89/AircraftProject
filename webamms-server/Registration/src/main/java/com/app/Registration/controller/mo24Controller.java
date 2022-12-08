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
import com.app.Registration.model.mo24;
import com.app.Registration.service.mo24Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo24Controller {
	@Autowired
	private mo24Service service1;

	@GetMapping("/getmo24list")
	public List<mo24> fetchProductList() {
		List<mo24> gses = new ArrayList<mo24>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo24")
	public mo24 saveproduct(@RequestBody mo24 mo24) {
		return service1.saveservicetoDB(mo24);
	}

	@GetMapping("/getmo24byid/{id}")
	public mo24 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo24byidtest/{id}")
	public Optional<mo24> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo24/page/{pageNo}/{perpage}")
	public List<mo24> getPaginatedmo24(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo24(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo24")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo24")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo24")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo24/{pno}/{perpage}")
	public List<mo24> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<mo24> selectspareno = (List<mo24>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo24> selectspareno1 = (List<mo24>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}