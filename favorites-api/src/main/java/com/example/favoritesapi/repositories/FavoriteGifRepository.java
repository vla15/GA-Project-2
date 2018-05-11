package com.example.favoritesapi.repositories;

import com.example.favoritesapi.models.FavoriteGif;
import org.springframework.data.repository.CrudRepository;

public interface FavoriteGifRepository extends CrudRepository<FavoriteGif, Long> {

}