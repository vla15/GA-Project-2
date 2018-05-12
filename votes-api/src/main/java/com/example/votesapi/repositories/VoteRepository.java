package com.example.votesapi.repositories;

import com.example.votesapi.models.Vote;
import org.springframework.data.repository.CrudRepository;

public interface VoteRepository extends CrudRepository<Vote, Long> {

    Vote findByPostId(int postId);
}
