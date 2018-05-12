package com.example.votesapi.controllers;

import com.example.votesapi.models.Vote;
import com.example.votesapi.repositories.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class VoteController {

    @Autowired
    private VoteRepository voteRepository;

    @GetMapping("/")
    public Iterable<Vote> findAllVotes() {
        return voteRepository.findAll();
    }

    @GetMapping("/{postId}")
    public Vote findVoteByPostId(@PathVariable int postId) {

        return voteRepository.findByPostId(postId);
    }

    @DeleteMapping("/{postId}")
    public HttpStatus deleteVoteByPostId(@PathVariable int postId) {
        Vote voteToDelete = voteRepository.findByPostId(postId);
        voteRepository.delete(voteToDelete);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public Vote createNewVoteEntry(@RequestBody Vote newVote) {
        return voteRepository.save(newVote);
    }

    @PutMapping("/upvote/{postId}")
    public Vote incrementVoteCountByPostId(@PathVariable int postId) {
        Vote voteFromDb = voteRepository.findByPostId(postId);
        voteFromDb.setVoteCount(voteFromDb.getVoteCount() + 1);
        return voteRepository.save(voteFromDb);
    }

    @PutMapping("/downvote/{postId}")
    public Vote decrementVoteCountByPostId(@PathVariable int postId) {
        Vote voteFromDb = voteRepository.findByPostId(postId);
        int currentCount = voteFromDb.getVoteCount();
        if (currentCount > 0) {
            voteFromDb.setVoteCount(currentCount - 1);
        }
        return voteRepository.save(voteFromDb);
    }
}
