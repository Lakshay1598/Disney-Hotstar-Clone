let movies = [
    {
        name: "falcon and winter soldier",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat nulla aliquam similique aperiam quod omnis accusantium rem voluptatem obcaecati voluptates.",
        image: "images/slider 2.png"
    },
    {
        name: "loki",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat nulla aliquam similique aperiam quod omnis accusantium rem voluptatem obcaecati voluptates.",
        image: "images/slider 1.png"
    },
    {
        name: "wanda vision",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat nulla aliquam similique aperiam quod omnis accusantium rem voluptatem obcaecati voluptates.",
        image: "images/slider 3.png"
    },
    {
        name: "raya and the last dragon",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat nulla aliquam similique aperiam quod omnis accusantium rem voluptatem obcaecati voluptates.",
        image: "images/slider 4.png"
    },
    {
        name: "luca",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat nulla aliquam similique aperiam quod omnis accusantium rem voluptatem obcaecati voluptates.",
        image: "images/slider 5.png"
    }
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;//Tracks the current slide

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
    //Create DOM Elements
    let slide= document.createElement('div');
    var imgElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');

    //Attaching all the elements 
    // And the attachment is done according to the child that we design the initial HTML like
    // appendchild(p) cant appear before appendchild(h1)
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide); 
 
    //Setting up the images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //Setting up the element class names
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if (sliders.length) {
        //-ve indicates that we want the left margin
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;
    }
}; 
 
for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);


//Video Cards
const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover', () =>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave', () =>{
        let video = item.children[1];
        video.pause();
    });
})


//Card Sliders
let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtn = [...document.querySelectorAll('.pre-btn')];
let nxtBtn = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth - 200;
    })
    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth + 200;
    })
})





