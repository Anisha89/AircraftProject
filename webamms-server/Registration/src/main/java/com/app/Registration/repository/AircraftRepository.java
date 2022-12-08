package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.AircraftInfo;

@Repository
public interface AircraftRepository extends JpaRepository<AircraftInfo, Long> {
	@Query(value = "select s from AircraftInfo s where s.aircraft=:aircraft")
	public List<AircraftInfo> findbyaircraft(@Param("aircraft") String aircraft);
}
