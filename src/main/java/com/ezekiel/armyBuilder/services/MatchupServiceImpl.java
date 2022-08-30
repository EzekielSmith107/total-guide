package com.ezekiel.armyBuilder.services;

import com.ezekiel.armyBuilder.dtos.MatchupDto;
import com.ezekiel.armyBuilder.entities.Build;
import com.ezekiel.armyBuilder.entities.Matchup;
import com.ezekiel.armyBuilder.repositories.BuildRepository;
import com.ezekiel.armyBuilder.repositories.MatchupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MatchupServiceImpl implements MatchupService {
    @Autowired
    private MatchupRepository matchupRepository;
    @Autowired
    private BuildRepository buildRepository;

    @Override
    @Transactional
    public List<String> addMatchup(MatchupDto matchupDto, Long buildId) {
        List<String> response = new ArrayList<>();
        Optional<Build> buildOptional = buildRepository.findById(buildId);
        Matchup matchup = new Matchup(matchupDto);
        buildOptional.ifPresent(matchup::setBuild);
        matchupRepository.saveAndFlush(matchup);
        response.add("Matchup added successfully.");
        return response;
    }
}
