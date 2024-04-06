
import profile from './profile.png';

import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faLink, faFilePdf } from '@fortawesome/free-solid-svg-icons';

// import report_flatland from './files/report_flatland.pdf';

export const navigation = {
	name: "Jason P.",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Photos",
			link: "#photos",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hi I'm Jason \u{1F44D}",
	description: ["I write \u{1F35C} code and add numbers \u{1F522}"],
	image: profile.src,
	buttons: [
		{
			title: "Contact",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Links",
			link: "/links",
			isPrimary: false,
		},
	],
}



export const about = {
	title: "About",
	description: [
		"I'm an experienced energy modelling analyst working in the energy industry in Australia, having been involved in thermal and energy storage asset modelling, electricity and gas demand forecasting, quantitative price modelling and simulation, \
		statistical model building/evaluation/productioning, retail customer clustering and prediction. \
		Throughout my time in the industry, I have come to appreciate both the technical intricacies and the greater economic and societal impact of the Australian energy industry.",
		"My background is in Computer Science and Statistics, having completed a Bachelor of Science @ UniMelb. Throughout my studies I've covered a wide range of topics including modern statistical techniques, applied data science, discrete maths and operations research, machine learning and artificial intelligence, database systems, software development and of course foundational computer science algorithms.",
		"In addition, I am continuing my studies at a Masters level\
		covering a variety of deep learning applications, multi-agent systems and collective behaviour, constraint programming, discrete optimisation, multi agent path finding and reinforcement learning.",
		"For my Master's thesis, I am combining my industry experience and background studies to conduct interdisciplinary research in applying deep reinforcement learning for strategic energy market bidding.",
		"Outside of work and study I play the piano and guitar, spend time on a few projects that take my interest, rip through bags of specialty coffee and hoist metal objects.",
	],
}

export const work = {
	title: "Skills",
	cards: [
		{
			title: "Python",
			description: "code",
			icons: null,
		},
		{
			title: " stuff",
			description: "other",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Sarcasm Detection with BERT - Capstone group project for Data Science",
			description: "The goal was to detect the usage of sarcasm in online comments using pre-trained language models, as well as utilising and analysing their embeddings with traditional classification methods.",
			icons: [
				{
					icon: faFilePdf,
					link: "https://github.com/jasonpolyy/SarcasmDetection/blob/master/Final_Project_Report.pdf",
				},
				{
					icon: faGithub,
					link: "https://github.com/jasonpolyy/SarcasmDetection",
				},
			]
		},
		{
			title: "Expendibots - A game playing agent",
			description: "Developed an autonomous game playing agent to play a made up board game called Expendibots, with functionality to play against other agents. Demonstrates usage of the Negamax search algorithm, along with Zobrist hashing for implementing transposition tables.",
			icons: [
				{
					icon: faFilePdf,
					link: "https://github.com/jasonpolyy/Expendibots/blob/main/Expendibots%20part%20B.pdf",
				},
				{
					icon: faGithub,
					link: "https://github.com/jasonpolyy/Expendibots",
				},
			]
		},
		{
			title: "Pacman - Capture the Flag",
			description: "Developed game playing agents to play a multiplayer version of Pacman called Pacman Capture the Flag by UC Berkeley. It demonstrates the usage of PDDL, heuristic search and approximate Q-learning techniques.",
			icons: [
				{
					icon: faFilePdf,
					link: "https://github.com/jasonpolyy/pacman-ctf/blob/main/report_pacman.pdf",
				},
				{
					icon: faGithub,
					link: "https://github.com/jasonpolyy/pacman-ctf",
				},
			]
		},
		{
			title: "Flatland Challenge",
			description: "Implemented collision free multi agent path finding algorithms in order for agents to operate in the Flatland environment, a train network simulator designed to model and address the problem of train scheduling and rescheduling.",
			icons: [
				{
					icon: faFilePdf,
					link: "https://github.com/jasonpolyy/flatland/blob/main/report_flatland.pdf",
				},
				{
					icon: faGithub,
					link: "https://github.com/jasonpolyy/flatland",
				},
			]
		},

		{
			title: "ImageTagger - HTTP based C game",
			description: "Implementation of a simple game server in C, that utilises socket programming to host a simple game that is played through HTTP requests. \
			Was able to demonstrate handling multiple TCP connections, managing HTTP requests, storing player cookies and implementing core logic.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/jasonpolyy/personal-website",
				},

			]
		},
		{
			title: "This website \u{203C}",
			description: "I am using this site as a way to experiment with Node, React, JavaScript and web design in general. Obviously, the easiest way to get started is to fork a template and start tweaking, learning as you go. The original source template for this website is linked below, as well as the repository hosting my current version.",
			icons: [
				{
					icon: faLink,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
				{
					icon: faGithub,
					link: "https://github.com/jasonpolyy/personal-website",
				},

			]
		},
	],
}
export const contact = {
	title: "Contact",
	description: "Feel free to reach out directly below by email at jasonpolyy@gmail.com. There's also LinkedIn of course.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:jasonpolyy@gmail.com",
			isPrimary: true,
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/jason-polyy/",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Jason P.",
	description: "This is my cool website (probably)",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "Jason P.",
	description: "All relevant links here",
	cards: [
		{
			title: "This website \u{203C}",
			link: "https://jasonpolyy.me",
		},
		{
			title: "GitHub",
			link: "https://github.com/jasonpolyy/",
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/jason-polyy/",
		},
	]
}