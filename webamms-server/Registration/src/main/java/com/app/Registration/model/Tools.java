package com.app.Registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tools")
public class Tools {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idtools;
	private String sno;
	private String imgname;
	private String toolsno;
	private String partno;
	private String gdm;//oem
	private String description;
	private long date_created;

	public Tools() {

	}

	public Tools(int idtools, String sno, String imgname, String toolsno, String partno, String gdm, String description,
			long date_created) {
		super();
		this.idtools = idtools;
		this.sno = sno;
		this.imgname = imgname;
		this.toolsno = toolsno;
		this.partno = partno;
		this.gdm = gdm;
		this.description = description;
		this.date_created = date_created;
	}

	public int getIdtools() {
		return idtools;
	}

	public void setIdtools(int idtools) {
		this.idtools = idtools;
	}

	public String getSno() {
		return sno;
	}

	public void setSno(String sno) {
		this.sno = sno;
	}

	public String getImgname() {
		return imgname;
	}

	public void setImgname(String imgname) {
		this.imgname = imgname;
	}

	public String getToolsno() {
		return toolsno;
	}

	public void setToolsno(String toolsno) {
		this.toolsno = toolsno;
	}

	public String getPartno() {
		return partno;
	}

	public void setPartno(String partno) {
		this.partno = partno;
	}

	public String getgdm() {
		return gdm;
	}

	public void setgdm(String gdm) {
		this.gdm = gdm;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public long getDate_created() {
		return date_created;
	}

	public void setDate_created(long date_created) {
		this.date_created = date_created;
	}
}