package main.rest;

import main.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import main.repository.UserRepository;

@Controller
@RequestMapping(path="/user")
public class UserRestController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewUser ( @RequestBody User newUser ) {
        userRepository.save(newUser);
        return "";
    }

}
