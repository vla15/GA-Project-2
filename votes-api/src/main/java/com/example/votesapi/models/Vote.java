package com.example.votesapi.models;

import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor @NoArgsConstructor @Getter
@Setter
@Entity @Table(name = "VOTES")
public class Vote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "POST_ID")
    private int postId;

    @Column(name = "VOTE_COUNT")
    private int voteCount;

}
