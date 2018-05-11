package com.example.postsapi.controllers;

import com.example.postsapi.models.Post;
import com.example.postsapi.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/")
    public Iterable<Post> findAllPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/{postId}")
    public Post findPostById(@PathVariable Long postId) {
        return postRepository.findOne(postId);
    }

    @DeleteMapping("/{postId}")
    public HttpStatus deletePostById(@PathVariable Long postId) {
        postRepository.delete(postId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public Post createNewPost(@RequestBody Post newPost) {
        return postRepository.save(newPost);
    }

    @PutMapping("/{postId}")
    public Post updatePostById(@PathVariable Long postId, @RequestBody Post newPost) {
        Post postFromDb = postRepository.findOne(postId);

        postFromDb.setTitle(newPost.getTitle());
        postFromDb.setBody(newPost.getBody());
        postFromDb.setPostImage(newPost.getPostImage());

        return postRepository.save(postFromDb);
    }
}
