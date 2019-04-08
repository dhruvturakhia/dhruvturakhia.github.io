var intro = {
	title: "Yo!",
	body: "This is the body of\
	my Greeting lorem blah blah blah",
};

var projects = {
	title: "My Projects",
	info: [
	{
		img_src: "./images/landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WA111111111",
	}, {
		img_src: "./images/landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WA222222222",
	}, {
		img_src: "./images/landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WA333333333333",
	}, {
		img_src: "./images/landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WA44444444",
	}, {
		img_src: "./images/landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WAH555555555",
	}, {
		img_src: "./images/landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WA666666666666",
	}, {
		img_src: "./images/landing-bg.jpg",
		skill_txt: "Skills",
		name: "This is my project\
		dont stop believing",
		desc_detailed: "WA77777777777777777",
	},
	],
};

var project_cards = document.querySelectorAll("div.cus-card");

var card_modals = document.querySelectorAll("div.modal");

var skills = ["HTML", "CSS", "JS",
"React", "Postgres", "Node", "Mongo", "Python", 
"AWS", "Docker"]

var skill_elements = document.querySelectorAll("div.skill");



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


document.querySelectorAll("div.introduction div.title")[0]


for (var i = 0; i < project_cards.length; i++) {
	project_cards[i].childNodes[1].childNodes[1].
		setAttribute("src", projects.info[i].img_src);

	project_cards[i].childNodes[1].childNodes[3].
		childNodes[3].textContent = projects.info[i].name;
}

for (var i = 0; i < card_modals.length; i++) {
	card_modals[i].childNodes[1].childNodes[3].
	textContent = projects.info[i].desc_detailed;
		
	card_modals[i].childNodes[1].childNodes[1].
		textContent = projects.info[i].name;
}

 for (var i = 0; i < skill_elements.length; i++) {
 	skill_elements[i].textContent = skills[i];
 	switch (i%3) {
 		case 0:
 			skill_elements[i].style.backgroundColor = "#4FCFBD"
 			break;
 		case 1:
 			skill_elements[i].style.backgroundColor = "#00BFA5"
 			break;
 		case 2:
 			skill_elements[i].style.backgroundColor = "#007363"
 			break;
 	}
 }

document.getElementById("submit-btn").addEventListener("click", () => {
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var message = document.getElementById("message");
	console.log(name.value, email.value, message.value);
	name.value = "";
	email.value = "";
	message.value = "";
	alert("Details submitted");
});
