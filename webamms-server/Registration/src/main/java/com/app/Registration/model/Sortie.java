package com.app.Registration.model;

import java.text.ParseException;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "aircraft_flying_hrs")
public class Sortie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long id;
	@Column(name = "src_from")
	private String src_from;
	@Column(name = "dst_no")
	private String dst_no;
	@Column(name = "sortie_no")
	private String sortie_no;
	@Column(name = "date_flown")
	private Long date_flown;
	@Column(name = "up_time_hrs")
	private String up_time_hrs;
	@Column(name = "down_time_hrs")
	private String down_time_hrs;
	@Column(name = "port_hrs")
	private String port_hrs;
	@Column(name = "stbd_hrs")
	private String stbd_hrs;
	@Column(name = "aarc")
	private String aarc;
	@Column(name = "flight_cycle")
	private Integer flight_cycle;
	@Column(name = "repair_log")
	private String repair_log;
	@Column(name = "after_flight_log")
	private String after_flight_log;
	@Column(name = "aircraft_status")
	private String aircraft_status;
	@Column(name = "apu_cycle")
	private String apu_cycle;
	@Column(name = "apu_hrs")
	private String apu_hrs;
	@Column(name = "apuc_cycle")
	private String apuc_cycle;
	@Column(name = "apuc_hrs")
	private String apuc_hrs;
	@Column(name = "file")
	private String file;
	@Column(name = "aircraft")
	private String aircraft;

	public Sortie() {

	}

	public Sortie(String src_from, String dst_no, String sortie_no, Long date_flown, String up_time_hrs,
			String down_time_hrs, String port_hrs, String stbd_hrs, String aarc, Integer flight_cycle,
			String repair_log, String after_flight_log, String aircraft_status, String apu_cycle, String apu_hrs,
			String apuc_cycle, String apuc_hrs, String file, String aircraft) {
		super();
		this.src_from = src_from;
		this.dst_no = dst_no;
		this.sortie_no = sortie_no;
		this.date_flown = date_flown;
		this.up_time_hrs = up_time_hrs;
		this.down_time_hrs = down_time_hrs;
		this.port_hrs = port_hrs;
		this.stbd_hrs = stbd_hrs;
		this.aarc = aarc;
		this.flight_cycle = flight_cycle;
		this.repair_log = repair_log;
		this.after_flight_log = after_flight_log;
		this.aircraft_status = aircraft_status;
		this.apu_cycle = apu_cycle;
		this.apu_hrs = apu_hrs;
		this.apuc_cycle = apuc_cycle;
		this.apuc_hrs = apuc_hrs;
		this.file = file;
		this.aircraft = aircraft;
	}

	public String getAircraft() {
		return aircraft;
	}

	public void setAircraft(String aircraft) {
		this.aircraft = aircraft;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSrc_from() {
		return src_from;
	}

	public void setSrc_from(String src_from) {
		this.src_from = src_from;
	}

	public String getDst_no() {
		return dst_no;
	}

	public void setDst_no(String dst_no) {
		this.dst_no = dst_no;
	}

	public String getSortie_no() {
		return sortie_no;
	}

	public void setSortie_no(String sortie_no) {
		this.sortie_no = sortie_no;
	}

	public Long getDate_flown() {
		return date_flown;
	}

	public void setDate_flown(long date_flown) throws ParseException {
		this.date_flown = date_flown;
	}

	public String getUp_time_hrs() {
		return up_time_hrs;
	}

	public void setUp_time_hrs(String up_time_hrs) {
		this.up_time_hrs = up_time_hrs;
	}

	public String getDown_time_hrs() {
		return down_time_hrs;
	}

	public void setDown_time_hrs(String down_time_hrs) {
		this.down_time_hrs = down_time_hrs;
	}

	public String getPort_hrs() {
		return port_hrs;
	}

	public void setPort_hrs(String port_hrs) {
		this.port_hrs = port_hrs;
	}

	public String getStbd_hrs() {
		return stbd_hrs;
	}

	public void setStbd_hrs(String stbd_hrs) {
		this.stbd_hrs = stbd_hrs;
	}

	public String getAarc() {
		return aarc;
	}

	public void setAarc(String aarc) {
		this.aarc = aarc;
	}

	public Integer getFlight_cycle() {
		return flight_cycle;
	}

	public void setFlight_cycle(Integer flight_cycle) {
		this.flight_cycle = flight_cycle;
	}

	public String getRepair_log() {
		return repair_log;
	}

	public void setRepair_log(String repair_log) {
		this.repair_log = repair_log;
	}

	public String getAfter_flight_log() {
		return after_flight_log;
	}

	public void setAfter_flight_log(String after_flight_log) {
		this.after_flight_log = after_flight_log;
	}

	public String getAircraft_status() {
		return aircraft_status;
	}

	public void setAircraft_status(String aircraft_status) {
		this.aircraft_status = aircraft_status;
	}

	public String getApu_cycle() {
		return apu_cycle;
	}

	public void setApu_cycle(String apu_cycle) {
		this.apu_cycle = apu_cycle;
	}

	public String getApu_hrs() {
		return apu_hrs;
	}

	public void setApu_hrs(String apu_hrs) {
		this.apu_hrs = apu_hrs;
	}

	public String getApuc_cycle() {
		return apuc_cycle;
	}

	public void setApuc_cycle(String apuc_cycle) {
		this.apuc_cycle = apuc_cycle;
	}

	public String getApuc_hrs() {
		return apuc_hrs;
	}

	public void setApuc_hrs(String apuc_hrs) {
		this.apuc_hrs = apuc_hrs;
	}

	public String getFile() {
		return file;
	}

	public void setFile(String file) {
		this.file = file;
	}
}