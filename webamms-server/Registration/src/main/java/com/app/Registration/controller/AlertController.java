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
import org.springframework.web.bind.annotation.RestController;
import com.app.Registration.model.Alert;
import com.app.Registration.service.AlertService;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AlertController {
	@Autowired
	private AlertService service1;

	@GetMapping("/Alertaircraft/{aircraft}")
	public List<Alert> findbyaircraft2(@PathVariable String aircraft) {
		System.out.print(aircraft);
		List<Alert> selectaircraft = (List<Alert>) service1.findbyaircraft2(aircraft);
		return selectaircraft;
	}

	@GetMapping("/getalertlist")
	public List<Alert> fetchProductList() {
		List<Alert> schedules = new ArrayList<Alert>();
		schedules = service1.fetchProductList();
		return schedules;
	}

	@PostMapping("/addalert")
	public Alert saveproduct(@RequestBody Alert alert) {
		return service1.saveAlerttoDB(alert);
	}

	@GetMapping("/getalertbyid/{id}")
	public Alert fetchAlertById(@PathVariable int id) {
		return service1.fetchAlertById(id).get();
	}
}