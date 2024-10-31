export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently working on expanding my knowledge of JavaScript, its libraries, and frameworks, as I continue to enhance my web development skills.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Medium Clone",
    des: "This is a clone of a popular blogging platform Medium. It is built using modern web technologies and follows a fullstack architechture.",
    img: "/p1.png",
    className: "bottom-1",
    iconLists: [
      "/react.svg",
      "/tailwind.svg",
      "/ts.svg",
      "/workers.svg",
      "/prisma.svg",
      "/postgresql.svg",
    ],
    text: "Check Github Link",
    link: "https://github.com/iamyashsharma43/Medium-Clone",
  },
  {
    id: 2,
    title: "LiveDocs",
    des: "Google Docs clone built with Next.js to handle the user interface, Liveblocks for real-time features and styled with TailwindCSS.",
    img: "/p2.png",
    className: "-bottom-16",
    iconLists: [
      "/react.svg",
      "/next.svg",
      "/tailwind.svg",
      "/ts.svg",
      "/liveblocks.webp",
      "/c.svg",
    ],
    text: "Check Site",
    link: "https://github.com/iamyashsharma43/Live-docs",
  },
];

export const testimonials = [
  {
    quote:
      "Yash Sharma consistently demonstrated exceptional dedication and efficiency, ensuring all tasks were completed promptly. Yash Sharma is a true team player and brings great value to any project he is involved in.",
    name: "Sadam Hussain",
    profile: "/Sadam Hussain.png",
    title: "M.Tech student at NIT Warangal, Ex-SDE Intern at IIT Bombay",
  },
  {
    quote:
      "Throughout his internship, Yash Sharma has consistently demonstrated exceptional timeliness and efficiency. His keen understanding of task urgency has resulted in swift and reliable deliveries. Yash Sharma possesses a remarkable ability to quickly grasp new feature workflows, allowing him to contribute meaningfully. His cooperative nature and proactive approach have been invaluable assets to our team. Based on his performance, I wholeheartedly recommend Yash Sharma for software development roles. I am confident that he will bring significant value to any position he undertakes, leveraging his technical competence, adaptability, and commitment to excellence.",
    name: "Nishant Wankhede",
    profile: "/Nishant Wankhede.png",
    title: "M.Tech student at IIT Delhi, Ex-SDE Intern at IIT Bombay",
  },
  {
    quote:
      "Yash Sharma was an invaluable member of our team during his twelve-month internship at IIT Bombay, where he successfully developed and maintained the LEAP-PE Tool, a desktop application for post-editing machine-translated documents. He effectively incorporated new features, resolved bugs, and conducted user research. Yash Sharma demonstrated exceptional achievements, showcasing strong team management, problem-solving skills, and the ability to quickly learn new technologies like QT. His technical expertise, commitment to quality, and effective communication skills make him an ideal candidate for future opportunities in software development.",
    name: "Prof. Ganesh Ramakrishnan",
    profile: "/Prof. Ganesh Ramakrishnan.png",
    title:
      "Dept. of Computer Science and Engineering, Indian Institute of Technology Bombay",
  },
  {
    quote:
      "I highly recommend Yash Sharma for his exceptional technical expertise and innovative approach to software development. He has consistently demonstrated the ability to design and implement scalable, efficient, and user-friendly solutions, resulting in significant improvements in performance and productivity. Yash Sharma's strong problem-solving skills, attention to detail, and commitment to excellence make him a valuable asset to any organization. He is a collaborative team player with excellent communication skills, able to effectively translate complex technical concepts into actionable insights. I strongly endorse Yash Sharma for any opportunity, and I am confident he will continue to drive innovation and deliver outstanding results.",
    name: "Sagar Vats",
    profile: "/Sagar Vats.png",
    title:
      "CTO Multyfi | Ex- SDE Amazon | Won 8 National Hackathons | Raised Funds from NIC | Algo Trader",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Jr. Java Developer - Regex Software Service",
    date: "October 2022 to November 2023 · 1 Year",
    desc: "Developed and maintained Java applications with JDBC connectivity, enabling efficient interaction with databases. Implemented and integrated RESTful APIs using Spring Boot, which enhanced the functionality and performance of applications. Additionally, contributed to the design and implementation of a scalable microservices architecture, significantly improving application modularity and deployment efficiency.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer - NYX Forces Private Limited",
    date: "November 2023 to November 2024 · 1 yr",
    desc: "As a Full Stack Developer, I worked on multiple client projects focused on creating responsive websites with a strong emphasis on secure authentication and authorization mechanisms, enhancing application security. I implemented modern UI/UX principles to elevate user experience, ensuring intuitive interfaces and seamless performance across devices.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    url: "https://github.com/Yash SharmaGupta69",
  },
  {
    id: 2,
    name: "Twitter",
    img: "/twit.svg",
    url: "https://x.com/Yash SharmaGupta69",
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    url: "https://www.linkedin.com/in/Yash Sharma-gupta-works/",
  },
];
