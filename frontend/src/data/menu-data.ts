

import { MenuItem } from "../types/menu_types";



const menu_data: MenuItem[] = [
    {
    id: 1,
    title: "Home",
    has_dropdown: false,
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    has_dropdown: false,
    link: "/",
  },
    {
    id: 3,
    title: "Academics",
    has_dropdown: false,
    link: "/",
  },
    {
    id: 4,
    title: "Admissions",
    has_dropdown: false,
    link: "/",
  },
 
  {
    id: 5,
    title: "Gallery",
     link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        id: 51,
        title: "Photo Gallery",
        link: "/",
      },
      {
        id: 52,
        title: "Video Gallery",
        link: "/",
      },

    ],
  },

  {
    id: 6,
    title: "Events",
    has_dropdown: false,
    link: "/",
  },
  {
    id: 7,
    title: "Campus",
     link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        id: 71,
        title: "Laboratories",
        link: "/",
      },
      {
        id: 72,
        title: "Library",
        link: "/",
      },
      {
        id: 73,
        title: "Sports Facilities",
        link: "/",
      },
      {
        id: 74,
        title: "Transportation",
        link: "/",
      },
    ],
  },
      {
    id: 8,
    title: "News",
    has_dropdown: false,
    link: "/",
  },
    {
    id: 9,
    title: "Careers",
    has_dropdown: false,
    link: "/",
  },
  
];

export default menu_data;