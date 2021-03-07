package com.azizafsh.heartinsync.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {
    @GetMapping("/")
    public ModelAndView index(){
        return new ModelAndView("index");
    }

    @GetMapping("/nutrition")
    public ModelAndView nutrition(){
        return new ModelAndView("nutrition");
    }
    @GetMapping("/health")
    public ModelAndView health(){
        return new ModelAndView("health");
    }

    @GetMapping("/wordSearch")
    public ModelAndView WordSearch(){
        return new ModelAndView("WordSearch");
    }
    @GetMapping("/mcqGame")
    public ModelAndView mcqGame(){
        return new ModelAndView("mcqGame");
    }
}
