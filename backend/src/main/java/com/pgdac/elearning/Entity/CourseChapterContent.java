package com.pgdac.elearning.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="coursechaptercontent")
public class CourseChapterContent {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column
	private int contentid;
	@Column
	
	private String timeRequiredToCompleteTheCourse;
	@Column(name="ChapterContent")
	private String chapterContent;
	  @ManyToOne
	  @JoinColumn(name="courseChapterid")
	  private CourseChapter courseChapter;
	@Column
	 private String contentLink ;
	
	
	
	public CourseChapterContent() {
		super();
	}
     



	
	



	
	

	public CourseChapterContent(int contentid, String timeRequiredToCompleteTheCourse, String chapterContent,
			CourseChapter courseChapter,String contentLink) {
		super();
		this.contentid = contentid;
		this.timeRequiredToCompleteTheCourse = timeRequiredToCompleteTheCourse;
		this.chapterContent = chapterContent;
		this.courseChapter = courseChapter;
		this.contentLink=contentLink;
	}



	public int getContentid() {
		return contentid;
	}












	public void setContentid(int contentid) {
		this.contentid = contentid;
	}


	public String getTimeRequiredToCompleteTheCourse() {
		return timeRequiredToCompleteTheCourse;
	}












	public void setTimeRequiredToCompleteTheCourse(String timeRequiredToCompleteTheCourse) {
		this.timeRequiredToCompleteTheCourse = timeRequiredToCompleteTheCourse;
	}












	public String getChapterContent() {
		return chapterContent;
	}












	public void setChapterContent(String chapterContent) {
		this.chapterContent = chapterContent;
	}












	public CourseChapter getCourseChapter() {
		return courseChapter;
	}












	public void setCourseChapter(CourseChapter courseChapter) {
		this.courseChapter = courseChapter;
	}












	public CourseChapterContent(CourseChapter courseChapter) {
		super();
		this.courseChapter = courseChapter;
	}


	public String getContentLink() {
		return contentLink;
	}



	public void setContentLink(String contentLink) {
		this.contentLink = contentLink;
	}












	@Override
	public String toString() {
		return "CourseChapterContent [contentid=" + contentid + ", timeRequiredToCompleteTheCourse="
				+ timeRequiredToCompleteTheCourse + ", chapterContent=" + chapterContent + ", courseChapter="
				+ courseChapter + ", contentLink=" + contentLink + "]";
	}












	
	
}
