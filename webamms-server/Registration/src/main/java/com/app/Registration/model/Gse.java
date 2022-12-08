package com.app.Registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "gse")
public class Gse {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idgse;
	private String sno;
	private String imgname;
	private String gseno;
	private String portno;
	private String gdm;
	private String description;
	private long date_created;

	public Gse() {

	}

	public Gse(int idgse, String sno, String imgname, String gseno, String portno, String gdm, String description,
			long date_created) {
		super();
		this.idgse = idgse;
		this.sno = sno;
		this.imgname = imgname;
		this.gseno = gseno;
		this.portno = portno;
		this.gdm = gdm;
		this.description = description;
		this.date_created = date_created;
	}

	public long getDate_created() {
		return date_created;
	}

	public void setDate_created(long date_created) {
		this.date_created = date_created;
	}

	public String getImgname() {
		return imgname;
	}

	public void setImgname(String imgname) {
		this.imgname = imgname;
	}

	public int getIdgse() {
		return idgse;
	}

	public void setIdgse(int idgse) {
		this.idgse = idgse;
	}

	public String getSno() {
		return sno;
	}

	public void setSno(String sno) {
		this.sno = sno;
	}

	public String getPortno() {
		return portno;
	}

	public void setPortno(String portno) {
		this.portno = portno;
	}

	public String getGdm() {
		return gdm;
	}

	public void setGdm(String gdm) {
		this.gdm = gdm;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getGseno() {
		return gseno;
	}

	public void setGseno(String gseno) {
		this.gseno = gseno;
	}
}