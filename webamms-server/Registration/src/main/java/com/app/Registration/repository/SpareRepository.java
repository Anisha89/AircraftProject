package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.spare;

@Repository
public interface SpareRepository extends JpaRepository<spare, Integer> {
	@Query(value = "select max(id) from  spare")
	public int findlast();

	@Query(value = "select g from spare g where g.seqno LIKE %?1% ")
	public List<spare> findByspare1(String seqno, PageRequest pageRequest);

	@Query(value = "select g from spare g where g.oem LIKE %?1% ")
	public List<spare> findByspareodm1(String oem, PageRequest pageRequest);

	@Query(value = "select count(g.seqno) from spare g  where g.seqno Like %?1%")
	public int countspare(String seqno);

	@Query(value = "select g from spare g where g.idspare IN (:names)")
	public List<spare> findbyserviceno(@Param("names") List<Integer> names);
}