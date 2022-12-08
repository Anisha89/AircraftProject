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
import com.app.Registration.model.mo3;
import com.app.Registration.service.mo3Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class mo3Controller {
	@Autowired
	private mo3Service service1;

	@GetMapping("/getmo3list")
	public List<mo3> fetchProductList() {
		List<mo3> gses = new ArrayList<mo3>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping("/addmo3")
	public mo3 saveproduct(@RequestBody mo3 mo3) {
		return service1.saveservicetoDB(mo3);
	}

	@GetMapping("/getmo3byid/{id}")
	public mo3 fetchserviceById(@PathVariable int id) {
		return service1.fetchServiceById(id).get();
	}

	@DeleteMapping("/deletemo3byidtest/{id}")
	public Optional<mo3> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deleteserviceByIdtest(id);
	}

	@GetMapping("/mo3/page/{pageNo}/{perpage}")
	public List<mo3> getPaginatedmo3(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedmo3(pageNo, perpage);
	}

	@GetMapping("/getcountlistmo3")
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping("/findlastmo3")
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping("/getcountmo3")
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countservice1(seqno);
	}

	@GetMapping("/displaymo3/{pno}/{perpage}")
	public List<mo3> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<mo3> selectspareno = (List<mo3>) service1.findByservicenumber(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<mo3> selectspareno1 = (List<mo3>) service1.findByservicesmrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}