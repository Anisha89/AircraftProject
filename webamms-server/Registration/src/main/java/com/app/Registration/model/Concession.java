package com.app.Registration.model;

import java.text.ParseException;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "concession")
public class Concession {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idconcession;
	private String aircraft;
	private String s_no;
	private String concession_no;
	private Long approval_date;
	private String details;
	private Long valid_upto;
	private Long extended_till;
	private Long removed_on;
	private String remarks;
	private String file;

	public Concession() {

	}

	public Concession(int idconcession, String aircraft, String s_no, String concession_no, Long approval_date,
			String details, Long valid_upto, Long extended_till, Long removed_on, String remarks, String file) {
		super();
		this.idconcession = idconcession;
		this.aircraft = aircraft;
		this.s_no = s_no;
		this.concession_no = concession_no;
		this.approval_date = approval_date;
		this.details = details;
		this.valid_upto = valid_upto;
		this.extended_till = extended_till;
		this.removed_on = removed_on;
		this.remarks = remarks;
		this.file = file;
	}

	public int getIdconcession() {
		return idconcession;
	}

	public void setIdconcession(int idconcession) {
		this.idconcession = idconcession;
	}

	public String getAircraft() {
		return aircraft;
	}

	public void setAircraft(String aircraft) {
		this.aircraft = aircraft;
	}

	public String getS_no() {
		return s_no;
	}

	public void setS_no(String s_no) {
		this.s_no = s_no;
	}

	public String getConcession_no() {
		return concession_no;
	}

	public void setConcession_no(String concession_no) {
		this.concession_no = concession_no;
	}

	public Long getApproval_date() {
		return approval_date;
	}

	public void setApproval_date(Long approval_date) throws ParseException {
		this.approval_date = approval_date;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public Long getValid_upto() {
		return valid_upto;
	}

	public void setValid_upto(Long valid_upto) throws ParseException {
		this.valid_upto = valid_upto;
	}

	public Long getExtended_till() {
		return extended_till;
	}

	public void setExtended_till(Long extended_till) throws ParseException {
		this.extended_till = extended_till;
	}

	public Long getRemoved_on() {
		return removed_on;
	}

	public void setRemoved_on(Long removed_on) throws ParseException {
		this.removed_on = removed_on;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getFile() {
		return file;
	}

	public void setFile(String file) {
		this.file = file;
	}
}
