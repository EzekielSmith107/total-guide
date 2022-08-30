package com.ezekiel.armyBuilder.repositories;

import com.ezekiel.armyBuilder.entities.Matchup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MatchupRepository extends JpaRepository<Matchup, Long> {
    Optional<Matchup> findByFactionAndOpponent(String faction, String opponent);
}
