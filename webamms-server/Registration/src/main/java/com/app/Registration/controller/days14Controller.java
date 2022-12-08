package com.app.Registration.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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
import com.app.Registration.model.days14;
import com.app.Registration.service.Days14Service;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class days14Controller {
	@Autowired
	private Days14Service service1;

	@GetMapping(value = "/getdays14list", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<days14> fetchProductList() {
		List<days14> gses = new ArrayList<days14>();
		gses = service1.fetchProductList();
		return gses;
	}

	@PostMapping(value = "/adddays14", produces = { MediaType.APPLICATION_JSON_VALUE })
	public days14 saveproduct(@RequestBody days14 days14) {
		return service1.savedays14(days14);
	}

	@GetMapping(value = "/getdays14byid/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public days14 fetchserviceById(@PathVariable int id) {
		return service1.fetchdays14ById(id).get();
	}

	@DeleteMapping(value = "/deletedays14byidtest/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public Optional<days14> DeleteserviceByIdtestt(@PathVariable int id) throws Exception {
		return service1.deletedays14ByIdtest(id);
	}

	@GetMapping(value = "/days14/page/{pageNo}/{perpage}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<days14> getPaginatedservices(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginateddays14(pageNo, perpage);
	}

	@GetMapping(value = "/getcountlistdays14", produces = { MediaType.APPLICATION_JSON_VALUE })
	public long mycountservice() {
		return service1.getcount();
	}

	@GetMapping(value = "/findlastdays14", produces = { MediaType.APPLICATION_JSON_VALUE })
	public int findlastservice() {
		return service1.findlast();
	}

	@GetMapping(value = "/getcountdays14", produces = { MediaType.APPLICATION_JSON_VALUE })
	public int mycountservice(Model model, @RequestParam String seqno) {
		seqno = seqno.toLowerCase();
		return service1.countdays14(seqno);
	}

	@GetMapping(value = "/displaydays14/{pno}/{perpage}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<days14> findserviceeno(Model model, @RequestParam String seqno, @PathVariable int pno,
			@PathVariable int perpage) {
		seqno = seqno.toLowerCase();
		List<days14> selectspareno = (List<days14>) service1.findBydays14number(seqno, pno, perpage);
		if (selectspareno.isEmpty() != true) {
			return selectspareno;
		} else {
			List<days14> selectspareno1 = (List<days14>) service1.findBydays14smrdno(seqno, pno, perpage);
			return selectspareno1;
		}
	}
}