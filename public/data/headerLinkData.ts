const headerLinkData = (path: string) => [
  {
    path: "/",
    match: "",
    textKey: "Home",
    active: path === "/",
  },
  {
    path: "/services",
    match: "services",
    textKey: "Services",
    active: path === "/services",
  },
  {
    path: "/testimonials",
    match: "testimonials",
    textKey: "Testimonials",
    active: path === "/testimonials",
  },
  {
    path: "/about",
    match: "about",
    textKey: "About",
    active: path === "/about",
  },
  {
    path: "/contact",
    match: "contact",
    textKey: "Contact",
    active: path === "/contact",
  },
];

export default headerLinkData;
