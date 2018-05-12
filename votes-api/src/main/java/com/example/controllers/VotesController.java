package com.example.controllers;

import com.example.models.Votes;
import com.example.repositories.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VotesController {

    @Autowired
    private VoteRepository voteRepository;

    @GetMapping("/{postId}")
    public int getAllVotes(@PathVariable Long postId) {
        Votes voteFromDb = voteRepository.findOne(postId);
        return voteFromDb.getVoteCount();
    }

    @PutMapping("/upvote/{postId}")
    public int incrementVote(@PathVariable Long postId) {
        Votes voteFromDb = voteRepository.findOne(postId);
        int voteCount = voteFromDb.getVoteCount() + 1;
        voteFromDb.setVoteCount(voteCount);
        voteRepository.save(voteFromDb);
        return voteCount;

    }

    @PutMapping("/downvote/{postId}")
    public int decrementVote(@PathVariable Long postId) {
        Votes voteFromDb = voteRepository.findOne(postId);
        int currentCount = voteFromDb.getVoteCount();
        int voteCount;
        if (currentCount == 0) {
            voteCount = 0;
        } else {
            voteCount = voteFromDb.getVoteCount() - 1;
            voteFromDb.setVoteCount(voteCount);
            voteRepository.save(voteFromDb);
        }
        return voteCount;

    }
}
