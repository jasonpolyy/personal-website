
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faLink, faFilePdf } from '@fortawesome/free-solid-svg-icons';

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
			title: "Resume",
			link: "https://www.overleaf.com/read/cxdnfncypqmk",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "About",
	description: [
		"I'm an experienced energy analyst working in the energy industry in Australia, having been involved in asset modelling and optimisation (battery, thermal and gas), mass market load forecasting, NEM price modelling, \
		statistical model building/evaluation/productioning, retail clustering and prediction, and analysis of broader market. \
		Throughout my time in the industry, I have come to appreciate both the technical intricacies and the greater economic and societal impact of the Australian energy industry.",
		"My background is in Computer Science and Statistics, having completed a Bachelor of Science @ UniMelb. Throughout my studies I've covered a wide range of fields including modern statistical techniques, applied data science, discrete maths and operations research, machine learning and artificial intelligence, database systems, software development and design and of course foundational computer science algorithms.",
		"In addition, I am continuing my studies in Artificial Intelligence at a Masters level\
		covering a variety of deep learning applications, discrete optimisation, automated planning and reasoning, and eventually completing a research component.",
		"Outside of work and study I play the piano and guitar, spend time on a few projects that take my interest, hoist metal objects, \
		and slowly read my way through an ever growing booklist.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Coding",
			description: "code",
			icons: null,
		},
		{
			title: "other stuff",
			description: "other",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Sarcasm Detection with BERT - Final year capstone group project",
			description: "Goal was to detect the usage of sarcasm in online comments using pre-trained language models, as well as utilising their embeddings with more traditional classification methods.",
			icons: [
				{
					icon: faFilePdf,
					link: "https://github.com/jamuupolyy/SarcasmDetection/blob/master/Final_Project_Report.pdf",
				},
				{
					icon: faGithub,
					link: "https://github.com/jamuupolyy/SarcasmDetection",
				},
			]
		},
		{
			title: "Expendibots - A game playing agent",
			description: "Developed an autonomous game playing agent to play a made up board game called Expendibots, with functionality to play against other agents.",
			icons: [
				{
					icon: faFilePdf,
					link: "https://github.com/jamuupolyy/Expendibots/blob/main/Expendibots%20part%20B.pdf",
				},
				{
					icon: faGithub,
					link: "https://github.com/jamuupolyy/Expendibots",
				},
			]
		},
		{
			title: "Numpy Neural Net",
			description: "An {incomplete} implementation of a neural network in sklearn style using only numpy. Done just as coding practise/applying simple ML theory.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/jamuupolyy/numpy-neuralnetwork",
				},
			]
		},
		{
			title: "This website \u{203C}",
			description: "I am using this site as a way to experiment with NodeJS and web design in general. The original source template for this website is linked below, as well as the repository hosting my current version.",
			icons: [
				{
					icon: faLink,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
				{
					icon: faGithub,
					link: "https://github.com/jamuupolyy/personal-website",
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
			link: "",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Jason P.",
	description: "This is my cool website",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "Jason P.",
	description: "All relevant links here",
	cards: [
		{
			title: "This website \u{203C}",
			link: "https://jamuupolyy.github.io",
		},
		{
			title: "GitHub",
			link: "https://github.com/jamuupolyy/",
		},
		{
			title: "LinkedIn",
			link: "",
		},
	]
}