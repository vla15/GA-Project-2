package com.example.repositories;

import com.example.models.Votes;
import org.springframework.data.repository.CrudRepository;

public interface VoteRepository extends CrudRepository<Votes, Long> {
}
