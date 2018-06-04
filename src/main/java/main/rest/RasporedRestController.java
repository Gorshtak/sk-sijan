package main.rest;


import main.entity.User;
import main.repository.RasporedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@Controller
@RequestMapping(path="/raspored")
public class RasporedRestController {

    @Autowired
    private RasporedRepository rasporedRepository;


    @PostMapping(path="/create")
    public @ResponseBody
    String createRaspored (@RequestBody MultipartFile file ) {
        System.out.println(file.toString());
        return "";
    }



}
