package com.ezekiel.armyBuilder.services;

import com.ezekiel.armyBuilder.dtos.BuildDto;
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
public class BuildServiceImpl implements BuildService {
    @Autowired
    private BuildRepository buildRepository;
    @Autowired
    private MatchupRepository matchupRepository;

    @Override
    @Transactional
    public List<String> addBuild(BuildDto buildDto) {
        List<String> response = new ArrayList<>();
        Build build = new Build(buildDto);
        buildRepository.saveAndFlush(build);
        response.add("Build added successfully.");
        return response;
    }

    @Override
    public List<String> getImage(String faction, String opponent) {
        List<String> response = new ArrayList<>();
        Optional<Matchup> matchupOptional = matchupRepository.findByFactionAndOpponent(faction, opponent);
        if(matchupOptional.isPresent()) {
            Optional<Build> buildOptional = buildRepository.findById(matchupOptional.get().getBuild().getId());
            buildOptional.ifPresent(build -> response.add(build.getImage()));
        }
        return response;
    }
}
