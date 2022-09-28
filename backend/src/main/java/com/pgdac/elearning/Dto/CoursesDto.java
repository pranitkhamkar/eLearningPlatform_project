package com.pgdac.elearning.Dto;




public class CoursesDto {
	private int courseid;
	private String CourseTitle;
	private String CourseBrief ;
	private int NumofChapter;
	private int User_id;
	
	public CoursesDto(int courseid, String courseTitle, String courseBrief, int numofChapter, int user_id) {
		super();
		this.courseid = courseid;
		CourseTitle = courseTitle;
		CourseBrief = courseBrief;
		NumofChapter = numofChapter;
		this.User_id = user_id;
	}
	public CoursesDto() {
		super();
	}
	public int getCourseid() {
		return courseid;
	}
	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}
	public String getCourseTitle() {
		return CourseTitle;
	}
	public void setCourseTitle(String courseTitle) {
		CourseTitle = courseTitle;
	}
	public String getCourseBrief() {
		return CourseBrief;
	}
	public void setCourseBrief(String courseBrief) {
		CourseBrief = courseBrief;
	}
	public int getNumofChapter() {
		return NumofChapter;
	}
	public void setNumofChapter(int numofChapter) {
		NumofChapter = numofChapter;
	}
	public int getUser_id() {
		return User_id;
	}
	public void setUser_id(int user_id) {
		User_id = user_id;
	}
	@Override
	public String toString() {
		return "CoursesDto [courseid=" + courseid + ", CourseTitle=" + CourseTitle + ", CourseBrief=" + CourseBrief
				+ ", NumofChapter=" + NumofChapter + ", User_id=" + User_id + "]";
	}
	
	
	
	
	
	
}
