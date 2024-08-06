export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/gig.jpg",
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
    title: "Currently wokring on International Projects",
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
    title: "Smart Chef-Ease",
    des: "A Platform for Chefs and Their Clients.",
    img: "/chefease.png",
    iconLists: ["/dart.svg", "/flutter.svg", "/firebase.svg", "/node.svg", "/mongo.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Flutter GPT",
    des: "AI Image Genreration and Text Completion",
    img: "/gpt.png",
    iconLists: ["/dart.svg", "/flutter.svg", "/firebase.svg", "/andriod.svg", "/chatgpt.svg"],
    link: "/https://github.com/Sameer-Akram/Flutter_ChatGPT",
  },
  {
    id: 3,
    title: "Cloth Store",
    des: "App for Ordering Cloths and to make Payments online.",
    img: "/p3.png",
       iconLists: ["/dart.svg", "/flutter.svg", "/firebase.svg", "/andriod.svg", "/chatgpt.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Hostel Management System",
    des: "Simplify hostel administration with features like room allocation, resident tracking, fee management, and maintenance requests. Enjoy real-time updates, secure payments, and a user-friendly interface to enhance operations and resident satisfaction.",
    img: "/p4.jpg",
       iconLists: ["/dart.svg", "/flutter.svg", "/firebase.svg", "/andriod.svg", "/chatgpt.svg"],
    link: "/https://github.com/Sameer-Akram/Hostel_Management_System",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Sameer Akram has been a game-changer for our project. His expertise in Flutter development ensured our app was not only visually stunning but also incredibly responsive and user-friendly. He consistently delivered high-quality work on time and was always open to feedback, making the collaboration seamless and enjoyable. We couldn't have asked for a better developer to bring our vision to life.",
    name: "Emmy",
    title: "Director of Dunamis Entrepreneur",
  },
  {
    quote:
      "Sameer Akram demonstrated exceptional skill and professionalism throughout our project. He tackled complex problems with ease and was always ready with innovative solutions. His deep understanding of Flutter and mobile app development allowed us to build an app that exceeded our expectations. We highly recommend Sameer Akram to anyone looking for a dedicated and talented Flutter developer.",
    name: "Mike Agunloye",
    title: "Project Manager at Dunamis Entrepreneur",
  },
  {
    quote:
      "We hired Sameer Akram to develop our mobile app, and it was one of the best decisions we made. His attention to detail and commitment to quality resulted in an app that not only met but surpassed our requirements. He was communicative, efficient, and always went the extra mile to ensure our satisfaction. If you need a top-notch Flutter developer, look no further than Sameer Akram.",
    name: "Jo Huang",
    title: "Director of Knoyo Health",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
      title: "Flutter Developer at Upwork",
    desc: "Worked on various freelance projects, developing and deploying Flutter applications for diverse clients, ensuring high performance and responsiveness.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
   
  },
  {
    id: 2,
       title: "JR Flutter Developer at Coreinfinite",
    desc: "Assisted in designing and implementing new features for mobile applications, collaborating with senior developers to enhance app functionality.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
 
  },
  {
    id: 3,
       title: "Flutter Intern at Coreinfinite",
    desc: "Contributed to the development of mobile applications using Flutter, gaining hands-on experience in Dart and cross-platform development.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
 
  },
  {
    id: 4,
    title: "Flutter Developer Intern at AppSol360",
    desc: "Participated in the development of innovative mobile solutions, utilizing Flutter to build seamless and user-friendly applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
