package com.ezekiel.armyBuilder.repositories;

import com.ezekiel.armyBuilder.entities.Matchup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchupRepository extends JpaRepository<Matchup, Long> {
}
