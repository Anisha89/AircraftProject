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
import com.app.Registration.model.mo6;
import com.app.Registration.service.mo6Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo6Controller {
	@Autowired
	private mo6Service service1;

	@GetMapping("/getmo6list")
	public List<mo6> fetchProductList() {
		List<mo6> gses = new ArrayList<mo6>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo6")
	public mo6 saveproduct(@RequestBody mo6 mo6) {
		return service1.saveservicetoDB(mo6);
	}

	@GetMapping("/getmo6byid/{id}")
	public mo6 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo6byidtest/{id}")
	public Optional<mo6> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo6/page/{pageNo}/{perpage}")
	public List<mo6> getPaginatedmo6(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo6(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo6")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo6")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo6")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo6/{pno}/{perpage}")
	public List<mo6> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<mo6> selectspareno = (List<mo6>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo6> selectspareno1 = (List<mo6>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}