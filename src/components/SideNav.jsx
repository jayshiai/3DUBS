"use client";
import { motion, stagger } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import LoadingComponent from "./nav/LoadingComponent";
const SideNav = ({ setColorActivate, currentHomeVariant, setColor }) => {
  const events = [
    { title: "Home", theme: "#000", href: "/" },
    { title: "About", theme: "#9d4edd", href: "/about" },
    { title: "Projects", theme: "#29bf12", href: "/projects" },
    { title: "Our Crew", theme: "#fff794", href: "/crew" },
    { title: "Contact Us", theme: "#30e7ff", href: "/contactus" },
  ];

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const sidebar_items = document.querySelectorAll(".sidebar_item");

    const mouseOverHandler = (e) => {
      const sidebar_item = e.currentTarget;
      sidebar_item.style.opacity = 1;
      sidebar_item.firstChild.style.backgroundColor =
        sidebar_item.dataset.color;
      if (setColorActivate) {

        setColor(sidebar_item.dataset.color);
      }
      sidebar_items.forEach((item) => {
        if (item != sidebar_item) {
          item.style.opacity = 0.4;
          item.firstChild.style.backgroundColor = "#4aba91";
        }
      });
    };
    const sidebarMouseEnter = (e) => {
      const sidebar = e.currentTarget;
      sidebar.style.width = "auto";
      sidebar_items.forEach((sidebar_item) => {
        sidebar_item.style.pointerEvents = "auto";
      });
    };
    const sidebarMouseLeave = (e) => {
      const sidebar = e.currentTarget;
      sidebar.style.width = "35px";
      sidebar_items.forEach((sidebar_item) => {
        sidebar_item.style.pointerEvents = "none";
      });
    };

    sidebar_items.forEach((sidebar_item) => {
      sidebar_item.addEventListener("mouseover", mouseOverHandler);
    });

    sidebar.addEventListener("mouseenter", sidebarMouseEnter);

    sidebar.addEventListener("mouseleave", sidebarMouseLeave);
    return () => {
      sidebar_items.forEach((sidebar_item) => {
        sidebar_item.removeEventListener("mouseover", mouseOverHandler);
      });
      sidebar.removeEventListener("mouseenter", sidebarMouseEnter);
      sidebar.removeEventListener("mouseleave", sidebarMouseLeave);
    };
  }, []);

  const elements = events.map((event, i) => (
    <div
      key={i}
      data-color={event.theme}
      className="sidebar_item relative opacity-40 pointer-events-none hover:cursor-pointer  whitespace-nowrap py-2 pr-10 will-change-transform"
    >
      <motion.div
        //   dot
        variants={{
          invisible: {
            width: ["0%", "100%", "0%"],
            skew: ["0deg", "24deg", "0deg"],
            translateY: "-50%",
            transition: {
              translateY: { duration: 0 },
              duration: 0.6,

              delay: `${i / 10}`,
            },
          },
          visible: {
            width: ["0%", "100%", "0%"],
            skew: ["0deg", "24deg", "0deg"],
            translateY: "-50%",
            transition: {
              duration: 0.6,

              delay: `${i / 10}`,
            },
          },
        }}
        className="absolute pointer-events-none sidebar_dot top-1/2 right-3 bg-[#4aba91] min-w-[8px] h-4 translate-y-[-50%] rounded"
      ></motion.div>
      <motion.div
        //text
        variants={{
          invisible: {
            opacity: 0,

            skew: ["0deg", "35deg", "0deg"],
            transition: {
              opacity: { delay: `${0.1 + i / 10}` },
              skew: {
                duration: 0.8,

                delay: `${i / 10}`,
              },
            },
          },
          visible: {
            opacity: 1,

            skew: ["0deg", "35deg", "0deg"],
            transition: {
              opacity: { delay: `${0.3 + i / 10}` },
              skew: {
                duration: 0.8,
                delay: `${i / 10}`,
              },
            },
          },
        }}
        className="sidebar_text  "
      >
        <div className={`${currentHomeVariant == 1 || currentHomeVariant == 4 ? "text-black hover:text-black" : "text-white hover:text-white"} `}> <LoadingComponent url={event.href} text={event.title} /> </div>
        {/* <Link href={event.href} className={`${currentHomeVariant == 1 || currentHomeVariant == 4 ? "text-black hover:text-black" : "text-white hover:text-white"} `}>{event.title}</Link> */}
      </motion.div>
    </div>
  ));

  return (
    <motion.div
      animate="invisible"
      whileHover="visible"
      exit="invisible"
      className="sidebar z-10 fixed flex flex-col items-end w-[35px] text-base font-mono font-black tracking-widest   top-1/2  py-4 right-6 text-right  translate-y-[-50%] cursor-default uppercase"
    >
      {elements}
    </motion.div>
  );
};

export default SideNav;
