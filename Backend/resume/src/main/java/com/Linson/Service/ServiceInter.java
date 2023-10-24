package com.Linson.Service;

import java.util.Collection;

import org.springframework.stereotype.Service;

import com.Linson.Model.model;


@Service 
public interface ServiceInter{
	public abstract void SaveResume(model model);
	public abstract void EditResume(String id,model model);
	public abstract void deleteResume(String id,model model);
	public abstract model getResume(String id);
}

