package com.app.Registration.controller;

import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.app.Registration.model.AircraftInfo;
import com.app.Registration.model.Sortie;
import com.app.Registration.repository.AircraftRepository;
import com.app.Registration.Exception.ResourceNotFoundException;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v1/")
public class AircraftController {
	@Autowired
	private AircraftRepository aircraftRepository;

	@GetMapping("/aircraftinfo")
	public @ResponseBody List<AircraftInfo> getAllAircraftInfo() {
		return aircraftRepository.findAll();
	}

	@PostMapping("/aircraftinfo")
	public AircraftInfo createAircraftInfo(@RequestBody AircraftInfo aircraftinfo) {
		return aircraftRepository.save(aircraftinfo);
	}

	@PutMapping("/aircraftinfo/{id}")
	public ResponseEntity<AircraftInfo> updateAircraftInfo(@PathVariable Long id, @RequestBody Sortie sortieDetails)
			throws ParseException {
		AircraftInfo aircraftinfo = aircraftRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Aircraftinfo not exist with id :" + id));
		aircraftinfo.setLast_flown_date(sortieDetails.getDate_flown());
		aircraftinfo.addEngine_STBD_hrs(sortieDetails.getStbd_hrs());
		aircraftinfo.addAarc(sortieDetails.getAarc());
		aircraftinfo.setFlight_cycle(sortieDetails.getFlight_cycle());
		aircraftinfo.setAircraft_status(sortieDetails.getAircraft_status());
		aircraftinfo.addApu_hrs(sortieDetails.getApu_hrs());
		aircraftinfo.addApu_c_hrs(sortieDetails.getApuc_hrs());
		aircraftinfo.addApu_cycle(sortieDetails.getApu_cycle());
		aircraftinfo.addApu_c_cycle(sortieDetails.getApuc_cycle());
		AircraftInfo updatedAircraftInfo = aircraftRepository.save(aircraftinfo);
		return ResponseEntity.ok(updatedAircraftInfo);
	}

	@DeleteMapping("/aircraftinfo/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAircraftInfo(@PathVariable Long id) {
		AircraftInfo aircraftinfo = aircraftRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Aircraft not exist with id :" + id));
		aircraftRepository.delete(aircraftinfo);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	@GetMapping("/aircraftinfo/{id}")
	public ResponseEntity<AircraftInfo> getAircraftInfoById(@PathVariable Long id) {
		AircraftInfo aircraftinfo = aircraftRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(aircraftinfo);
	}

	@GetMapping("/Aircraft/{aircraft}")
	public List<AircraftInfo> findbyaircraft(@PathVariable String aircraft) {
		System.out.println(aircraft);
		List<AircraftInfo> selectaircraft1 = (List<AircraftInfo>) aircraftRepository.findbyaircraft(aircraft);
		return selectaircraft1;
	}
}