package com.ezekiel.armyBuilder.controllers;

import com.ezekiel.armyBuilder.dtos.BuildDto;
import com.ezekiel.armyBuilder.services.BuildService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/builds")
public class BuildController {
    @Autowired
    private BuildService buildService;

    @PostMapping("/add")
    public List<String> addBuild(@RequestBody BuildDto buildDto) {
        return buildService.addBuild(buildDto);
    }

    @GetMapping("/image")
    public List<String> getImage(String faction, String opponent) {
        return buildService.getImage(faction, opponent);
    }
}
