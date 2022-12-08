package com.app.Registration.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
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
import com.app.Registration.repository.mo60Repository;

@Service
@Component
public class mo60Service implements Iservice {
	@Autowired
	private mo60Repository repo;

	public List<com.app.Registration.model.mo60> fetchProductList() {
		return repo.findAll();
	}

	public mo60 saveservicetoDB(mo60 service) {
		return repo.save(service);
	}

	public java.util.Optional<mo60> fetchServiceById(int id) {
		return repo.findById(id);
	}

	public java.util.Optional<mo60> deleteserviceByIdtest(int id) throws Exception {
		java.util.Optional<mo60> u = this.repo.findById(id);
		if (u.isPresent())
			this.repo.delete(u.get());
		return u;
	}

	@Override
	public List<mo60> findPaginatedmo60(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNo, perpage, Sort.by("idservice").descending());
		Page<mo60> pagedresult = repo.findAll(pageable);
		return pagedresult.toList();
	}

	public long getcount() {
		return repo.count();
	}

	public int findlast() {
		return repo.findlast();

	}

	public List<mo60> findByservicenumber(String seqno, int pageable, int perpage) {
		List<mo60> pagedresult1 = (List<mo60>) repo.findByservice1(seqno, PageRequest.of(pageable, perpage));
		return pagedresult1;
	}

	public List<mo60> findByservicesmrdno(String seqno, int pageable, int perpage) {
		List<mo60> pagedresult1 = (List<mo60>) repo.findByservicesmrdno1(seqno, PageRequest.of(pageable, perpage));
		return pagedresult1;
	}

	public int countservice1(String seqno) {
		return repo.countservice(seqno);
	}

	@Override
	public List<User> findPaginated(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> findByUsername(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> findByEmail(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Gse> findPaginatedgse(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Gse> findByUsernamegse(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Gse> findByEmailgse(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Gse> findByGsenumber(String gseno,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<spare> findPaginatedspare(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<spare> findBysparenumber(String seqno,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<spare> findByspareodm(String odm,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<days14> findPaginateddays14(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<days14> findBydays14number(String seqno,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<days14> findBydays14eodm(String odm,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo1> findPaginatedmo1(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo3> findPaginatedmo3(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo6> findPaginatedmo6(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo12> findPaginatedmo12(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo15> findPaginatedmo15(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo18> findPaginatedmo18(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo24> findPaginatedmo24(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo30> findPaginatedmo30(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo36> findPaginatedmo36(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo48> findPaginatedmo48(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo72> findPaginatedmo72(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo90> findPaginatedmo90(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<mo120> findPaginatedmo120(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<servicetab> findPaginatedservice(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Tools> findPaginatedtools(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Tools> findByUsernametools(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Tools> findByEmailtools(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Tools> findByToolsnumber(String toolsno,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Consumable> findPaginatedconsumable(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Consumable> findByUsernameconsumable(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Consumable> findByEmailconsumable(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Consumable> findByConsumablenumber(String consumableno,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Concession> findByName(String aircraft) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Schedule> findPaginatedschedule(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Schedule> findByUsernameschedule(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Schedule> findByEmailschedule(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Schedule> findBySchedulenumber(String concessionnates,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Schedule> findbyaircraft(String aircraft) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Servicehistory> findPaginatedservicehistory(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Servicehistory> findByUsernameservicehistory(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Servicehistory> findByEmailservicehistory(String username,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Servicehistory> findByServicehistorynumber(String service,
			org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Servicehistory> findbyaircraft1(String aircraft) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Servicehistory> findbyservice(String service) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Alert> findbyaircraft2(String aircraft) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Sortie> findbyaircraft3(String aircraft, String startDate, String endDate) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Concession> findPaginatedconcession(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Concession> findby(String aircraft) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<AircraftInfo> findby1(String aircraft) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Concession> findPaginated1(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		return null;
	}
}