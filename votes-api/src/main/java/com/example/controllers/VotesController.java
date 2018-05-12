package com.example.controllers;

import com.example.models.Votes;
import com.example.repositories.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class VotesController {

    @Autowired
    private VoteRepository voteRepository;

    @RequestMapping("/")
    public Iterable<Votes> getDemVotes() { return voteRepository.findAll(); }

    @GetMapping("/")
    public Iterable<Votes> getAllVotes() {
        return voteRepository.findAll();
    }

    @GetMapping("/{postId}")
    public int getVoteByPostId(@PathVariable Long postId) {
        Votes voteFromDb = voteRepository.findByPostId(postId);
        return voteFromDb.getVoteCount();
    }

    @PostMapping("/{postId}")
    public HttpStatus createVotesEntry(@RequestBody Votes newVote) {
        voteRepository.save(newVote);
        return HttpStatus.OK;
    }

    @DeleteMapping("/{postId}")
    public HttpStatus deleteVotesEntry(@PathVariable Long postId) {
        Votes voteFromDb = voteRepository.findOne(postId);
        voteRepository.delete(voteFromDb.getId());
        return HttpStatus.OK;
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
