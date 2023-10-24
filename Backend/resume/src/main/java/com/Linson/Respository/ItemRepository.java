package com.Linson.Respository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Linson.Model.*;

@Repository
public interface ItemRepository extends MongoRepository<model,String>{
	

}

