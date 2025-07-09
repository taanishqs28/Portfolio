const logotext = "TAANISHQ";
const meta = {
    title: "Taanishq Sethi",
    description: "Welcome to my Portfolio.",
};

const introdata = {
    title: "I’m Taanishq Sethi",
    animated: {
        first: "Software Engineer",
        second: "Graduated from San Jose State University",
        third: "Welcome to my Portfolio.",
    },
    description: "",
    your_img_url: "https://images.unsplash.com/photo-1733173293377-0345be593b5f?q=80&w=2730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const dataabout = {
    title: "About me.",
    aboutme: "I recently graduated with a B.S. in Software Engineering from San Jose State University, where I earned Cum Laude honors. Originally from India and now based in Burlingame, CA. I've developed a strong passion for building scalable software and exploring the possibilities of Artificial Intelligence. I’m especially interested in solving real-world problems through clean architecture, data-driven systems, and impactful user experiences. I'm currently focused on deepening my understanding of Data Structures and Algorithms to sharpen my problem-solving skills as I grow into a well-rounded software engineer."
};
const worktimeline = [{
        jobtitle: "Full-Stack Developer Intern",
        where: "Mamsys World",
        date: "June 2024- September 2024",
    },
    
    {
        jobtitle: "Embedded Tutor",
        where: "Peer Connections, SJSU",
        date: "May 2024 - May 2025",
    },
    
    {
        jobtitle: "Learning Assistant",
        where: "Peer Connections, SJSU",
        date: "Jan 2023- May 2024",
    },
    {
        jobtitle: "GCP Cloud Engineering Intern",
        where: "VastEdge, India",
        date: "Jun 2022 - Sept 2022",
    }
];

const skills = [{
        name: "JAVA",
        value: 90,
    },
    {
        name: "PYTHON",
        value: 90,
    },
    {
        name: "Node.js, Express.js",
        value: 90,
    },
    {
        name: "MYSQL, NoSQL, PostgreSQL,MongoDB",
        value: 90,
    },
    {
        name: "AWS DynamoDB",
        value: 85,
    },
    {
        name: "git",
        value: 85,
    },
    {
        name: "C/C++",
        value: 80,
    },
];

const services = [ 
    //{
    // title:"To-DONOVA",
    // description:"I am developing a user-friendly to-do list application using Java and JavaFX, designed to help users organize and manage their daily tasks efficiently. The application supports task categorization and prioritization, enabling users to set deadlines and reminders for each task. To ensure seamless task management, the application features a user-friendly interface with intuitive task creation and deletion capabilities. For the database, I will be using Cassandra NoSQL, which ensures high availability and scalability for managing the application’s data.",
    //},
   {
    title: "HomeSentinel – AI-Powered Facial Recognition Security System",
    description: "HomeSentinel is a fully functional AI-powered home security system that uses real-time facial recognition to control access. Built with Raspberry Pi 4, OpenCV, DLib, and FastAPI, it authenticates users securely and efficiently. The system stores encrypted facial data in MongoDB and features a React.js web dashboard for managing users and viewing access logs. HomeSentinel also includes real-time alerts for unauthorized access attempts. Achieving 95% accuracy in standard lighting, the system demonstrates seamless integration between edge devices and backend services, making it a scalable and intelligent home security solution."
    },
    {
        title: "PaySplit.AI",
        description: "A portfolio-ready SaaS platform designed to help freelancers and small business owners track, categorize, and analyze their financial transactions with ease. Built a full-stack application using FastAPI (Python) for the backend and React (TypeScript) for the frontend, with PostgreSQL as the database. Implemented features include secure CSV upload and parsing, automated transaction categorization, and interactive dashboards for financial insights. Deployed the solution using modern cloud platforms (Render, Vercel), following best practices for CI/CD, environment management, and scalable architecture."
    },
    {
        title: "LikeHome",
        description: "Developed a user-friendy, responsive hotel search and booking application using Python and Django, designed to help users find and book hotels based on their preferences. The application features a user-friendly interface with intuitive search and booking functionalities, enabling users to find and book hotels based on their desired location, price range, and amenities. The application also includes a user registration, AI supported chatbot and login system, allowing users to create accounts and manage their bookings.",
    },
    {
        title: "AssetTracker(TrackWise) Software",
        description: "I developed an open-source personal asset-tracking software using Java and JavaFX, designed to help users efficiently manage their assets across various categories and locations. This software includes robust features that allow for searching, editing, and deleting entries, catering to user-specific needs for managing personal inventory. To ensure efficient data storage and retrieval, the application utilizes CSV files, making it a practical tool for those seeking a straightforward and effective asset management solution.",
    },
    {
        title: "Big Pocket App",
        description: "I developed a Dart-based budgeting app specifically tailored for college students, which features intuitive financial tracking and expense recording. The app includes visual analytics, offering users detailed charts and graphs to set and achieve their financial goals, thereby enhancing their ability to manage finances effectively.",
    },
    {
        title: "Restaurant Application",
        description: "I engineered a 600-line restaurant order management system using Python and MySQL, featuring distinct interfaces for database interaction and order processing. The application supports dual user roles: Admins, who manage the menu and customer databases, and Salesmen, who facilitate order placement and customer registration. This structure ensures efficient and role-specific interactions with the system.",
    },
    {
        title: "BudgetApp",
        description: "Developed a user-friendly budgeting application using React.js and PostgreSQL using JDBC. Application lets the user to manage their accounts such as wallet and credit, as well as manage transaction withing the two types of accounts.",
    },
    
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "HomeSentinel – AI-Powered Smart Security System",
        link:"https://github.com/taanishqs28/HomeSentinel",
    },
    {
        img: "https://images.unsplash.com/photo-1745270917449-c2e2c5806586?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "PaySplit.AI - Financial Management SaaS",
        link:"https://github.com/taanishqs28/PaySplit.AI",
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1680721445143-14b0b2113256?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "TrackWise(AssetTracker)",
        link: "https://github.com/taanishqs28/TrackWise",
    },
    {
        img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "BigPocket App. Money Management App",
        link: "https://github.com/taanishqs28/BigPocketApp",

    },
    {
        img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Restaurant Application.",
        link: "https://github.com/taanishqs28/Restaurant-Python_project",

    },
    {
        img: "https://images.unsplash.com/photo-1635259258265-4f599a1cb8be?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Roll Dice Python Game.",
        link: "https://github.com/taanishqs28/Roll_die_python_game",

    },
    {
        img: "https://images.unsplash.com/photo-1614480633894-f3b7f4bb0e76?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Weather Forecast App.",
        link: "https://github.com/taanishqs28/WeatherApp",

    },
    {
        img: "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "LikeHome",
        link:"https://github.com/taanishqs28/LikeHome",
    },
    {
        img:"https://plus.unsplash.com/premium_photo-1683134565265-287463f36f8d?q=80&w=2919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:"BudgetApp",
        link:"https://github.com/taanishqs28/BudgetApp",
    }
    //{
        // img:"https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // description: "To-DONOVA",
        // link: "https://github.com/taanishqs28/To-DoNova",

   // }
];

const contactConfig = {
    YOUR_EMAIL: "taanishqsethi28@gmail.com",
    YOUR_FONE: "(925)758-9282",
    description:"Let's Connect. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you have a question about my projects, need assistance with software engineering solutions, or just want to say hi, don’t hesitate to reach out!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_0f1p36m",
    YOUR_TEMPLATE_ID: "template_dqxrbpd",
    YOUR_USER_ID: "XdEKOpe2BHtP4HwKw",
};

const socialprofils = {
    github: "https://github.com/taanishqs28",
    //facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/taanishq-sethi",
    //twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
