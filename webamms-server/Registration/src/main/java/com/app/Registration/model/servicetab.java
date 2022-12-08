package com.app.Registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "servicetab")
public class servicetab {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idservice;
	private String seqno;
	private String smrdno;
	private String ammtcno;
	private String type;
	private String cat;
	private String effectivity;
	private String description;
	private String trade;
	private long date_created;
	private String gsenos;
	private String sparenos;
	private String toolsnos;
	private String consumablenos;

	public servicetab() {

	}

	public servicetab(int idservice, String seqno, String smrdno, String ammtcno, String type, String cat,
			String effectivity, String description, String trade, long date_created, String gsenos, String sparenos,
			String toolsnos, String consumablenos) {
		super();
		this.idservice = idservice;
		this.seqno = seqno;
		this.smrdno = smrdno;
		this.ammtcno = ammtcno;
		this.type = type;
		this.cat = cat;
		this.effectivity = effectivity;
		this.description = description;
		this.trade = trade;
		this.date_created = date_created;
		this.gsenos = gsenos;
		this.sparenos = sparenos;
		this.toolsnos = toolsnos;
		this.consumablenos = consumablenos;
	}

	public String getConsumablenos() {
		return consumablenos;
	}

	public void setConsumablenos(String consumablenos) {
		this.consumablenos = consumablenos;
	}

	public String getToolsnos() {
		return toolsnos;
	}

	public void setToolsnos(String toolsnos) {
		this.toolsnos = toolsnos;
	}

	public String getSparenos() {
		return sparenos;
	}

	public void setSparenos(String sparenos) {
		this.sparenos = sparenos;
	}

	public String getGsenos() {
		return gsenos;
	}

	public void setGsenos(String gsenos) {
		this.gsenos = gsenos;
	}

	public long getDate_created() {
		return date_created;
	}

	public void setDate_created(long date_created) {
		this.date_created = date_created;
	}

	public int getIdservice() {
		return idservice;
	}

	public void setIdservice(int idservice) {
		this.idservice = idservice;
	}

	public String getSeqno() {
		return seqno;
	}

	public void setSeqno(String seqno) {
		this.seqno = seqno;
	}

	public String getSmrdno() {
		return smrdno;
	}

	public void setSmrdno(String smrdno) {
		this.smrdno = smrdno;
	}

	public String getAmmtcno() {
		return ammtcno;
	}

	public void setAmmtcno(String ammtcno) {
		this.ammtcno = ammtcno;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getCat() {
		return cat;
	}

	public void setCat(String cat) {
		this.cat = cat;
	}

	public String getEffectivity() {
		return effectivity;
	}

	public void setEffectivity(String effectivity) {
		this.effectivity = effectivity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTrade() {
		return trade;
	}

	public void setTrade(String trade) {
		this.trade = trade;
	}
}