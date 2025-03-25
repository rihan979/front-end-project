const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.getElementById("i");

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click",(e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-3-line");
});

const scrollRevealOption = {
    distance :"50px",
    origin:"bottom",
    duration:1000,
};

scrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin:"right",
    interval:500,
});
scrollReveal().reveal(".header_content h1" , {
    ...scrollRevealOption,
    delay:1500,
});
scrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay:2000,
});
scrollReveal().reveal(".header_content form", {
    ...scrollRevealOption,
    delay:2500,
});

scrollReveal().reveal("choose_image img",{
    ...scrollRevealOption,
    origin:"left",
});
scrollReveal().reveal(".choose_content .section_subheader",
    {
        ...scrollRevealOption,
        delay:1000,
    }
);

scrollReveal().reveal(".choose_content .section_header",{
...scrollRevealOption,
dely:1000,
});

scrollReveal().reveal(".choose_list li", {
    ...scrollRevealOption,
    dely:1500,
    interval:500,
});

const swiper = new Swiper(".swier",{
    slidesPerView:3,
    spaceBetween:0,
    loop:true,
});

scrollReveal().reveal(".explore_image img",{
    ...scrollRevealOption,
    origin:"right",
} );

scrollReveal().reveal(".explore_content .section_subheader",{
    ...scrollRevealOption,
    delay:500,
});

scrollReveal().reveal(".explore_content .section_header",{
    ...scrollRevealOption,
    delay:1000,
});

scrollReveal().reveal(".explore_content .section_description",{

    ...scrollRevealOption,
    delay:1500,
});

scrollReveal().reveal(".explore_content .explore_btn",{

    ...scrollRevealOption,
    delay:2000,
});

scrollReveal().reveal(".explore_grid div", {
    duration:1000,
    delay:2500,
    interval:500,
});

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const clientCards = Array.from(document.querySelectorAll(".client_card"));


next.addEventListener("click",(e)=> {
    for (let index = 0; index <clientCards.length; index++){
        if (clientCards[index].classList.contains("active"))
    {
const nextIndex = (index + 1) % clientCards.length;
clientCards[index].classList.remove("active");
clientCards[nextIndex].classList.add("active");
break;
}
}

});


prev.addEventListener("click", (e) => {
    for (let index = 0; index < clickCards.length; index++){
        if (clientCards[index].classList.contains("active"))
        {
            const prevIndex = (index ? index : clientCards.length) -1;
            clientCards[index].classList.remove("active");
            clientCards[prevIndex].classList.add("active");
            break;
        }
    }
});

scrollReveal().reveal(".subscribe_container .section_header",{
  ...scrollRevealOption,
});

scrollReveal().reveal(".subscribe_container .sectio_description",{

    ...scrollRevealOption,
    delay:500,
});

scrollReveal().reveal(".subscribe_container form",{

    ...scrollRevealOption,
    dely:1000,
});




