package com.app.Registration.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "aircraftinfo")
public class AircraftInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "aircraft")
	private String aircraft;
	@Column(name = "tail")
	private String tail;
	@Column(name = " model")
	private String model;
	@Column(name = "first_flight_date")
	private Long first_flight_date;
	@Column(name = "last_flown_date")
	private Long last_flown_date;
	@Column(name = "sortie_no")
	private Integer sortie_no;
	@Column(name = "airflame_hours")
	private String airflame_hours;
	@Column(name = "engine_part_hrs")
	private String engine_part_hrs;
	@Column(name = "engine_STBD_hrs")
	private String engine_STBD_hrs;
	@Column(name = "aarc")
	private String aarc;
	@Column(name = "flight_cycle")
	private Integer flight_cycle;
	@Column(name = "aircraft_status")
	private String aircraft_status;
	@Column(name = "apu_hrs")
	private String apu_hrs;
	@Column(name = "apu_c_hrs")
	private String apu_c_hrs;
	@Column(name = " apu_cycle")
	private String apu_cycle;
	@Column(name = "apu_c_cycle")
	private String apu_c_cycle;

	public AircraftInfo() {

	}

	public AircraftInfo(long id, String aircraft, String tail, String model, Long first_flight_date,
			Long last_flown_date, Integer sortie_no, String airflame_hours, String engine_part_hrs,
			String engine_STBD_hrs, String aarc, Integer flight_cycle, String aircraft_status, String apu_hrs,
			String apu_c_hrs, String apu_cycle, String apu_c_cycle) {
		super();
		this.id = id;
		this.aircraft = aircraft;
		this.tail = tail;
		this.model = model;
		this.first_flight_date = first_flight_date;
		this.last_flown_date = last_flown_date;
		this.sortie_no = sortie_no;
		this.airflame_hours = airflame_hours;
		this.engine_part_hrs = engine_part_hrs;
		this.engine_STBD_hrs = engine_STBD_hrs;
		this.aarc = aarc;
		this.flight_cycle = flight_cycle;
		this.aircraft_status = aircraft_status;
		this.apu_hrs = apu_hrs;
		this.apu_c_hrs = apu_c_hrs;
		this.apu_cycle = apu_cycle;
		this.apu_c_cycle = apu_c_cycle;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAircraft() {
		return aircraft;
	}

	public void setAircraft(String aircraft) {
		this.aircraft = aircraft;
	}

	public String getTail() {
		return tail;
	}

	public void setTail(String tail) {
		this.tail = tail;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Long getFirst_flight_date() {
		return first_flight_date;
	}

	public void setFirst_flight_date(Long first_flight_date) {
		this.first_flight_date = first_flight_date;
	}

	public Long getLast_flown_date() {
		return last_flown_date;
	}

	public void setLast_flown_date(Long last_flown_date) {
		this.last_flown_date = last_flown_date;
	}

	public Integer getSortie_no() {
		return sortie_no;
	}

	public void setSortie_no(Integer sortie_no) {
		this.sortie_no = sortie_no;
	}

	public String getAirflame_hours() {
		return airflame_hours;
	}

	public void setAirflame_hours(String airflame_hours) {
		this.airflame_hours = airflame_hours;
	}

	public String getEngine_part_hrs() {
		return engine_part_hrs;
	}

	public void addEngine_part_hrs(String newengine_part_hrs) {
		int index1 = engine_part_hrs.indexOf(":");
		int time1hrs = Integer.parseInt(engine_part_hrs.substring(0, index1));
		int time1min = Integer.parseInt(engine_part_hrs.substring(index1 + 1));
		int index2 = newengine_part_hrs.indexOf(":");
		int time2hrs = Integer.parseInt(newengine_part_hrs.substring(0, index2));
		int time2min = Integer.parseInt(newengine_part_hrs.substring(index2 + 1));
		int time3min = time1min + time2min;
		int time3hrs = time1hrs + time2hrs;
		time3hrs = time3hrs + (time3min / 60);
		time3min = time3min % 60;
		String time = time3hrs + ":" + time3min;
		System.out.println(time);
		this.engine_part_hrs = time;
	}

	public String getEngine_STBD_hrs() {
		return engine_STBD_hrs;
	}

	public void addEngine_STBD_hrs(String newengine_STBD_hrs) {
		int index1 = engine_STBD_hrs.indexOf(":");
		int time1hrs = Integer.parseInt(engine_STBD_hrs.substring(0, index1));
		int time1min = Integer.parseInt(engine_STBD_hrs.substring(index1 + 1));
		int index2 = newengine_STBD_hrs.indexOf(":");
		int time2hrs = Integer.parseInt(newengine_STBD_hrs.substring(0, index2));
		int time2min = Integer.parseInt(newengine_STBD_hrs.substring(index2 + 1));
		int time3min = time1min + time2min;
		int time3hrs = time1hrs + time2hrs;
		time3hrs = time3hrs + (time3min / 60);
		time3min = time3min % 60;
		String time = time3hrs + ":" + time3min;
		System.out.println(time);
		this.engine_STBD_hrs = time;
	}

	public String getAarc() {
		return aarc;
	}

	public void addAarc(String newaarc) {
		int index1 = aarc.indexOf(":");
		int time1hrs = Integer.parseInt(aarc.substring(0, index1));
		int time1min = Integer.parseInt(aarc.substring(index1 + 1));
		int index2 = newaarc.indexOf(":");
		int time2hrs = Integer.parseInt(newaarc.substring(0, index2));
		int time2min = Integer.parseInt(newaarc.substring(index2 + 1));
		int time3min = time1min + time2min;
		int time3hrs = time1hrs + time2hrs;
		time3hrs = time3hrs + (time3min / 60);
		time3min = time3min % 60;
		String time = time3hrs + ":" + time3min;
		System.out.println(time);
		this.aarc = time;
	}

	public Integer getFlight_cycle() {
		return flight_cycle;
	}

	public void setFlight_cycle(Integer flight_cycle) {

		this.flight_cycle = flight_cycle;
	}

	public String getAircraft_status() {
		return aircraft_status;
	}

	public void setAircraft_status(String aircraft_status) {
		this.aircraft_status = aircraft_status;
	}

	public String getApu_hrs() {
		return apu_hrs;
	}

	public void addApu_hrs(String newapu_hrs) {
		int index1 = apu_hrs.indexOf(":");
		int time1hrs = Integer.parseInt(apu_hrs.substring(0, index1));
		int time1min = Integer.parseInt(apu_hrs.substring(index1 + 1));
		int index2 = newapu_hrs.indexOf(":");
		int time2hrs = Integer.parseInt(newapu_hrs.substring(0, index2));
		int time2min = Integer.parseInt(newapu_hrs.substring(index2 + 1));
		int time3min = time1min + time2min;
		int time3hrs = time1hrs + time2hrs;
		time3hrs = time3hrs + (time3min / 60);
		time3min = time3min % 60;
		String time = time3hrs + ":" + time3min;
		System.out.println(time);
		this.apu_hrs = time;
	}

	public String getApu_c_hrs() {
		return apu_c_hrs;
	}

	public void addApu_c_hrs(String newapu_c_hrs) {
		int index1 = apu_c_hrs.indexOf(":");
		int time1hrs = Integer.parseInt(apu_c_hrs.substring(0, index1));
		int time1min = Integer.parseInt(apu_c_hrs.substring(index1 + 1));
		int index2 = newapu_c_hrs.indexOf(":");
		int time2hrs = Integer.parseInt(newapu_c_hrs.substring(0, index2));
		int time2min = Integer.parseInt(newapu_c_hrs.substring(index2 + 1));
		int time3min = time1min + time2min;
		int time3hrs = time1hrs + time2hrs;
		time3hrs = time3hrs + (time3min / 60);
		time3min = time3min % 60;
		String time = time3hrs + ":" + time3min;
		System.out.println(time);
		this.apu_c_hrs = time;
	}

	public String getApu_cycle() {
		return apu_cycle;
	}

	public void addApu_cycle(String newapu_cycle) {
		int index1 = apu_cycle.indexOf(":");
		int time1hrs = Integer.parseInt(apu_cycle.substring(0, index1));
		int time1min = Integer.parseInt(apu_cycle.substring(index1 + 1));
		int index2 = newapu_cycle.indexOf(":");
		int time2hrs = Integer.parseInt(newapu_cycle.substring(0, index2));
		int time2min = Integer.parseInt(newapu_cycle.substring(index2 + 1));
		int time3min = time1min + time2min;
		int time3hrs = time1hrs + time2hrs;
		time3hrs = time3hrs + (time3min / 60);
		time3min = time3min % 60;
		String time = time3hrs + ":" + time3min;
		System.out.println(time);
		this.apu_cycle = time;
	}

	public String getApu_c_cycle() {
		return apu_c_cycle;
	}

	public void addApu_c_cycle(String newapu_c_cycle) {
		int index1 = apu_c_cycle.indexOf(":");
		int time1hrs = Integer.parseInt(apu_c_cycle.substring(0, index1));
		int time1min = Integer.parseInt(apu_c_cycle.substring(index1 + 1));
		int index2 = newapu_c_cycle.indexOf(":");
		int time2hrs = Integer.parseInt(newapu_c_cycle.substring(0, index2));
		int time2min = Integer.parseInt(newapu_c_cycle.substring(index2 + 1));
		int time3min = time1min + time2min;
		int time3hrs = time1hrs + time2hrs;
		time3hrs = time3hrs + (time3min / 60);
		time3min = time3min % 60;
		String time = time3hrs + ":" + time3min;
		System.out.println(time);
		this.apu_c_cycle = time;
	}
}