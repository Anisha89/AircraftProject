package com.app.Registration.repository;

import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.Consumable;

@Repository
public interface ConsumableRepository extends JpaRepository<Consumable, Integer> {
	@Query(value = "select max(id) from  User")
	public int findlast();

	@Query(value = "select g from Consumable g where g.consumableno LIKE %?1% ")
	public List<Consumable> findByconsumablenumber1(String consumableno, PageRequest pageRequest);

	@Query(value = "select g from Consumable g where g.oem LIKE %?1% ")
	public List<Consumable> findByconsumablegdm1(String oem, PageRequest pageRequest);

	@Query(value = "select count(g.consumableno) from Consumable g  where g.consumableno Like %?1%")
	public int countconsumable(String consumableno);

	@Query(value = "select g from Consumable g where g.idconsumable IN (:names)")
	public List<Consumable> findbyserviceconsumable(@Param("names") List<Integer> names);
}