package com.app.Registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "servicehistory")
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd@HH:mm:ss.SSSZ")
public class Servicehistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int sno;
	private String service;
	private String status;
	private Long servicedue;
	private Long startdate;
	private Long enddate;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Long lastservice;
	private int alert;
	private int servicecompleted;
	private String concessionnates;
	private Long nextservice;
	private String aircraft;

	public Servicehistory() {

	}

	public Servicehistory(int id, int sno, String service, String status, Long servicedue, Long startdate, Long enddate,
			Long lastservice, int alert, int servicecompleted, String concessionnates, long date_created,
			Long nextservice, String aircraft) {
		super();
		this.id = id;
		this.sno = sno;
		this.service = service;
		this.status = status;
		this.servicedue = servicedue;
		this.startdate = startdate;
		this.enddate = enddate;
		this.lastservice = lastservice;
		this.alert = alert;
		this.servicecompleted = servicecompleted;
		this.concessionnates = concessionnates;
		// this.date_created = date_created;
		this.nextservice = nextservice;
		this.aircraft = aircraft;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSno() {
		return sno;
	}

	public void setSno(int sno) {
		this.sno = sno;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Long getServicedue() {
		return servicedue;
	}

	public void setServicedue(Long servicedue) {
		this.servicedue = servicedue;
	}

	public Long getStartdate() {
		return startdate;
	}

	public void setStartdate(Long startdate) {
		this.startdate = startdate;
	}

	public Long getEnddate() {
		return enddate;
	}

	public void setEnddate(Long enddate) {
		this.enddate = enddate;
	}

	public Long getLastservice() {
		return lastservice;
	}

	public void setLastservice(Long lastservice) {
		this.lastservice = lastservice;
	}

	public int getAlert() {
		return alert;
	}

	public void setAlert(int alert) {
		this.alert = alert;
	}

	public int getServicecompleted() {
		return servicecompleted;
	}

	public void setServicecompleted(int servicecompleted) {
		this.servicecompleted = servicecompleted;
	}

	public String getConcessionnates() {
		return concessionnates;
	}

	public void setConcessionnates(String concessionnates) {
		this.concessionnates = concessionnates;
	}

	public Long getNextservice() {
		return nextservice;
	}

	public void setNextservice(Long nextservice) {
		this.nextservice = nextservice;
	}

	public String getAircraft() {
		return aircraft;
	}

	public void setAircraft(String aircraft) {
		this.aircraft = aircraft;
	}
}