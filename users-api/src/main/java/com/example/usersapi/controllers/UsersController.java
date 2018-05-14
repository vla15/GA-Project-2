package com.example.usersapi.controllers;

import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class UsersController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/login")
    public User checkLogin(@RequestBody User currentUser) {

        User userFromDb = userRepository.findByUserName(currentUser.getUserName());
        if (currentUser.getPassword().equals(userFromDb.getPassword())) {
            return userFromDb;
        } else {
            return null;
        }
    }

    @GetMapping("/{userId}")
    public User findUserById(@PathVariable Long userId) {
        return userRepository.findOne(userId);
    }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        userRepository.delete(userId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public User createNewUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @PutMapping("/{userId}")
    public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) {

        User userFromDb = userRepository.findOne(userId);

        userFromDb.setUserName(userRequest.getUserName());
        userFromDb.setFirstName(userRequest.getFirstName());
        userFromDb.setLastName(userRequest.getLastName());

        return userRepository.save(userFromDb);
    }

}