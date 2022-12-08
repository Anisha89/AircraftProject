package com.app.Registration.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mo120")
public class mo120 {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idservice;
	@Column(name = "seqno")
	private String seqno;
	@Column(name = "smrdno")
	private String smrdno;
	@Column(name = "ammtcno")
	private String ammtcno;
	@Column(name = "type")
	private String type;
	@Column(name = "cat")
	private String cat;
	@Column(name = "effectivity")
	private String effectivity;
	@Column(name = "description")
	private String description;
	@Column(name = "trade")
	private String trade;
	@Column(name = "date_created")
	private long date_created;
	private String gsenos;
	private String sparenos;
	private String toolsnos;
	private String consumablenos;
	@Column(name = "service_type")
	private String service_type = "120Mo";

	public mo120() {

	}

	public mo120(int idservice, String seqno, String smrdno, String ammtcno, String type, String cat,
			String effectivity, String description, String trade, long date_created, String gsenos, String sparenos,
			String service_type, String toolsnos, String consumablenos) {
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
		this.service_type = service_type;
		this.toolsnos = toolsnos;
		this.consumablenos = consumablenos;
	}

	public String getToolsnos() {
		return toolsnos;
	}

	public void setToolsnos(String toolsnos) {
		this.toolsnos = toolsnos;
	}

	public String getConsumablenos() {
		return consumablenos;
	}

	public void setConsumablenos(String consumablenos) {
		this.consumablenos = consumablenos;
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

	public long getDate_created() {
		return date_created;
	}

	public void setDate_created(long date_created) {
		this.date_created = date_created;
	}

	public String getGsenos() {
		return gsenos;
	}

	public void setGsenos(String gsenos) {
		this.gsenos = gsenos;
	}

	public String getSparenos() {
		return sparenos;
	}

	public void setSparenos(String sparenos) {
		this.sparenos = sparenos;
	}

	public String getService_type() {
		return service_type;
	}

	public void setService_type(String service_type) {
		this.service_type = service_type;
	}
}