package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.Servicehistory;

@Repository
public interface ServicehistoryRepository extends JpaRepository<Servicehistory, Integer> {
	@Query(value = "select s from Servicehistory s where s.aircraft=:aircraft ")
	public List<Servicehistory> findbyaircraft1(@Param("aircraft") String aircraft);

	@Query(value = "select s from Servicehistory s where s.service=:service ")
	public List<Servicehistory> findbyservice(@Param("service") String service);/* websparrow */

	@Query(value = "select max(id) from  User")
	public int findlast();

	@Query(value = "select count(g.status) from Servicehistory g  where g.status LIKE 'c%d'")
	public int getCompletedCount();

	@Query(value = "select count(g.status) from Servicehistory g  where g.status LIKE 'n%d'")
	public int getNotStartedCount();

	@Query(value = "select count(g.status) from Servicehistory g  where g.status LIKE 'p%s'")
	public int getProgressCount();
	
	@Query("select g from Servicehistory g where g.startdate between :startdate and :enddate")
	List<Servicehistory> findByDateBetween(Long startdate, Long enddate);
}