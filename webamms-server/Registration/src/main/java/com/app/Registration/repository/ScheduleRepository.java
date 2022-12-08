package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.Schedule;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {
	@Query(value = "select s from Schedule s where s.aircraft=:aircraft")
	public List<Schedule> findbyaircraft(@Param("aircraft") String aircraft);

	@Query(value = "select max(id) from  User")
	public int findlast();

	@Query(value = "select g from Schedule g where g.concessionnates LIKE %?1% ")
	public List<Schedule> findByschedulenumber1(String concessionnates, PageRequest pageRequest);

	@Query(value = "select g from Schedule g where g.service LIKE %?1% ")
	public List<Schedule> findByschedulegdm1(String service, PageRequest pageRequest);

	@Query(value = "select count(g.concessionnates) from Schedule g  where g.concessionnates Like %?1%")
	public int countschedule(String concessionnates);

	@Query(value = "select g from Schedule g where g.aircraft='KW-3554' AND g.status LIKE 'n%d' ORDER BY g.servicedue")
	public List<Schedule> getservicedue3554();

	@Query(value = "select g from Schedule g where g.aircraft='KW-3555' AND g.status LIKE 'n%d' ORDER BY g.servicedue")
	public List<Schedule> getservicedue3555();

	@Query(value = "select g from Schedule g where g.aircraft='KW-3556' AND g.status LIKE 'n%d' ORDER BY g.servicedue")
	public List<Schedule> getservicedue3556();
}