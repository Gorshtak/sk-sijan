package main.rest;

import main.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import main.repository.UserRepository;

@Controller
@RequestMapping(path="/user")
public class UserRestController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="/add")
    public @ResponseBody
    String addNewUser () {
        User user = new User();
        user.setUsername("Gorstak");
        user.setFirstName("Sasa");
        user.setLastName("Gornjakovic");
        user.setEmail("sg31191@gmail.com");
        user.setIndexNumber("RN64/14");
        user.setGrupa("201");
        userRepository.save(user);
        System.out.print("saved user");
        return "saved";
    }

}
