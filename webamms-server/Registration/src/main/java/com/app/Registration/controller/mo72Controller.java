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
import com.app.Registration.model.mo72;
import com.app.Registration.service.mo72Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo72Controller {
	@Autowired
	private mo72Service service1;

	@GetMapping("/getmo72list")
	public List<mo72> fetchProductList() {
		List<mo72> gses = new ArrayList<mo72>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo72")
	public mo72 saveproduct(@RequestBody mo72 mo72) {
		return service1.saveservicetoDB(mo72);
	}

	@GetMapping("/getmo72byid/{id}")
	public mo72 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo72byidtest/{id}")
	public Optional<mo72> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo72/page/{pageNo}/{perpage}")
	public List<mo72> getPaginatedmo72(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo72(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo72")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo72")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo72")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo72/{pno}/{perpage}")
	public List<mo72> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<mo72> selectspareno = (List<mo72>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo72> selectspareno1 = (List<mo72>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}