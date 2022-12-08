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
import com.app.Registration.model.mo15;
import com.app.Registration.service.mo15Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo15Controller {
	@Autowired
	private mo15Service service1;

	@GetMapping("/getmo15list")
	public List<mo15> fetchProductList() {
		List<mo15> gses = new ArrayList<mo15>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo15")
	public mo15 saveproduct(@RequestBody mo15 mo15) {
		return service1.saveservicetoDB(mo15);
	}

	@GetMapping("/getmo15byid/{id}")
	public mo15 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo15byidtest/{id}")
	public Optional<mo15> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo15/page/{pageNo}/{perpage}")
	public List<mo15> getPaginatedmo15(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo15(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo15")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo15")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo15")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo15/{pno}/{perpage}")
	public List<mo15> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();

		List<mo15> selectspareno = (List<mo15>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo15> selectspareno1 = (List<mo15>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}