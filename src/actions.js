var intro = {
	title: "Yo mofu",
	body: "This is the body of\
	my Greeting lorem blah blah blah",
};

var projects = {
	title: "My Projects",
	info: [
	{
		img_src: "./landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WAHHHHHHHHHHHH",
	}, {
		img_src: "./landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WAHHHHHHHHHHHH",
	}, {
		img_src: "./landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WAHHHHHHHHHHHH",
	}, {
		img_src: "./landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WAHHHHHHHHHHHH",
	}, {
		img_src: "./landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WAHHHHHHHHHHHH",
	}, {
		img_src: "./landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WAHHHHHHHHHHHH",
	},
	],
};


var skills = ["HTML", "CSS", "JS",
"React", "Postgres", "Node", "Mongo", "Python", 
"AWS", "Docker", "Redis"]


document.addEventListener('DOMContentLoaded', function() {
    var elem_modal = document.querySelectorAll('.modal');
    var instance_modal = M.Modal.init(elem_modal);
    var elem_sidenav = document.querySelectorAll('.sidenav');
    var instance_sidenav = M.Sidenav.init(elem_sidenav);
});



document.querySelectorAll("div.introduction div.title")[0].
textContent = intro.title;

document.querySelectorAll("div.introduction div.body-text")[0].
textContent = intro.body;

document.querySelectorAll("div.projects div.title")[0].
textContent = projects.title;

project_elements = document.querySelectorAll("div.cus-card");

document.querySelectorAll("div.introduction div.title")[0]


for (var i = 0; i < project_elements.length; i++) {
	project_elements[i].childNodes[1].childNodes[1].
		setAttribute("src", projects.info[i].img_src);

	project_elements[i].childNodes[1].childNodes[3].
		childNodes[1].textContent = projects.info[i].skill_txt;

	project_elements[i].childNodes[5].childNodes[1].
		textContent = projects.info[i].name;

	project_elements[i].childNodes[9].childNodes[1].
		childNodes[1].textContent = projects.info[i].name;

	project_elements[i].childNodes[9].childNodes[1].
		childNodes[3].textContent = projects.info[i].desc_detailed;

}

skill_elements = document.querySelectorAll("div.skill");
 for (var i = 0; i < skill_elements.length; i++) {
 	skill_elements[i].textContent = skills[i];
 	switch (i%3) {
 		case 0:
 			skill_elements[i].style.backgroundColor = "#FD686C"
 			break;
 		case 1:
 			skill_elements[i].style.backgroundColor = "#D41318"
 			break;
 		case 2:
 			skill_elements[i].style.backgroundColor = "#AB0509"
 			break;
 	}
 }