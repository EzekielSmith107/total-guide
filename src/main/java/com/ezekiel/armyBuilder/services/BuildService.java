package com.ezekiel.armyBuilder.services;

import com.ezekiel.armyBuilder.dtos.BuildDto;

import javax.transaction.Transactional;
import java.util.List;

public interface BuildService {
    @Transactional
    List<String> addBuild(BuildDto buildDto);

    List<String> getImage(String faction, String opponent);
}
