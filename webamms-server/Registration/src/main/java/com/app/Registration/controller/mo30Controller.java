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
import com.app.Registration.model.mo30;
import com.app.Registration.service.mo30Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo30Controller {
	@Autowired
	private mo30Service service1;

	@GetMapping("/getmo30list")
	public List<mo30> fetchProductList() {
		List<mo30> gses = new ArrayList<mo30>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo30")
	public mo30 saveproduct(@RequestBody mo30 mo30) {
		return service1.saveservicetoDB(mo30);
	}

	@GetMapping("/getmo30byid/{id}")
	public mo30 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo30byidtest/{id}")
	public Optional<mo30> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo30/page/{pageNo}/{perpage}")
	public List<mo30> getPaginatedmo30(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo30(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo30")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastm030")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo30")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displamo30/{pno}/{perpage}")
	public List<mo30> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<mo30> selectspareno = (List<mo30>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo30> selectspareno1 = (List<mo30>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}