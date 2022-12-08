package com.app.Registration.model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "alert")
public class Alert {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String servicetype;
	private Date servicedue;
	private String aircraft;
	private int sno;

	public Alert() {

	}

	public Alert(int id, String servicetype, Date servicedue, String aircraft, int sno) {
		super();
		this.id = id;
		this.servicetype = servicetype;
		this.servicedue = servicedue;
		this.aircraft = aircraft;
		this.sno = sno;
	}

	public int getSno() {
		return sno;
	}

	public void setSno(int sno) {
		this.sno = sno;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getServicetype() {
		return servicetype;
	}

	public void setServicetype(String servicetype) {
		this.servicetype = servicetype;
	}

	public Date getServicedue() {
		return servicedue;
	}

	public void setServicedue(Date servicedue) {
		this.servicedue = servicedue;
	}

	public String getAircraft() {
		return aircraft;
	}

	public void setAircraft(String aircraft) {
		this.aircraft = aircraft;
	}
}