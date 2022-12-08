package com.app.Registration.service;

import java.util.List;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import com.app.Registration.model.AircraftInfo;
import com.app.Registration.model.Alert;
import com.app.Registration.model.Concession;
import com.app.Registration.model.Consumable;
import com.app.Registration.model.Gse;
import com.app.Registration.model.Schedule;
import com.app.Registration.model.Servicehistory;
import com.app.Registration.model.Sortie;
import com.app.Registration.model.Tools;
import com.app.Registration.model.User;
import com.app.Registration.model.days14;
import com.app.Registration.model.mo1;
import com.app.Registration.model.mo12;
import com.app.Registration.model.mo120;
import com.app.Registration.model.mo15;
import com.app.Registration.model.mo18;
import com.app.Registration.model.mo24;
import com.app.Registration.model.mo3;
import com.app.Registration.model.mo30;
import com.app.Registration.model.mo36;
import com.app.Registration.model.mo48;
import com.app.Registration.model.mo6;
import com.app.Registration.model.mo60;
import com.app.Registration.model.mo72;
import com.app.Registration.model.mo90;
import com.app.Registration.model.servicetab;
import com.app.Registration.model.spare;

public interface Iservice {
	List<User> findPaginated(int pageNo, int perpage);

	List<User> findByUsername(String username, Pageable pageable);

	List<User> findByEmail(String username, Pageable pageable);

	List<Gse> findPaginatedgse(int pageNo, int perpage);

	List<Gse> findByUsernamegse(String username, Pageable pageable);

	List<Gse> findByEmailgse(String username, Pageable pageable);

	List<Gse> findByGsenumber(String gseno, Pageable pageable);

	List<spare> findPaginatedspare(int pageNo, int perpage);

	List<spare> findBysparenumber(String seqno, Pageable pageable);

	List<spare> findByspareodm(String odm, Pageable pageable);

	List<days14> findPaginateddays14(int pageNo, int perpage);

	List<days14> findBydays14number(String seqno, Pageable pageable);

	List<days14> findBydays14eodm(String odm, Pageable pageable);

	List<mo1> findPaginatedmo1(int pageNo, int perpage);

	List<mo3> findPaginatedmo3(int pageNo, int perpage);

	List<mo6> findPaginatedmo6(int pageNo, int perpage);

	List<mo12> findPaginatedmo12(int pageNo, int perpage);

	List<mo15> findPaginatedmo15(int pageNo, int perpage);

	List<mo18> findPaginatedmo18(int pageNo, int perpage);

	List<mo24> findPaginatedmo24(int pageNo, int perpage);

	List<mo30> findPaginatedmo30(int pageNo, int perpage);

	List<mo36> findPaginatedmo36(int pageNo, int perpage);

	List<mo48> findPaginatedmo48(int pageNo, int perpage);

	List<mo60> findPaginatedmo60(int pageNo, int perpage);

	List<mo72> findPaginatedmo72(int pageNo, int perpage);

	List<mo90> findPaginatedmo90(int pageNo, int perpage);

	List<mo120> findPaginatedmo120(int pageNo, int perpage);

	List<servicetab> findPaginatedservice(int pageNo, int perpage);

	List<Tools> findPaginatedtools(int pageNo, int perpage);

	List<Tools> findByUsernametools(String username, Pageable pageable);

	List<Tools> findByEmailtools(String username, Pageable pageable);

	List<Tools> findByToolsnumber(String toolsno, Pageable pageable);

	List<Consumable> findPaginatedconsumable(int pageNo, int perpage);

	List<Consumable> findByUsernameconsumable(String username, Pageable pageable);

	List<Consumable> findByEmailconsumable(String username, Pageable pageable);

	List<Consumable> findByConsumablenumber(String consumableno, Pageable pageable);

	List<Concession> findByName(String aircraft);

	List<Schedule> findPaginatedschedule(int pageNo, int perpage);

	List<Schedule> findByUsernameschedule(String username, Pageable pageable);

	List<Schedule> findByEmailschedule(String username, Pageable pageable);

	List<Schedule> findBySchedulenumber(String concessionnates, Pageable pageable);

	List<Schedule> findbyaircraft(String aircraft);

	List<Servicehistory> findPaginatedservicehistory(int pageNo, int perpage);

	List<Servicehistory> findByUsernameservicehistory(String username, Pageable pageable);

	List<Servicehistory> findByEmailservicehistory(String username, Pageable pageable);

	List<Servicehistory> findByServicehistorynumber(String service, Pageable pageable);

	List<Servicehistory> findbyaircraft1(String aircraft);

	List<Servicehistory> findbyservice(String service);

	List<Alert> findbyaircraft2(String aircraft);

	List<Sortie> findbyaircraft3(String aircraft, String startDate, String endDate);

	List<Concession> findPaginatedconcession(int pageNo, int perpage);

	List<Concession> findby(String aircraft);

	List<AircraftInfo> findby1(String aircraft);

	List<Concession> findPaginated1(int pageNo, int perpage);
}