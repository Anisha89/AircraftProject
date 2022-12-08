package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.Alert;

@Repository
public interface AlertRepository extends JpaRepository<Alert,Integer> {	
	@Query (value="select s from Alert s where s.aircraft=:aircraft")
	   public List<Alert> findbyaircraft2(@Param("aircraft") String aircraft);
}