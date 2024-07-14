package com.kimkwon.asset_management.service;

import com.kimkwon.asset_management.repository.UserRepository;
import com.kimkwon.asset_management.tables.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userReposiory;

    public void join(User user) {
        userReposiory.save(user);
    }

    public User findUser(Long id) {
        return userReposiory.findById(id).get();
    }
}
