package com.ezekiel.armyBuilder.services;

import com.ezekiel.armyBuilder.dtos.MatchupDto;

import javax.transaction.Transactional;
import java.util.List;

public interface MatchupService {
    @Transactional
    List<String> addMatchup(MatchupDto matchupDto, Long buildId);
}
