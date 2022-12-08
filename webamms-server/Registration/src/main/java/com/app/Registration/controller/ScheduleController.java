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
import com.app.Registration.model.Schedule;
import com.app.Registration.service.ScheduleService;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ScheduleController {
	@Autowired
	private ScheduleService service1;

	@GetMapping("/getschedulelist")
	public List<Schedule> fetchProductList() {
		List<Schedule> schedules = new ArrayList<Schedule>();
		schedules = service1.fetchProductList();
		return schedules;
	}

	@PostMapping("/addschedule")
	public Schedule saveproduct(@RequestBody Schedule schedule) {
		return service1.saveScheduletoDB(schedule);
	}

	@GetMapping("/getschedulebyid/{id}")
	public Schedule fetchScheduleById(@PathVariable int id) {
		return service1.fetchScheduleById(id).get();
	}

	@DeleteMapping("/deleteschedulebyidtest/{id}")
	public Optional<Schedule> DeleteScheduleByIdtestt(@PathVariable int id) throws Exception {
		return service1.deletescheduleByIdtest(id);
	}

	@GetMapping("/schedule1/page/{pageNo}/{perpage}")
	public List<Schedule> getPaginatedSchedules(@PathVariable int pageNo, @PathVariable int perpage) {
		return service1.findPaginatedschedule(pageNo, perpage);
	}

	@GetMapping("/getcountlistschedule")
	public long mycountschedule() {
		return service1.getcount();
	}

	@GetMapping("/findlastschedule")
	public int findlastschedule() {
		return service1.findlast();
	}
	@GetMapping("/getservicedue3554")
	public List<Schedule> getservicedue3554() {
		return service1.getservicedue3554();
	}
	

	@GetMapping("/getservicedue3555")
	public List<Schedule> getservicedue3555() {
		return service1.getservicedue3555();
	}

	@GetMapping("/getservicedue3556")
	public List<Schedule> getservicedue3556() {
		return service1.getservicedue3556();
	}

	@GetMapping("/scheduleaircraft/{aircraft}")
	public List<Schedule> findbyaircraft(@PathVariable String aircraft) {
		System.out.print(aircraft);
		List<Schedule> selectaircraft = (List<Schedule>) service1.findbyaircraft(aircraft);
		return selectaircraft;
	}

	@GetMapping("/getcountschedule")
	public int mycountschedule(Model model, @RequestParam String concessionnates) {
		concessionnates = concessionnates.toLowerCase();
		return service1.countschedule(concessionnates);
	}

	@GetMapping("/displayschedule/{value}/{pno}/{perpage}")
	public List<Schedule> findconcessionnatesschedule(Model model, @RequestParam String concessionnates,
			@PathVariable int pno, @PathVariable int perpage) {
		concessionnates = concessionnates.toLowerCase();
		List<Schedule> selectconcessionnates = (List<Schedule>) service1.findBySchedulenumber(concessionnates, pno,
				perpage);
		if (selectconcessionnates.isEmpty() != true) {
			return selectconcessionnates;
		} else {
			List<Schedule> selectconcessionnates1 = (List<Schedule>) service1.findBySchedulenumber(concessionnates, pno,
					perpage);
			model.addAttribute("service", concessionnates);
			return selectconcessionnates1;
		}
	}
}