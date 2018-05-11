package com.example.favoritesapi.controllers;

import com.example.favoritesapi.models.FavoriteGif;
import com.example.favoritesapi.repositories.FavoriteGifRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class FavoriteGifsController {

    @Autowired
    private FavoriteGifRepository favoriteGifRepository;

    @GetMapping("/")
    public Iterable<FavoriteGif> findAllFavoriteGifs() {
        return favoriteGifRepository.findAll();
    }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteFavoriteGifById(@PathVariable Long userId) {
        favoriteGifRepository.delete(userId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public FavoriteGif createNewFavoriteGif(@RequestBody FavoriteGif newFavoriteGif) {
        return favoriteGifRepository.save(newFavoriteGif);
    }

}