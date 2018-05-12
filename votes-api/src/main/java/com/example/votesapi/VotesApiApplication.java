package com.example.votesapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class VotesApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(VotesApiApplication.class, args);
	}
}
