package com.ezekiel.armyBuilder.controllers;

import com.ezekiel.armyBuilder.dtos.MatchupDto;
import com.ezekiel.armyBuilder.services.MatchupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/matchups")
public class MatchupController {
    @Autowired
    private MatchupService matchupService;

    @GetMapping("/add")
    public List<String> addMatchup(@RequestBody MatchupDto matchupDto, Long buildId) {
        return matchupService.addMatchup(matchupDto, buildId);
    }
}
