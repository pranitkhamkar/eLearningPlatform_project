package com.pgdac.elearning.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pgdac.elearning.Dao.CoursesDao;
import com.pgdac.elearning.Dao.UserDao;
import com.pgdac.elearning.Dto.CoursesDto;
import com.pgdac.elearning.Dto.CoursesDtottoEntity;
import com.pgdac.elearning.Entity.Courses;
import com.pgdac.elearning.Entity.User;

@Service
@Transactional
public class CoursesService {
	@Autowired
	private CoursesDao coursesdao;
	@Autowired
	private CoursesDtottoEntity converter;	
	@Autowired
	private UserDao userdao;

//	public CoursesDto findNumOfChapter(int id) {
//		Courses courses = coursesdao.findNumOfChapterByCoursesId(id);
//		if(courses!=null)
//		return converter.toCoursesEntity(courses);
//		return null;
//	}
	public Map<String,Object> addCourses(CoursesDto coursesDto){
		Courses courses=converter.toCoursesEntity(coursesDto);
		System.out.println(courses.toString());
		User u1= userdao.findById(coursesDto.getUser_id());
		u1.addCourses(courses);
		courses = coursesdao.save(courses);
		
		return Collections.singletonMap("insertedId", courses.getCourseid());
	}
	public List<CoursesDto> findAllCourses(){
		List<Courses> coursesList =coursesdao.findAll();
		return coursesList.stream()
				.map(courses -> converter.toCoursesDto(courses))
				.collect(Collectors.toList());
	}
	public CoursesDto findCoursesById(int coursesId) {
		Courses courses = coursesdao.findBycourseid(coursesId);
		return converter.toCoursesDto(courses);
	}
	public Map<String,Object> editCourses(int id,CoursesDto coursesDto){
		if(coursesdao.existsById(id)) {
			CoursesDto courses = findCoursesById(id);
			Courses updateCourses = converter.toCoursesEntity(courses);
			updateCourses.setCourseTitle(coursesDto.getCourseTitle());
			updateCourses.setCourseBrief(coursesDto.getCourseBrief());
			updateCourses.setNumOfChapter(coursesDto.getNumofChapter());
			
			updateCourses = coursesdao.save(updateCourses);
			return Collections.singletonMap("changeRows", 1);
		}
		return Collections.singletonMap("changedRows", 0);
}
	public Map<String,Object> deleteCourses(int id){
		if(coursesdao.existsById(id)) {
			Courses courses=coursesdao.findBycourseid(id);
			coursesdao.delete(courses);
			return Collections.singletonMap("affectedRow", 1);
		}
		return Collections.singletonMap("affectedRow", 0);
	}
	
	
	
	
	
}