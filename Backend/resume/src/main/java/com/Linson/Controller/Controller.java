package com.Linson.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.Linson.Service.ServiceInter;

import java.util.List;
import java.util.Optional;
import com.Linson.Model.model;
import com.Linson.Respository.ItemRepository;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class Controller{
	
	@Autowired  
	private ItemRepository ResumeRepo;
	
	@Autowired
	private CustomErrorController customErr;
	
	@GetMapping(value = "/all")
	public List<model> getAllResume(){
		return ResumeRepo.findAll();
	}
	
	@GetMapping(value="/{ResumeId}")
	public Optional<model> getResumeById(String Id) {
		return ResumeRepo.findById(Id);
	}
	
	@PutMapping(value="/update/{ResumeId}")
	public model EditResume(model model) {
		return ResumeRepo.save(model);
	}
	
	@DeleteMapping(value="/delete/{ResumeId}")
	public void deleteResume(String Id) {
		ResumeRepo.deleteById(Id);
	}
	
	@RequestMapping(value="/error")
	@ResponseBody
	String Error(HttpServletRequest request) {
	    return customErr.error(request);
	}

}

