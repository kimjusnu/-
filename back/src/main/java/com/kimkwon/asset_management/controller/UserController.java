package com.kimkwon.asset_management.controller;

import com.kimkwon.asset_management.service.UserService;
import com.kimkwon.asset_management.tables.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findUser(id);
    }

    @PostMapping("/join")
    public String join(User user) {
        userService.join(user);
        return userService.findUser(user.getId()) + "님. 가입을 환영합니다.";
    }
}
