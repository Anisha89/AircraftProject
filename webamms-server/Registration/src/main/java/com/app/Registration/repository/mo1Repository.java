package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.mo1;


@Repository
public interface mo1Repository extends JpaRepository<mo1, Integer> {
	@Query(value = "select max(idservice) from  mo1")
	public int findlast();

	@Query(value = "select g from mo1 g where g.seqno LIKE %?1% ")
	public List<mo1> findByservice1(String seqno, PageRequest pageRequest);

	@Query(value = "select g from mo1 g where g.smrdno LIKE %?1% ")
	public List<mo1> findByservicesmrdno1(String oem, PageRequest pageRequest);

	@Query(value = "select count(g.seqno) from spare g  where g.seqno Like %?1%")
	public int countservice(String seqno);
}