package com.app.Registration.model;

import java.sql.Date;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;


@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String emailId;
	private String userName;
	private String password;
	private String imgname;
	private long date_created;
	private String reset_Token;
	  @CreationTimestamp
	  private Date date;
	private LocalDateTime token_creation_date;
	private long time_updated;
	private String roll;

	public User() {

	}

	public User(int id, String emailId, String userName, String password, String imgname, long date_created,
			long time_updated, String reset_Token, LocalDateTime token_creation_date, String roll) {
		super();
		this.id = id;
		this.emailId = emailId;
		this.userName = userName;
		this.password = password;
		this.imgname = imgname;
		this.date_created = date_created;
		this.time_updated = time_updated;
		this.reset_Token = reset_Token;
		this.token_creation_date = token_creation_date;
		this.roll = roll;
	}

	public String getRoll() {
		return roll;
	}

	public void setRoll(String roll) {
		this.roll = roll;
	}

	public String getImgname() {
		return imgname;
	}

	public void setImgname(String imgname) {
		this.imgname = imgname;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getDate_created() {
		return date_created;
	}

	public void setDate_created(long date_created) {
		this.date_created = date_created;
	}

	public long getTime_updated() {
		return time_updated;
	}

	public void setTime_updated(long time_updated) {
		this.time_updated = time_updated;
	}

	public String getReset_Token() {
		return reset_Token;
	}

	public void setReset_Token(String reset_Token) {
		this.reset_Token = reset_Token;
	}

	public LocalDateTime getToken_creation_date() {
		return token_creation_date;
	}

	public void setToken_creation_date(LocalDateTime token_creation_date) {
		this.token_creation_date = token_creation_date;
	}
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}