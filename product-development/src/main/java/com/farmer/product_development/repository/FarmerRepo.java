package com.farmer.product_development.repository;

import com.farmer.product_development.entity.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FarmerRepo extends JpaRepository<Farmer,Integer> {
}
