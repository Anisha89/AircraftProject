package com.app.Registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.time.*;
import java.util.*;
import java.util.Optional;
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
import com.app.Registration.repository.RegistrationRepository;
import java.util.List;

@Service
@Primary
public class RegistrationService implements Iservice {
	private static final long EXPIRE_TOKEN_AFTER_MINUTES = 30;

	@Autowired
	private RegistrationRepository repo;

	public User saveUser(User user) {
		return repo.save(user);
	}

	public User fetchUserByEmailId(String email) {
		return repo.findByEmailId(email);
	}
	
	public int getbyUserId(String id) {
		return repo.getbyUserId(id);
	}

	public User fetchUserByEmailIdAndPassword(String email, String password) {
		return repo.findByEmailIdAndPassword(email, password);
	}

	public List<User> fetchProductList() {
		return repo.findAll();
	}

	public User saveUsertoDB(User user) {
		return repo.save(user);
	}

	public java.util.Optional<User> fetchUserById(int id) {
		return repo.findById(id);
	}

	public java.util.Optional<User> deleteuserByIdtest(int id) throws Exception {
		java.util.Optional<User> u = this.repo.findById(id);
		if (u.isPresent())
			this.repo.delete(u.get());
		return u;
	}

	@Override
	public List<User> findPaginated(int pageNo, int perpage) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNo, perpage, Sort.by("id").descending());
		Page<User> pagedresult = repo.findAll(pageable);
		return pagedresult.toList();
	}

	public long getcount() {
		return repo.count();
	}

	public int findlast() {
		return repo.findlast();
	}

	public List<User> findByUsername(String username, int pageable, int perpage) {
		List<User> pagedresult1 = (List<User>) repo.findByUsername(username, PageRequest.of(pageable, perpage));
		return pagedresult1;
	}

	public List<User> findByEmail(String emailid, int pageable, int perpage) {
		List<User> pagedresult2 = (List<User>) repo.findByEmail(emailid, PageRequest.of(pageable, perpage));
		return pagedresult2;
	}

	public int countuser(String username) {
		return repo.countuser(username);
	}

	public int findByForgetPassword(String emailid, String password) {
		return repo.findByForgetPassword(emailid, password);
	}

	public String forgotPassword(String emailId) {
		Optional<User> userOptional = Optional.ofNullable(repo.Emailselection(emailId));
		if (!userOptional.isPresent()) {
		}
		User user = userOptional.get();
		user.setReset_Token(generateToken());
		user.setToken_creation_date(LocalDateTime.now());
		user = repo.save(user);
		
		return user.getReset_Token();
	}
	
	// Reset Password
		public String resetPassword(String reset_token, String password) {
			Optional<User> userOptional = Optional.ofNullable(repo.Tokenselection(reset_token));
			if (!userOptional.isPresent()) {
			}
			LocalDateTime tokenCreationDate = userOptional.get().getToken_creation_date();
			if (isTokenExpired(tokenCreationDate)) {
			}
	        User user = userOptional.get();
	        user.setPassword(password);
			user.setReset_Token(null);
			user.setToken_creation_date(null);
			repo.save(user);
			return "password updated Successfully";
		}

	

	public User toksel(String reset_token) {
		User use2 = new User();
		use2 = repo.Tokenselection(reset_token);
		return use2;
	}

	private String generateToken() {
		StringBuilder token = new StringBuilder();
		return token.append(UUID.randomUUID().toString()).append(UUID.randomUUID().toString()).toString();
	}

	private boolean isTokenExpired(final LocalDateTime tokenCreationDate) {
		LocalDateTime now = LocalDateTime.now();
		Duration diff = Duration.between(tokenCreationDate, now);
		return diff.toMinutes() >= EXPIRE_TOKEN_AFTER_MINUTES;
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
	public List<mo60> findPaginatedmo60(int pageNo, int perpage) {
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