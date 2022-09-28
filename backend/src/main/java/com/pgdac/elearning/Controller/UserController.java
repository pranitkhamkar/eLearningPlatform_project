package com.pgdac.elearning.Controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pgdac.elearning.Dto.CoursesDto;
import com.pgdac.elearning.Dto.Credentials;
import com.pgdac.elearning.Dto.Response;
import com.pgdac.elearning.Dto.UserDTO;
import com.pgdac.elearning.Dto.UserDTOS;
import com.pgdac.elearning.Entity.Enrollment;
import com.pgdac.elearning.Entity.User;
import com.pgdac.elearning.services.UserService;

@CrossOrigin(origins = "*")
@RestController
public class UserController {
        @Autowired
        private UserService userService;
        
        
        @PostMapping("/user/signin")
    	public ResponseEntity<?> signIn(@RequestBody Credentials cred) {
    		UserDTO userDto = userService.authenticate(cred);
    		if(userDto == null)
    			return Response.error("user not found");
    		return Response.success(userDto);
    	}
        
        
//        @PostMapping("/user/signup")
//    	public ResponseEntity<?> signUp(@RequestBody UserDTO userDto) {
//    		Map<String, Object> result = userService.saveUser(userDto);
//    		return Response.success(result);
//    	}
        @PostMapping("/user/signup")
   	        public ResponseEntity<?> signUp(@RequestBody UserDTOS userDto) {
    		Map<String, Object> result = userService.saveUser(userDto);
    		return Response.success(result);
    	}
        @GetMapping("/user/all")
        public ResponseEntity<?> showAllUser(){
        	List<User> result = new ArrayList<>();
        	result = userService.findAllUser();
        	return Response.success(result);
        }
        
//        @DeleteMapping("/user/delete/{id}")
//    	public ResponseEntity<?> deleteUser(@PathVariable("id") int id) {
//    		Map<String, Object> result = userService.deleteUser(id);
//    		return Response.success(result);
//    	}
        @GetMapping("/User/find/{id}")
        public ResponseEntity<?> findMovieById(@PathVariable("id") int id){
        	UserDTO result = userService.findUserById(id);
        	return Response.success(result);
        }
        
        
        
}
