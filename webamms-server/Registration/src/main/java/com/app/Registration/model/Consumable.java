package com.app.Registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "consumable")
public class Consumable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idconsumable;
	private String sno;
	private String imgname;
	private String consumableno;
	private String partno;
	private String oem;
	private String description;
	private long date_created;

	public Consumable() {

	}

	public Consumable(int idconsumable, String sno, String imgname, String consumableno, String partno, String oem,
			String description, long date_created) {
		super();
		this.idconsumable = idconsumable;
		this.sno = sno;
		this.imgname = imgname;
		this.consumableno = consumableno;
		this.partno = partno;
		this.oem = oem;
		this.description = description;
		this.date_created = date_created;
	}

	public int getIdconsumable() {
		return idconsumable;
	}

	public void setIdconsumable(int idconsumable) {
		this.idconsumable = idconsumable;
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

	public String getConsumableno() {
		return consumableno;
	}

	public void setConsumableno(String consumableno) {
		this.consumableno = consumableno;
	}

	public String getPartno() {
		return partno;
	}

	public void setPartno(String partno) {
		this.partno = partno;
	}

	public String getOem() {
		return oem;
	}

	public void setOem(String oem) {
		this.oem = oem;				 
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