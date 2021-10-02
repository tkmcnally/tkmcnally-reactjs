import {
  imageSpring,
  imageHybris,
  imageJenkins,
  imageGit,
  imageSwift,
  imageBootstrap,
  imageJavaScript,
  imageCSS3,
  imageHtml5,
  imageJava,
  imageReact,
  imageAkamai,
  imageCloudflare,
  imageAnagramSolver,
  imageQuizter,
  imageDTA,
  imageAna1,
  imageAna2,
  imageAna3,
  imageAna4,
  imageAna5,
  imageAnaCover,
  imageDTA1,
  imageDTA2,
  imageDTA3,
  imageDTA4,
  imageDTA5,
  imageDTA6,
  imageDTA7,
  imageDTA8,
  imageDTACover,
} from '../Assets';

// --------------------------------------- Project List
export const ProjectList = [
  {
    img: imageAnagramSolver,
    title: "ANAGRAM SOLVER",
    description: "'Anagram Solver' is an application used to automatically create all possible word-game 'legal' anagrams for a given input. This application is useful for games like Scrabble, Words with Friends, etc...",
    long_description: [
        {desc: "Anagram Solver' is an application used to automatically create all possible word-game 'legal' anagrams for a given input. This application is useful for games like Scrabble, Words with Friends, etc..."},
        {desc: "The result set of possible anagrams are sorted alphabetically and by size. To view the definition of a given word, you simply click it and the definition is retrieved from a third party webservice."},
    ],
    images: [
      {src: imageAna1},
      {src: imageAna2},
      {src: imageAna3},
      {src: imageAna4},
      {src: imageAna5},
    ],
    cover_image: imageAnaCover,
    tech_stack: "C, Swift",
    github_url: "https://github.com/tkmcnally/AnagramSolver-IOS",
  },
  {
    img: imageQuizter,
    title: "QUIZTER",
    description: "An Android social-network based trivia game. Learn more about your friends' interests and personalities as you complete their quizzes!",
    long_description: [],
    images: [],
    cover_image: "",
    tech_stack: "Java, Groovy",
    github_url: "https://github.com/tkmcnally/Quizter",
    demo_url: "http://quizter.tkmcnally.com/",
  },
  {
    img: imageDTA,
    title: "DEFEND THE APPLE",
    description: "Defend the Apple is marathon-based game, where the player must tap-to-kill as many flies on screen as possible before the Apple has been eaten.",
    long_description: [
      {desc: "Anagram Solver' is an application used to automatically create all possible word-game 'legal' anagrams for a given input. This application is useful for games like Scrabble, Words with Friends, etc..."},
      {desc: "The result set of possible anagrams are sorted alphabetically and by size. To view the definition of a given word, you simply click it and the definition is retrieved from a third party webservice."},
    ],
    images: [
      {src: imageDTA1},
      {src: imageDTA2},
      {src: imageDTA3},
      {src: imageDTA4},
      {src: imageDTA5},
      {src: imageDTA6},
      {src: imageDTA7},
      {src: imageDTA8},
    ],
    cover_image: imageDTACover,
    tech_stack: "JavaFX",
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: imageJava,
    name: "Java",
  },
  {
    img: imageSpring,
    name: "Spring",
  },
  {
    img: imageHybris,
    name: "Hybris",
  },
  {
    img: imageGit,
    name: "Git",
  },
  {
    img: imageJenkins,
    name: "Jenkins",
  },
  {
    img: imageHtml5,
    name: "HTML",
  },
  {
    img: imageCSS3,
    name: "CSS",
  },
  {
    img: imageJavaScript,
    name: "JavaScript",
  },
  {
    img: imageBootstrap,
    name: "Bootstrap",
  },
  {
    img: imageAkamai,
    name: "Akamai",
  },
  {
    img: imageCloudflare,
    name: "Cloudflare",
  },
  {
    img: imageSwift,
    name: "Swift",
  },
  {
    img: imageReact,
    name: "React"
  }
];
