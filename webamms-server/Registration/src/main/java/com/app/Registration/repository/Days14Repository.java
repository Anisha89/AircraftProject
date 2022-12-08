package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.app.Registration.model.days14;

public interface Days14Repository extends JpaRepository<days14, Integer> {
	@Query(value = "select max(idservice) from  days14")
	public int findlast();

	@Query(value = "select g from days14 g where g.seqno LIKE %?1% ")
	public List<days14> findBydays14(String seqno, PageRequest pageRequest);

	@Query(value = "select g from days14 g where g.smrdno LIKE %?1% ")
	public List<days14> findBydays14smrdno1(String oem, PageRequest pageRequest);

	@Query(value = "select count(g.seqno) from spare g  where g.seqno Like %?1%")
	public int countdays14(String seqno);
}
