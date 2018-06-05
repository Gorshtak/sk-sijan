package main.rest;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jdk.nashorn.internal.parser.JSONParser;
import main.entity.Raspored;
import main.entity.User;
import main.repository.RasporedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Controller
@RequestMapping(path = "/raspored")
public class RasporedRestController {

    @Autowired
    private RasporedRepository rasporedRepository;

    @GetMapping("/getall")
    public @ResponseBody String getAll() {
        Iterable<Raspored> rasporeds = rasporedRepository.findAll();
        ObjectMapper mapper = new ObjectMapper();
        String jsonInString = null;
        try {
            jsonInString = mapper.writeValueAsString(rasporeds);
            return jsonInString;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "";
    }


    @PostMapping("/create")
    public @ResponseBody
    String createRaspored(@RequestParam("file") MultipartFile file) {
        InputStream is = null;
        try {
            is = file.getInputStream();
            BufferedReader br = null;
            String line = "";
            String regex = "\",\"";
            br = new BufferedReader(new InputStreamReader(is));
            int i = 0;
            while ((line = br.readLine()) != null) {
                if (i == 0) {
                    i++;
                    continue;
                }
                // use comma as separator
                line = line.substring(1, line.length()-1);
                String[] rasporedi = line.split(regex);



                Raspored raspored = new Raspored();
                raspored.setPredmet(rasporedi[0]);
                raspored.setTip(rasporedi[1]);
                raspored.setNastavnik(rasporedi[2]);
                raspored.setGrupe(rasporedi[3]);
                raspored.setDan(rasporedi[4]);
                raspored.setTermin(rasporedi[5]);
                raspored.setUcionica(rasporedi[6]);

                rasporedRepository.save(raspored);
            }
            return "Raspored uspesno dodat";
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }


}
