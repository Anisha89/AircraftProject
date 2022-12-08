package com.app.Registration.repository;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.app.Registration.model.User;


@Repository
public interface RegistrationRepository extends JpaRepository<User, Integer> {
	public User findByEmailId(String emailId);

	public User findByEmailIdAndPassword(String emailId, String password);

	@Query(value = "select u from User u where u.emailId=:emailId")
	public User Emailselection(@Param("emailId") String emailId);/* websparrow */

	
	@Query(value = "select u from User u where u.reset_Token=:reset_token")
	public User Tokenselection(@Param("reset_token") String reset_Token);

	@Query(value = "select max(id) from  User")
	public int findlast();
	
	@Query(value = "select u.id from User u where u.emailId=:emailId")
	public int getbyUserId(String emailId);

	@Query(value = "select u from User u where u.userName LIKE %?1% order by u.date_created desc")
	public List<User> findByUsername(String userName, PageRequest pageRequest);

	@Query(value = "select u from User u where u.emailId=?1 order by u.date_created desc")
	public List<User> findByEmail(String emailid, PageRequest pageRequest);

	@Query(value = "select count(u.id) from User u  where u.userName Like %?1%")
	public int countuser(String username);

	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "update User u set u.password=:password where u.emailId=:emailId")
	public int findByForgetPassword(@Param("emailId") String emailId, @Param("password") String password);
}