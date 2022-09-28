package com.pgdac.elearning.Dto;

import java.util.Date;

public class UserDTO {
	private int User_id;
	private String fName;
	private String lName;
	private String email;
	private String password;
    private String role;
    private Date registrationDate;
  	private String qualification;
  	private String publishedCourses;
  	private int avgRting;
  	private String contact;
  	private String adharNo;
	
	public UserDTO() {
		super();
	}

	public UserDTO(int User_id, String fName, String lName, String email, String password, String role,
			Date registrationDate, String qualification, String publishedCourses, int avgRting, String contact,
			String adharNo) {
		super();
		this.User_id = User_id;
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.password = password;
		this.role = role;
		this.registrationDate = registrationDate;
		this.qualification = qualification;
		this.publishedCourses = publishedCourses;
		this.avgRting = avgRting;
		this.contact = contact;
		this.adharNo = adharNo;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
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

	@Override
	public String toString() {
		return "UserDTO [User_id=" + User_id + ", fName=" + fName + ", lName=" + lName + ", email=" + email
				+ ", password=" + password + ", role=" + role + ", registrationDate=" + registrationDate
				+ ", qualification=" + qualification + ", publishedCourses=" + publishedCourses + ", avgRting="
				+ avgRting + ", contact=" + contact + ", adharNo=" + adharNo + "]";
	}


	



	
}
