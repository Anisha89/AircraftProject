package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.Sortie;

@Repository
public interface SortieRepository extends JpaRepository<Sortie, Long> {
	@Query(value = "select s from Sortie s where s.aircraft=:aircraft and (s.date_flown >= :startDate and s.date_flown <= :endDate)")
	public List<Sortie> findbyaircraft(@Param("aircraft") String aircraft, @Param("startDate") Long startDate,
			@Param("endDate") Long endDate);

	@Query(value = "select s from Sortie s where s.aircraft=:aircraft")
	public List<Sortie> findbyaircraft(@Param("aircraft") String aircraft);
	
	@Query(value = "select count(s.aircraft_status) from Sortie s where s.aircraft_status LIKE 'a%e'")
	public int getStatusAvailable();
	
	@Query(value = "select count(s.aircraft_status) from Sortie s where s.aircraft_status LIKE 'a%g'")
	public int getStatusAog();
	
	@Query(value = "select count(s.aircraft_status) from Sortie s where s.aircraft_status LIKE 'i%n'")
	public int getStatusInspection();
}