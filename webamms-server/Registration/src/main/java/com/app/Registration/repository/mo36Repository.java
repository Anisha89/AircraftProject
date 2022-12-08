package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.mo36;

@Repository
public interface mo36Repository extends JpaRepository<mo36, Integer> {
	@Query(value = "select max(idservice) from  mo36")
	public int findlast();

	@Query(value = "select g from mo36 g where g.seqno LIKE %?1% ")
	public List<mo36> findByservice1(String seqno, PageRequest pageRequest);

	@Query(value = "select g from mo36 g where g.smrdno LIKE %?1% ")
	public List<mo36> findByservicesmrdno1(String oem, PageRequest pageRequest);

	@Query(value = "select count(g.seqno) from spare g  where g.seqno Like %?1%")
	public int countservice(String seqno);
}