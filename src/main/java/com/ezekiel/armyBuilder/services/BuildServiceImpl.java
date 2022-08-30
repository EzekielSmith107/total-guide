package com.ezekiel.armyBuilder.services;

import com.ezekiel.armyBuilder.dtos.BuildDto;
import com.ezekiel.armyBuilder.entities.Build;
import com.ezekiel.armyBuilder.repositories.BuildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class BuildServiceImpl {
    @Autowired
    private BuildRepository buildRepository;

    @Transactional
    public List<String> addBuild(BuildDto buildDto) {
        List<String> response = new ArrayList<>();
        Build build = new Build(buildDto);
        buildRepository.saveAndFlush(build);
        response.add("Build added successfully.");
        return response;
    }
}
