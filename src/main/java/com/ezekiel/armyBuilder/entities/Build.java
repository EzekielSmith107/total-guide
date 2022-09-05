package com.ezekiel.armyBuilder.entities;

import com.ezekiel.armyBuilder.dtos.BuildDto;
import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "builds")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Build {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    @Column
    private String image;

    @OneToOne(mappedBy = "build", cascade = CascadeType.ALL, orphanRemoval = true)
    private Matchup matchup;

    public Build(BuildDto buildDto) {
        if(buildDto.getImage() != null) {
            this.image = buildDto.getImage();
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Build build = (Build) o;
        return id != null && Objects.equals(id, build.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
