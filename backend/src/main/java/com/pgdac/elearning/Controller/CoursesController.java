package com.pgdac.elearning.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pgdac.elearning.Dto.CoursesDto;
import com.pgdac.elearning.Dto.Response;
import com.pgdac.elearning.services.CoursesService;


@CrossOrigin(origins = "*")
@RestController
public class CoursesController {
@Autowired
private CoursesService coursesservice ;

@PostMapping("/courses")
public ResponseEntity<?> addCourses(@RequestBody CoursesDto coursesdto){
	System.out.println("Inserted: "+coursesdto);
	Map<String,Object> result = coursesservice.addCourses(coursesdto);
	return Response.success(result);
}

@GetMapping("/courses/all")
public ResponseEntity<?> showAllMovie(){
	List<CoursesDto> result = new ArrayList<>();
	result = coursesservice.findAllCourses();
	return Response.success(result);
}
@GetMapping("/courses/find/{id}")
public ResponseEntity<?> findMovieById(@PathVariable("id") int id){
	CoursesDto result = coursesservice.findCoursesById(id);
	return Response.success(result);
}
@PutMapping("/courses/{id}")
public ResponseEntity<?> editMovie(@PathVariable("id") int id,@RequestBody CoursesDto coursesDto){
	Map<String,Object> result = coursesservice.editCourses(id,coursesDto);
	return Response.success(result);
}
@DeleteMapping("/courses/delete/{id}")
public ResponseEntity<?> deleteCourses(@PathVariable("id") int id){
	Map<String,Object> result = coursesservice.deleteCourses(id);
	return Response.success(result);
}
//@GetMapping("/courses/find/{id}")
//public ResponseEntity<?> findMovieById(@PathVariable("id") int id){
//	CoursesDto result = coursesservice.findCoursesById(id);
//	return Response.success(result);
//}

}
