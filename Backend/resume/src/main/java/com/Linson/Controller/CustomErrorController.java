package com.Linson.Controller;

import org.springframework.boot.web.servlet.error.ErrorController;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;


public class CustomErrorController implements ErrorController {
	
	  String error(HttpServletRequest request) {
	    return "<h1>Error occurred</h1>";
	  }

	  public String getErrorPath() {
	    return "/error";
	  }
}

