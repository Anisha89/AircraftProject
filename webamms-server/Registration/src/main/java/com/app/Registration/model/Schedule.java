package com.app.Registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "schedule")
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd@HH:mm:ss.SSSZ")
public class Schedule {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idschedule;
	private int sno;
	private String service;
	private String status;
	private Long servicedue;
	private Long startdate;
	private Long enddate;
	private Long lastservice;
	private int alert;
	private int servicecompleted;
	private String concessionnates;
	private long date_created;
	private Long nextservice;
	private String aircraft;

	public Schedule() {

	}

	public Schedule(int idschedule, int sno, String service, String status, Long servicedue, Long startdate,
			Long enddate, Long lastservice, int alert, int servicecompleted, String concessionnates, long date_created,
			Long nextservice, String aircraft) {
		super();
		this.idschedule = idschedule;
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
		this.date_created = date_created;
		this.nextservice = nextservice;
		this.aircraft = aircraft;
	}

	public long getDate_created() {
		return date_created;
	}

	public void setDate_created(long date_created) {
		this.date_created = date_created;
	}

	public Long getnextservice() {
		return nextservice;
	}

	public void setnextservice(Long nextservice) {
		this.nextservice = nextservice;
	}

	public int getIdschedule() {
		return idschedule;
	}

	public void setIdschedule(int idschedule) {
		this.idschedule = idschedule;
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

	public String getAircraft() {
		return aircraft;
	}

	public void setAircraft(String aircraft) {
		this.aircraft = aircraft;
	}
}