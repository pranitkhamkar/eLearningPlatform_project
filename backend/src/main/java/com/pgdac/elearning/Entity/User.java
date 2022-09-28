package com.pgdac.elearning.Entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="User_id")
    private int id;
	@Column(name="Fname")
	private String fName;
	@Column(name="Lname")
	private String lName;
	private String email;
	@Column(name="Password")
	private String password;
	@Temporal(TemporalType.DATE)
	private Date registrationDate;
	@Column(name="Qualification")
	private String qualification;
	@Column(name="num_Of_Published_Courses")
	private String publishedCourses;
	@Column(name="avg_Rating")
	private int avgRting;
	private String contact;
	private String adharNo;
	private String role;
	 
	@OneToMany(mappedBy= "user",fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	 private List<Courses> courseList;
	 @OneToMany(mappedBy= "user",fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	  private List<Enrollment> enrollmentList;
	
	public User() {
		super();
	}
	
	
	public User(int user_id, String fName, String lName, String email, String password, Date registrationDate,
			String qualification, String publishedCourses, int avgRting, String contact, String adharNo, String role) {
		super();
		id = user_id;
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.password = password;
		this.registrationDate = registrationDate;
		this.qualification = qualification;
		this.publishedCourses = publishedCourses;
		this.avgRting = avgRting;
		this.contact = contact;
		this.adharNo = adharNo;
		this.role = role;
	}
	
	
	


	public User(int id) {
		super();
		this.id = id;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		id = id;
	}


	public String getfName() {
		return fName;
	}


	public void setfName(String fName) {
		this.fName = fName;
	}


	public String getlName() {
		return lName;
	}


	public void setlName(String lName) {
		this.lName = lName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public Date getRegistrationDate() {
		return registrationDate;
	}


	public void setRegistrationDate(Date registrationDate) {
		this.registrationDate = registrationDate;
	}


	public String getQualification() {
		return qualification;
	}


	public void setQualification(String qualification) {
		this.qualification = qualification;
	}


	public String getPublishedCourses() {
		return publishedCourses;
	}


	public void setPublishedCourses(String publishedCourses) {
		this.publishedCourses = publishedCourses;
	}


	public int getAvgRting() {
		return avgRting;
	}


	public void setAvgRting(int avgRting) {
		this.avgRting = avgRting;
	}


	public String getContact() {
		return contact;
	}


	public void setContact(String contact) {
		this.contact = contact;
	}


	public String getAdharNo() {
		return adharNo;
	}


	public void setAdharNo(String adharNo) {
		this.adharNo = adharNo;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}
	
	public void addCourses(Courses courses) {
		this.courseList.add(courses);
		courses.setUser(this);
}

	@Override
	public String toString() {
		return "User [id=" + id + ", fName=" + fName + ", lName=" + lName + ", email=" + email + ", password="
				+ password + ", registrationDate=" + registrationDate + ", qualification=" + qualification
				+ ", publishedCourses=" + publishedCourses + ", avgRting=" + avgRting + ", contact=" + contact
				+ ", adharNo=" + adharNo + ", role=" + role + "]";
	}
	
	
}
