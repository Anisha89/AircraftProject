package com.app.Registration.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.app.Registration.model.Servicehistory;
import com.app.Registration.repository.ServicehistoryRepository;
import com.app.Registration.service.ServicehistoryService;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ServicehistoryController {
	@Autowired
	private ServicehistoryRepository servicerepo;

	@Autowired
	private ServicehistoryService service2;

	@GetMapping("/getServicehistorylist")
	@CrossOrigin(origins = "*")
	public List<Servicehistory> fetchProductList() {
		List<Servicehistory> schedules = new ArrayList<Servicehistory>();
		schedules = service2.fetchProductList();
		return schedules;
	}

	@PostMapping("/addServicehistory")
	@CrossOrigin(origins = "*")
	public Servicehistory saveproduct(@RequestBody Servicehistory service) {
		return service2.saveServicehistorytoDB(service);
	}

	@GetMapping("/getServicehistorybyid/{id}")
	@CrossOrigin(origins = "*")
	public Servicehistory fetchServicehistoryById(@PathVariable int id) {
		return service2.fetchServicehistoryById(id).get();
	}

	@GetMapping("/servicehistory1/page/{pageNo}/{perpage}")
	@CrossOrigin(origins = "*")
	public List<Servicehistory> getPaginatedServicehistorys(@PathVariable int pageNo, @PathVariable int perpage) {
		return service2.findPaginatedservicehistory(pageNo, perpage);
	}

	@GetMapping("/getcountlistservicehistory")
	@CrossOrigin(origins = "*")
	public long mycountservicehistory() {
		return service2.getcount();
	}

	@GetMapping("/findlastservicehistory")
	@CrossOrigin(origins = "*")
	public int findlastservicehistory() {
		return service2.findlast();
	}

	@GetMapping("/getCompletedCount")
	@CrossOrigin(origins = "*")
	public int getCompletedCount() {
		return service2.getCompletedCount();
	}

	@GetMapping("/getNotStartedCount")
	@CrossOrigin(origins = "*")
	public int getNotStartedCount() {
		return service2.getNotStartedCount();
	}

	@GetMapping("/getProgressCount")
	@CrossOrigin(origins = "*")
	public int getProgressCount() {
		return service2.getProgressCount();
	}

	@GetMapping("/getallbydatebetween")
	@CrossOrigin(origins = "*")
	public List<Servicehistory> getAllByDateBetween(@RequestParam("startdate") Long startdate,
			@RequestParam("enddate") Long enddate) {
		return servicerepo.findByDateBetween(startdate, enddate);
	}

	@GetMapping("/servicehistoryaircraft/{aircraft}")
	@CrossOrigin(origins = "*")
	public List<Servicehistory> findbyaircraft1(@PathVariable String aircraft) {
		System.out.println(aircraft);
		List<Servicehistory> selectaircraft = (List<Servicehistory>) service2.findbyaircraft1(aircraft);
		return selectaircraft;
	}

	@GetMapping("/servicehistoryservice/{service}")
	@CrossOrigin(origins = "*")
	public List<Servicehistory> findbyservice(@PathVariable String service) {
		System.out.println(service);
		List<Servicehistory> selectaircraft = (List<Servicehistory>) service2.findbyservice(service);
		return selectaircraft;
	}

	@GetMapping("/displayservicehistory/{aircraft}/{pno}/{perpage}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Servicehistory> findserviceservicehistory(@PathVariable String aircraft, @PathVariable int pno,
			@PathVariable int perpage) {
		List<Servicehistory> selectservice1 = findbyaircraft1(aircraft);
		System.out.println(selectservice1);
		List<Servicehistory> subsets = new ArrayList<>();
		int startRow = (pno - 1) * perpage;
		int endRow = startRow + perpage;
		endRow = (endRow > selectservice1.size() ? selectservice1.size() : endRow);
		for (int row = startRow; row < endRow; row++) {
			subsets.add(selectservice1.get(row));
		}
		return subsets;
	}
}