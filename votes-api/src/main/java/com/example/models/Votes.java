package com.example.models;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "VOTES")
public class Votes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "POST_ID")
    private Long postId;

    @Column(name = "VOTE_COUNT")
    private int voteCount;

}
