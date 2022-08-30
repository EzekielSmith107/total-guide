package com.ezekiel.armyBuilder.dtos;

import com.ezekiel.armyBuilder.entities.Build;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BuildDto implements Serializable {
    private Long id;
    private String image;
    private MatchupDto matchupDto;

    public BuildDto(Build build) {
        if(build.getId() != null) {
            this.id = build.getId();
        }
        if(build.getImage() != null) {
            this.image = build.getImage();
        }
    }
}
