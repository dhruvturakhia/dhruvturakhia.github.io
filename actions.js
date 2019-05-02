const intro = {
	title: "Hey! I am Dhruv, Nice to meet you.",
	body: "My journey to software began in my \
		freshman year when I got to work on robots \
		and programming them for a variety of tasks, \
		making me curious about programming and \
		helped me discover my passion to develop software. \
		I am a self taught programmer and believe in \
		continuously learning using my experiences to solve \
		problems. I have worked on a variety of projects \
		especially Web-Development (Full-Stack), Natural \
		Language Processing and Machine Learning. My \
		philosophy is to stay curious, keep learning, \
		solve problems and take challenges head on.",
};

const projects = {
	title: "My Projects",
	info: [
	{
		img_src: "./images/facial-detection-min.jpg",
		skill_txt: "React, Node, Express, Postgres",
		name: "Face Detection Web Application",
		desc_detailed: "A web-app to help you \
			detect faces in an image and keep a track \
			of faces you have found. It tracks \
			user-specific count of the faces detected \
			by the images submitted. It involved \
			designing of a sign-in page with validation \
			from a Postgre database. The user page has \
			a counter for the faces detected till date \
			and an entry for the source of the image for \
			which faces are to be detected using a \
			Machine Learning API.",
	}, {
		img_src: "./images/grid_monitoring-min.jpg",
		skill_txt: "R, Node, Angular, Express, MongoDB, \
			OpenVPN",
		name: "Remote monitoring and \
			fault prevention for grid inverters",
		desc_detailed: "A web application that \
			helps us pull data from remote solar power \
			grids and analyze them to monitor for faults, \
			and predict if trends to fault are observed. \
			The webpage consisted of a user sign-in, \
			dashboard to view current active girds and \
			their statuses, specific grid page to show \
			in detail performance (parameters like power, \
			up-time, current etc) of the gird and an option \
			to predict the data for upto a week. \
			The prediction of this data used a time series \
			algorithm ETS-STL to map the exponential and \
			seasonal nature of solar power generation using R. \
			The connection between the remote grids was setup \
			using OpenVPN."
	}, {
		img_src: "./images/digit-recognition-min.png",
		skill_txt: "Python, sklearn, pytorch, numpy",
		name: "Handwritten Digit Recognition",
		desc_detailed: "It is necessary to design and \
			evaluate performance of machine learning models \
			for tasks along with parameter tuning and \
			regularization. This project \
			compared the performance of two techniques for \
			handwritten digit recognition. The data was \
			compressed using Principal Component Analysis (PCA) \
			and fed to an SVM where the performance was evaluated \
			for different kernels (RBF, linear) and trade-off on \
			varying the C parameter. A deep neural network was \
			implemented using Convolutional Neural Network and the \
			performance was evaluated for varying architectures \
			both custom and pre-existing like LeNet. The \
			performance was also evaluated for different \
			activation functions, loss functions and dropout \
			regularization.",
	}, {
		img_src: "./images/machine-learning-min.jpg",
		skill_txt: "Matlab",
		name: "Face Recognition",
		desc_detailed: "Implementing mathematical \
			algorithms can be a tedious task especially \
			for machine learning tasks. Here we \
			reimplemented certain pattern \
			classification algorithms from scratch \
			on matlab and then used them to classify \
			faces from a standard data set. The feature \
			compression algorithm like Principal Component \
			Analysis (PCA) and Fisher's Linear Discriminant \
			Analysis (LDA) and classification algorithms like \
			Naive Bayes and K-NN (k-nearest neighbours). The \
			performance was also evaluated with varying degrees \
			of feature compressions and larger neighbourhoods \
			as well.",
	},
	],
};

const mail_id = "dhruvturakhia36@gmail.com"


var project_cards = document.querySelectorAll("div.cus-card");

var card_modals = document.querySelectorAll("div.modal");

// var skill_elements = document.querySelectorAll("div.skill");

function copy_to_clipboard() {
	navigator.clipboard.writeText(mail_id).then(function() {
	});
	M.toast({html: "copied mail id to clipboard", displayLength: 1500})
};

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

	card_modals[i].childNodes[1].childNodes[5].
		textContent = "Skills: " + projects.info[i].skill_txt;
}
