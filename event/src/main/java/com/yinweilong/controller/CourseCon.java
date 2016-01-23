package com.yinweilong.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Web Controller，返回HTML页
 * 
 * @author yin.weilong
 *
 */
@Controller
public class CourseCon {

	@RequestMapping("/course")
	public String course(@RequestParam(value = "name", required = false, defaultValue = "World") String name, Model model) {
		model.addAttribute("name", name);
		return "course/course";
	}

	@RequestMapping("/search")
	public String search(@RequestParam(value = "name", required = false, defaultValue = "World") String name, Model model) {
		model.addAttribute("name", name);
		return "course/search";
	}

}
