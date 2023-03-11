import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sqi,
    ming,
    pencill,
    art,
    threejs,
    blog,
    estate,
    exercise,
    music,
    quiz
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "MERN Stack Developer",
        icon: web,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "SQI",
        icon: sqi,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Content Creator",
        company_name: "Mingyue Palace",
        icon: ming,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Creates and develops engaging and informative content across various platforms, such as social media, blogs, and websites.",
            "Conducts research and stays up-to-date on industry trends to ensure content is relevant and interesting.",
            "Collaborates with designers, videographers, and other content creators to produce multimedia content.",
            "Analyzes data and metrics to evaluate the success of content and adjust strategies accordingly.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "PencillDotTech",
        icon: pencill,
        iconBg: "#383E56",
        date: "Oct 2022 - Jan 2023",
        points: [
            "Develops and maintains server-side applications, databases, and APIs.",
            "Collaborates with frontend developers and other stakeholders to design and implement features.",
            "Ensures the scalability and reliability of the backend systems.",
            "Uses programming languages such as Typescript and technologies like SQL, NoSQL, and cloud platforms.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "SQI",
        icon: sqi,
        iconBg: "#E6DEDD",
        date: "Sept 2021 - Present",
        points: [
            "Develops and maintains both the frontend and backend of web applications.",
            "Utilizes a variety of programming languages and frameworks, such as HTML/CSS, JavaScript, Node.js, and PHP.",
            "Collaborates with designers, backend developers, and other stakeholders to ensure seamless integration of features.",
            "Ensures the performance, scalability, and security of the web application.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Asura proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Asura does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Asura optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Real Estator",
        description:
            "Web-based platform that allows users to search, book, and manage house rentals from various providers, providing a convenient and efficient solution for accommodation needs.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "chakra-ui",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "pink-text-gradient",
            },
        ],
        image: estate,
        source_code_link: "https://github.com/Chandrasura25/Real_Estator",
    },
    {
        name: "Exercise IT",
        description:
            "Web application that enables users to search for different exercises for different body parts, view videos for positions, and locate similar exercise based on their current search.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "material-ui",
                color: "pink-text-gradient",
            },
        ],
        image: exercise,
        source_code_link: "https://github.com/Chandrasura25/exercise-app",
    },
    {
        name: "Jingle Jangle",
        description:
            "A music app that allows users to listen to and discover new music. The app features a user-friendly interface that enables users to upload and stream music from various genres, artists, and albums.",
        tags: [
            {
                name: "firebase",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: music,
        source_code_link: "https://github.com/Chandrasura25/jingle-jangle",
    },
    {
        name: "Blog On",
        description:
            "Web-based platform that allows users to create and publish their own blog posts. Users can write, edit and format their posts, as well as add images. Additional features include categorization of posts, tracking of views and engagement, comments.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "pink-text-gradient",
            },
        ],
        image: blog,
        source_code_link: "https://github.com/Chandrasura25/Blog_next",
    },
    {
        name: "Quiz Time",
        description:
            "A quiz app that allows users to take quizzes on various topics. It features multiple-choice questions with options to select the correct answer. Users can track their progress and view their scores.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: quiz,
        source_code_link: "https://github.com/Chandrasura25/QUIZ-APP",
    },
    {
        name: "Art Gallery",
        description:
            "An art gallery app that allows users to view artwork from various artists and galleries. It features high-quality images of artwork, along with information about the artist and the artwork.",
        tags: [
            {
                name: "Angular",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: art,
        source_code_link: "https://github.com/Chandrasura25/Art-Gallery-with-Angular",
    },
];

export { services, technologies, experiences, testimonials, projects };
