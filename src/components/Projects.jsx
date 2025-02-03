import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const projects = [
  {
    title: "HTML-CSS Assigment",
    description: "HTML CSS Assigment ",
    image: "https://vectorified.com/images/html-css-icon-2.png", // Replace with actual image URL
    link: "https://monu8989.github.io/Frontend-Assigment/",
  },
  {
    title: "Mobile-Repair-UI",
    description: "The Best UI Design Made With The Help Of Tailwind-CSS",
    image: "https://tse1.mm.bing.net/th?id=OIP.3uzxoOR3N7r8XFiZRbQQCgHaFj&pid=Api&P=0&h=180",
    link: "https://front-end-ui-manjum.vercel.app/",
  },
  {
    title: "Product-UI",
    description: "Product-UI Made With Tailwind-CSS",
    image: "https://tse1.mm.bing.net/th?id=OIP.kng-K7XnbJjGSy7_GAqQYQHaD-&pid=Api&P=0&h=180", // Replace with actual image URL
    link: "https://product-ui-manjum.vercel.app/",
  },
  {
    title: "Grid-Gallery",
    description: "Grid-Gallery Made With The Help Of Tailwind-CSS.",
    image: "https://tse1.mm.bing.net/th?id=OIP.0JRbAt6aKWYwiy_RDsqvjQHaEB&pid=Api&P=0&h=180",
    link: "https://grid-gallery-manjum.vercel.app/",
  },
  {
    title: "FeedBack-App",
    description: "FeedBack-App Made with HTML-BOOTSTRAP-JS",
    image: "https://a.storyblok.com/f/47007/1200x628/72065e2c21/inappfeedback_blog_meta_v02.png",
    link: "https://monu8989.github.io/feedback-app/",
  },
  {
    title: "React Expense-App",
    description: "Expense-App Made With Bootstrap And React-Js",
    image: "https://dynatecon.com/wp-content/uploads/2023/01/expense-image-5.webp?w=1200",
    link: "https://khatabook-rtk-manjum.vercel.app/",
  },
  {
    title: "Todo-Redux",
    description: "Todo App Made With Bootstrap And React-Redux",
    image: "https://fullstack-coder.com/wp-content/uploads/2022/03/ToDo-app-e1648962109780.png",
    link: "https://todoreduxmanjum.vercel.app/",
  },
  {
    title: "Green Greeks Clone",
    description: "Green Greeks Project With Responsive",
    image: "https://tse3.mm.bing.net/th?id=OIP.HCtMwrrOsQwdz9URNIdAqAHaC9&pid=Api&P=0&h=180",
    link: "https://monu8989.github.io/green-greeks/",
  },
];

const Projects = ({ theme }) => {
  return (
    <section id="projects" className={theme === "dark" ? "bg-gray-900 text-white py-20" : "bg-white text-black py-20"}>
      <div className="container mx-auto px-6 text-center">
        <h2 className={`text-4xl font-extrabold ${theme === "dark" ? "text-white" : "text-black"}`}>Projects</h2>
        <p className="mt-4 text-lg text-gray-400">Here are some of my best projects</p>

        <div className="mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="w-full pb-8"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className={theme === "dark" ? "bg-gray-800 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105" : "bg-gray-200 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"}>
                  <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>{project.title}</h3>
                    <p className={`mt-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>
                    <a
                      href={project.link}
                      className="mt-4 inline-block text-lg font-semibold text-white bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination Bullets Outside the Card Area */}
        <div className="swiper-pagination mt-6 text-center">
          <style jsx>{`
            .swiper-pagination {
              margin-top: 30px; /* Adjust the space below the card */
            }
            .swiper-pagination-bullet {
              background-color: #6366f1 !important; /* Blue color */
              width: 10px;
              height: 10px;
            }
            .swiper-pagination-bullet-active {
              background-color: #2563eb !important; /* Darker blue */
              margin-top:30px;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Projects;
