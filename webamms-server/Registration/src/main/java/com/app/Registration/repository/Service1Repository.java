package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.days14;
import com.app.Registration.model.servicetab;


@Repository
public interface Service1Repository extends JpaRepository<servicetab, Integer> {
	public servicetab save(days14 days14);

	@Query(value = "select max(idservice) from  servicetab")
	public int findlast();

	@Query(value = "select g from servicetab g where g.seqno LIKE %?1% ")
	public List<servicetab> findByservice1(String seqno, PageRequest pageRequest);

	@Query(value = "select g from servicetab g where g.smrdno LIKE %?1% ")
	public List<servicetab> findByservicesmrdno1(String oem, PageRequest pageRequest);

	@Query(value = "select count(g.seqno) from spare g  where g.seqno Like %?1%")
	public int countservice(String seqno);
}