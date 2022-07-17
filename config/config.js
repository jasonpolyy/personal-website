
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
	description: ["I write spaghetti code \u{1F35C} and work with numbers all day \u{1F522}"],
	image: profile.src,
	buttons: [
		{
			title: "Contact",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://www.overleaf.com/project/60a65f77329e907913697215",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "About",
	description: [
		"I'm an experienced analyst now currently a few years deep into the energy industry in Australia. \
		I am experienced in energy asset modelling and optimisation (battery, thermal and gas), mass market load forecasting, statistical model building/evaluation/productioning, machine learning techniques and high level market analysis. \
		The longer I work and am exposed to multiple facets of the industry, the more I truly appreciate both the technical intricacies and the larger societal, political and economic importance of the energy sector in the national and global scope.",
		"My academic background is in Computer Science and Statistics, having completed a Bachelor of Science @ UniMelb. Throughout my studies I've covered a wide of topics including modern statistical techniques, discrete maths and operations research, machine learning and AI, database systems, software development and design.",
		"In addition, I have leveraged an industry sponsored placement at Monash Univeristy to continue my studies in the Master of Artificial Intelligence program \
		covering a variety of deep learning applications, discrete optimisation, automated planning and reasoning as well as a research component.",
		"Outside of work and study; I play the piano and guitar, completing my studies in music in my spare time. I work on a few projects (both coding and non-coding related) that take my interest.\
		I enjoy reading on a range of topics, and have a growing booklist (though it seems like I buy more books than I read at any one time). I also do a bit of powerlifting.",
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
			title: "Sarcasm Detection with NLP - Final year capstone project",
			description: "Detect usage of sarcasm in online comments using the pre-trained language models and their embeddings in standard classification method",
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
			description: "Incomplete implementation of a neural network in sklearn style using only numpy. Done just as coding practise/applying simple ML theory.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/jamuupolyy/numpy-neuralnetwork",
				},
			]
		},
		{
			title: "This website \u{203C}",
			description: "I am using this site as a way to experiment with NodeJS and web design in general. The original source template for this website is linked below, as well as the repository hosting this current version.",
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
	description: "Feel free to reach out directly by email at jasonpolyy@gmail.com. I've also got LinkedIn.",
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