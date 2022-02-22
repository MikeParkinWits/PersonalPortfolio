let linkPrefix = "/";

if (!window.location.host.replace(/(localhost|127\.0\.0\.1)(:\d+)?/i, "")) {
  linkPrefix = "/";
} else {
  linkPrefix = "/PersonalPortfolio/";
}

const menuOptions = [
  {
    title: "Visualizations",
    link: linkPrefix + "Visualizations/AllVisualizations.html",
  },
  { title: "Blogs", link: linkPrefix + "Blogs/AllBlogs.html" },
  { title: "About Us", link: linkPrefix + "AboutPage/AboutUs.html" },
];

const initialiseMenuLogo = (ul) => {
  const li = document.createElement("li");
  li.className = "logo";
  const link = document.createElement("a");
  link.href = linkPrefix + "index.html";
  const image = document.createElement("img");
  image.src = linkPrefix + "Images/Logo.png";
  image.width = 66;
  image.height = 55;
  image.alt = "M Parkin Logo";

  link.appendChild(image);
  li.appendChild(link);
  ul.appendChild(li);
};

const initialiseMenu = () => {
  const navBar = document.querySelector(".navbar");
  const navbarUl = document.createElement("ul");

  initialiseMenuLogo(navbarUl);

  //   const hamburgerButton = document.createElement("button");
  //   hamburgerButton.type = "button";
  //   hamburgerButton.className = "hamburger-button";

  //   const hamburgerButtonImg = document.createElement("img");
  //   hamburgerButtonImg.src = linkPrefix + "Images/Hamburger_Menu_Image.svg";
  //   hamburgerButtonImg.width = 20;
  //   hamburgerButtonImg.height = 14;
  //   hamburgerButtonImg.alt = "Hamburger Menu";

  //   hamburgerButton.appendChild(hamburgerButtonImg);

  //   const hamburgerLi = document.createElement("li");

  //   hamburgerLi.appendChild(hamburgerButton);

  //navbarUl.appendChild(hamburgerLi);

  for (let option of menuOptions) {
    const menuOptionsLi = document.createElement("li");
    menuOptionsLi.className = "nav-items";
    const menuOptionsLink = document.createElement("a");
    menuOptionsLink.innerText = option.title;
    menuOptionsLink.href = option.link;

    menuOptionsLi.appendChild(menuOptionsLink);
    navbarUl.appendChild(menuOptionsLi);
  }

  navBar.appendChild(navbarUl);

  //HamburgerMenu(hamburgerButton);
};

/*
const HamburgerMenu = (hamburger) => {
  const navItems = document.querySelectorAll(".nav-items a");

  hamburger.addEventListener("click", () => {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.toggle("active");
    }
  });
};
*/

const socialOptions = [
  {
    logo: linkPrefix + "Images/Logo.png",
    link: "instagram.com",
    alt: "Instagram Logo",
  },
  {
    logo: linkPrefix + "Images/Logo.png",
    link: "instagram.com",
    alt: "Instagram Logo",
  },
  {
    logo: linkPrefix + "Images/Logo.png",
    link: "instagram.com",
    alt: "Instagram Logo",
  },
];

const initialiseFooter = () => {
  const footer = document.querySelector(".main-footer");

  const footerNameSection = document.createElement("section");
  const pFooterElements = document.createElement("p");
  pFooterElements.className = "p-name";
  pFooterElements.innerText = "Michael Parkin";
  footerNameSection.appendChild(pFooterElements);
  footer.appendChild(footerNameSection);

  const footerSocialSection = document.createElement("section");

  const ulRef = document.createElement("ul");
  const liRef = document.createElement("li");

  for (let socials of socialOptions) {
    const socialOptionsLi = document.createElement("li");
    socialOptionsLi.className = "social-items";
    const socialOptionsLink = document.createElement("a");
    socialOptionsLink.href = socials.link;

    const image = document.createElement("img");
    image.src = socials.logo;
    image.width = 66;
    image.height = 55;
    image.alt = socials.alt;

    socialOptionsLink.appendChild(image);
    socialOptionsLi.appendChild(socialOptionsLink);
    footerSocialSection.appendChild(socialOptionsLi);
  }

  const linkRef = document.createElement("a");
  linkRef.innerText = "References";
  linkRef.href = linkPrefix + "ReferencePage/References.html";

  liRef.appendChild(linkRef);
  ulRef.appendChild(liRef);

  footerSocialSection.appendChild(ulRef);

  footer.appendChild(footerSocialSection);
};

document.addEventListener(
  "DOMContentLoaded",
  () => initialiseMenu(),
  initialiseFooter()
);
