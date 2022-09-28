package com.pgdac.elearning.Entity;
//courseid     | int          | NO   | PRI | NULL    | auto_increment |
//| CourseTitle  | varchar(200) | YES  |     | NULL    |                |
//| CourseBrief  | varchar(500) | YES  |     | NULL    |                |
//| NumofChapter | int          | YES  |     | NULL    |                |
//| User_id      | int

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="courses")
public class Courses {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int courseid;
	@Column(name="CourseTitle")
	private String courseTitle;
	@Column(name="CourseBrief")
	private String courseBrief;
	@Column(name="NumofChapter")
	private int numOfChapter;
	  @ManyToOne
	  @JoinColumn(name="User_id")
	  private User user;
	  @OneToMany(mappedBy= "courses",fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	  private List<CourseChapter> courseChapterList;
	  
	  
	  @OneToMany(mappedBy= "courses",fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	  private List<Enrollment> enrollmentList;
	  
	  public Courses(int courseid) {
		super();
		this.courseid = courseid;
	}


	public Courses(User user) {
		super();
		this.user = user;
	}


	public Courses(int courseid, String courseTitle, String courseBrief, int numofChapter, User user) {
		super();
		this.courseid = courseid;
		this.courseTitle = courseTitle;
		this.courseBrief = courseBrief;
		this.numOfChapter = numOfChapter;
		this.user = user;
	}
	  
	  
	public Courses(String courseTitle, String courseBrief, int numofChapter) {
		super();
		this.courseTitle = courseTitle;
		this.courseBrief = courseBrief;
		this.numOfChapter = numOfChapter;
	}


	public Courses() {
		super();
	}
	
	public int getCourseid() {
		return courseid;
	}


	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}


	public String getCourseTitle() {
		return courseTitle;
	}


	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}


	public String getCourseBrief() {
		return courseBrief;
	}


	public void setCourseBrief(String courseBrief) {
		this.courseBrief = courseBrief;
	}


	public int getNumOfChapter() {
		return numOfChapter;
	}


	public void setNumOfChapter(int numOfChapter) {
		this.numOfChapter = numOfChapter;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	@Override
	public String toString() {
		return "Courses [courseid=" + courseid + ", CourseTitle=" + courseid + ", CourseBrief=" + courseid
				+ ", NumofChapter=" + numOfChapter + ", user=" + user + "]";
	}
	  
	  
	
}