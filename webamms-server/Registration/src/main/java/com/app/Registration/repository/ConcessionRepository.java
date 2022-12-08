package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.Concession;

@Repository
public interface ConcessionRepository extends PagingAndSortingRepository<Concession, Integer> {
	@Query(value = "select s from Concession s where s.aircraft=:aircraft")
	public List<Concession> findby(@Param("aircraft") String aircraft);
}
