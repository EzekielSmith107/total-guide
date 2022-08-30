package com.ezekiel.armyBuilder.dtos;

import com.ezekiel.armyBuilder.entities.Matchup;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MatchupDto implements Serializable {
    private Long id;
    private String faction;
    private String opponent;
    private BuildDto buildDto;

    public MatchupDto(Matchup matchup) {
        if(matchup.getId() != null) {
            this.id = matchup.getId();
        }
        if(matchup.getFaction() != null) {
            this.faction = matchup.getFaction();
        }
        if(matchup.getOpponent() != null) {
            this.opponent = matchup.getOpponent();
        }
    }
}
