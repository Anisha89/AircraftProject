package com.app.Registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "spare")
public class spare {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idspare;
	private String seqno;
	private String partno;
	private String oem;
	private String description;
	private String imgname;
	private long date_created;

	public spare() {

	}

	public spare(int idspare, String seqno, String partno, String oem, String description, String imgname,
			long date_created) {
		super();
		this.idspare = idspare;
		this.seqno = seqno;
		this.partno = partno;
		this.oem = oem;
		this.description = description;
		this.imgname = imgname;
		this.date_created = date_created;
	}

	public int getIdspare() {
		return idspare;
	}

	public void setIdspare(int idspare) {
		this.idspare = idspare;
	}

	public String getSeqno() {
		return seqno;
	}

	public void setSeqno(String seqno) {
		this.seqno = seqno;
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

	public String getImgname() {
		return imgname;
	}

	public void setImgname(String imgname) {
		this.imgname = imgname;
	}

	public long getDate_created() {
		return date_created;
	}

	public void setDate_created(long date_created) {
		this.date_created = date_created;
	}
}