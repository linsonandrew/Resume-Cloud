package com.Linson.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;
//import java.util.List;
import java.util.*;

@Document(collection="resumes")
public class model{
	
	@Id
	private String id;
	
	@Field("Name")
	private String Name;
	
	@Field("Password")
	private String Password;
	
	@Field("skills")
	private List<String> skills;
	
//	@Field("customFields")
//	private Map<String,Object> customFields;
	
	@Field("JsonContent")
	private String JsonContent;
	
	//setters 
	public void setJsonContent(String json) {
		this.JsonContent = json;
	}
	public void setName(String Name) {
		this.Name = Name;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public void setskills(String Skills) {
		String[] skillsArray = Skills.split(",",0);
		this.skills= Arrays.asList(skillsArray);
	}	
	//getters
	public String getName() {
		return this.Name;
	}
	public String getPassword() {
		return Password;
	}
	public List<String> getSkills(){
		return this.skills;
	}
	public String getJsonContent() {
		return this.JsonContent;
	}
}