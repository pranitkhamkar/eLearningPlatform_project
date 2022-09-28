package com.pgdac.elearning.Dto;

import java.util.Date;

import javax.persistence.Column;

public class UserDTOS {
	private int User_id;
	private String fName;
	private String lName;
	private String email;
	private String password;
    private Date registrationDate;
	private String qualification;
	private String publishedCourses;
	private int avgRting;
	private String contact;
	private String adharNo;
	private String role;
	
	public UserDTOS() {
		super();
	}

	public UserDTOS(int user_id, String fName, String lName, String email, String password, Date registrationDate,
			String qualification, String publishedCourses, int avgRting, String contact, String adharNo, String role) {
		super();
		User_id = user_id;
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

	public int getUser_id() {
		return User_id;
	}

	public void setUser_id(int user_id) {
		User_id = user_id;
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

	@Override
	public String toString() {
		return "UserDTOS [User_id=" + User_id + ", fName=" + fName + ", lName=" + lName + ", email=" + email
				+ ", password=" + password + ", registrationDate=" + registrationDate + ", qualification="
				+ qualification + ", publishedCourses=" + publishedCourses + ", avgRting=" + avgRting + ", contact="
				+ contact + ", adharNo=" + adharNo + ", role=" + role + "]";
	}


    
	



	
	
}
