package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.Tools;

@Repository
public interface ToolsRepository extends JpaRepository<Tools, Integer> {
	@Query(value = "select max(id) from  User")
	public int findlast();

	@Query(value = "select g from Tools g where g.toolsno LIKE %?1% ")
	public List<Tools> findBytoolsnumber1(String toolsno, PageRequest pageRequest);

	@Query(value = "select g from Tools g where g.gdm LIKE %?1% ")
	public List<Tools> findBytoolsgdm1(String gdm, PageRequest pageRequest);

	@Query(value = "select count(g.toolsno) from Tools g  where g.toolsno Like %?1%")
	public int counttools(String toolsno);

	@Query(value = "select g from Tools g where g.idtools IN (:names)")
	public List<Tools> findbyservicetools(@Param("names") List<Integer> names);
}