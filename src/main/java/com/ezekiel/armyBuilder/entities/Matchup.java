package com.ezekiel.armyBuilder.entities;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "matchups")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Matchup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String faction;

    @Column
    private String opponent;

    @OneToOne
    private Build build;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Matchup matchup = (Matchup) o;
        return id != null && Objects.equals(id, matchup.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
