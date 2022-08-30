package com.ezekiel.armyBuilder.repositories;

import com.ezekiel.armyBuilder.entities.Build;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuildRepository extends JpaRepository<Build, Long> {
}
