package com.ezekiel.armyBuilder.entities;

import lombok.*;
import org.hibernate.Hibernate;

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

    @Column
    private String image;

    @OneToOne(mappedBy = "build", cascade = CascadeType.ALL, orphanRemoval = true)
    private Matchup matchup;

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
