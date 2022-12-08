package com.app.Registration.repository;

import com.app.Registration.model.Gse;
import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface GseRepository extends JpaRepository<Gse, Integer> {
	@Query(value = "select max(id) from  User")
	public int findlast();

	@Query(value = "select g from Gse g where g.gseno LIKE %?1% ")
	public List<Gse> findBygsenumber1(String gseno, PageRequest pageRequest);

	@Query(value = "select g from Gse g where g.gdm LIKE %?1% ")
	public List<Gse> findBygsegdm1(String gdm, PageRequest pageRequest);

	@Query(value = "select count(g.gseno) from Gse g  where g.gseno Like %?1%")
	public int countgse(String gseno);

	@Query(value = "select g from Gse g where g.idgse IN (:names)")
	public List<Gse> findbyserviceno(@Param("names") List<Integer> names);
}