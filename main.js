  // Define the offers data
  var offersData = [
    {
      heading: "PEACHTREE OFFERS",
      subheading: "QUALITY",
      description: "PeachTree maintains a high-class calibre for every service provided; every member pertaining to our team is required to uphold this excellence regardless of the project or pay.",
      imageSrc: "images/bongga.png"
    },
    {
      heading: "PEACHTREE OFFERS",
      subheading: "AFFORDABLE",
      description: "We strive to attain ideal prices, not just for our team members, but for the client as well. It's paramount to us that we can serve our best work complementing a reasonable price.",
      imageSrc: "images/jml.png"
    },
    {
      heading: "PEACHTREE OFFERS",
      subheading: "EFFICIENCY",
      description: "Every deadline agreed upon between our team and client will be punctually met. Constant updates will be provided throughout the entirety of the process to assure the project is carried out swiftly.",
      imageSrc: "images/blue&kraken.png"
    }
  ];

  // Get the container element where the content will be added
  var container = document.getElementById("OffersContent");

  // Loop through the data and create the content dynamically
  for (var i = 0; i < offersData.length; i++) {
    // Create the row container
    var row = document.createElement("div");
    row.className = "row";

    // Create the left content column
    var leftContent = document.createElement("div");
    leftContent.className = "left-content col-lg-6 col-sm-12 order-lg-" + (i % 2 === 0 ? 1 : 2) + " order-md-1";
    row.appendChild(leftContent);

    // Create the image for the left content column
    var leftImage = document.createElement("img");
    leftImage.src = offersData[i].imageSrc;
    leftImage.alt = "Offer Photo";
    leftContent.appendChild(leftImage);

    // Create the right content column
    var rightContent = document.createElement("div");
    rightContent.className = "right-content col-lg-6 col-sm-12 order-lg-" + (i % 2 === 0 ? 2 : 1) + " order-md-2";
    row.appendChild(rightContent);

    // Create the heading for the right content column
    var heading = document.createElement("h2");
    heading.textContent = offersData[i].heading;
    rightContent.appendChild(heading);

    // Create the subheading for the right content column
    var subheading = document.createElement("h2");
    subheading.textContent = offersData[i].subheading;
    rightContent.appendChild(subheading);

    // Create the description for the right content column
    var description = document.createElement("p");
    description.textContent = offersData[i].description;
    rightContent.appendChild(description);

    // Append the row to the container
    container.appendChild(row);
  }
//HOME
// Array of image URLs
const images = [
	'images/bg_img1.png',
	'images/bg_img2.png',
	'images/bg_img3.png',
	// Add more image URLs as needed
];

const carouselInner = document.querySelector('.carousel-inner');

// Dynamically add carousel items with images
images.forEach((imageUrl, index) => {
	const carouselItem = document.createElement('div');
	carouselItem.classList.add('carousel-item');
	if (index === 0) {
		carouselItem.classList.add('active');
	}
	const image = document.createElement('img');
	image.src = imageUrl;
	image.classList.add('d-block', 'w-100', 'vh-100', 'object-fit-cover');
	carouselItem.appendChild(image);
	carouselInner.appendChild(carouselItem);
});

// ABOUT US 
// Array list of card data
var cardData = [
	{
		image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
		title: 'CEO',
		name: 'Skott G.',
		username: 'Zaenosyne',
		text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum',
	},
	{
		image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg',
		title: 'CEO',
		name: 'Emilia T.',
		username: 'Valannd',
		text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum',
	},
	{
		image: 'https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs=',
		title: 'CFO',
		name: 'Meldrick R.',
		username: 'Bongga',
		text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum',
	},
	{
		image: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		title: 'COO',
		name: 'Jess L.',
		username: 'Ijml',
		text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum',
	},
];

// Create dynamic cards
var swiperWrapper = document.querySelector('.swiper-wrapper');

cardData.forEach(function (card) {
	var cardHtml = `
	<div class="card swiper-slide">
	  <div class="card__image">
		<img src="${card.image}" alt="card image">
	  </div>
	  <div class="card__content">
		<span class="card__title">${card.title}</span>
		<span class="card__name">${card.name}</span>
		<span class="card__username">${card.username}</span>
		<p class="card__text">${card.text}</p>
	  </div>
	</div>
	`;
	swiperWrapper.innerHTML += cardHtml;
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 300,
		modifier: 1,
		slideShadows: false,
	},
	pagination: {
		el: ".swiper-pagination",
	},
});

// CONTACT US 
const formData = {
	name: '',
	email: '',
	message: ''
  };

  // Function to update the form inputs based on the data object
  function updateFormInputs() {
	document.getElementById('name-input').value = formData.name;
	document.getElementById('email-input').value = formData.email;
	document.getElementById('message-input').value = formData.message;
  }

  // Function to handle form submission
  function submitForm() {
	// Retrieve the values from the inputs
	formData.name = document.getElementById('name-input').value;
	formData.email = document.getElementById('email-input').value;
	formData.message = document.getElementById('message-input').value;

	// Perform further processing or submission logic
	console.log(formData); // Example: Print form data to the console

	// Reset form inputs after submission
	resetFormInputs();
  }

  // Function to reset form inputs
  function resetFormInputs() {
	formData.name = '';
	formData.email = '';
	formData.message = '';
	updateFormInputs();
  }

  // Update the form inputs initially
  updateFormInputs();





//   PORTFOLIO
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll(".gallery-item");
let lastClickedCategory = 0;
let activeNavIndicator = document.querySelector('.pfnav-link.active .pfav-indicator');

// Define the array of content data
const contentData = [
  {
    category: '1',
    images:[
      'images/1.jpg',
      'images/2.jpg',
      'images/3.jpg',
      'images/4.jpg',
      'images/5.png'
    ],
    titles: ['C1-IMG1', 'C1-IMG2', 'C1-IMG3', 'C1-IMG4', 'C1-IMG5'],
    descriptions: ['C1-DESC1', 'C1-DESC2', 'C1-DESC3', 'C1-DESC4', 'C1-DESC5']
  },
  {
    category: '2',
    images: [
      'images/6.jpg',
      'images/7.jpg',
      'images/8.jpg',
      'images/9.jpg',
      'images/10.jpg'
    ],
    titles: ['C2-IMG1', 'C2-IMG2', 'C2-IMG3', 'C2-IMG4', 'C2-IMG5'],
    descriptions: ['C2-DESC1', 'C2-DESC2', 'C2-DESC3', 'C2-DESC4', 'C2-DESC5']
  },
  {
    category: '3',
    images: [
      'images/11.jpg',
      'images/12.jpg',
      'images/13.jpg',
      'images/14.jpg',
      'images/15.jpg'
    ],
    titles: ['C3-IMG1', 'C3-IMG2', 'C3-IMG3', 'C3-IMG4', 'C3-IMG5'],
    descriptions: ['C3-DESC1', 'C3-DESC2', 'C3-DESC3', 'C3-DESC4', 'C3-DESC5']
  }
];

contentData[0].images.forEach((imagePath, index) => {
  galleryItems[index].src = imagePath;
  galleryItems[index].setAttribute('data-title', contentData[0].titles[index]);
  galleryItems[index].setAttribute('data-description', contentData[0].descriptions[index]);
});

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery(category) {
    const data = contentData.find((item) => item.category === category);

    this.carouselArray.forEach((el, index) => {
      el.src = data.images[index];
      el.setAttribute('data-title', data.titles[index]);
      el.setAttribute('data-description', data.descriptions[index]);
    });

    this.updateBackgroundImage();
    this.updateGalleryClassNames();
  }

  updateGalleryClassNames() {
    this.carouselArray.forEach((el) => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
    });
  }

  setCurrentState(direction) {
    if (direction.className === 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGalleryClassNames();
    this.updateBackgroundImage();

    // Update the text based on the current active item
    const activeItem = this.carouselArray.find((item) => item.classList.contains('gallery-item-3'));
    const title = activeItem.getAttribute('data-title');
    const description = activeItem.getAttribute('data-description');
    this.updateText(title, description);
  }

  setControls() {
    const activeItem = this.carouselArray.find((item) => item.classList.contains('gallery-item-3'));
    const activeItemWidth = activeItem.clientWidth;
    const containerWidth = this.carouselContainer.clientWidth;
    const overlayWidth = document.querySelector('.pf-overlay').offsetWidth;
    const arrowsDistance = overlayWidth / 1.9; // Adjust the value as needed

    this.carouselControls.forEach((control) => {
      const button = document.createElement('button');
      button.className = `gallery-controls-${control}`;
      button.innerHTML = control === 'previous' ? '&#8249;' : '&#8250;';

      button.style.left = control === 'previous' ? `${arrowsDistance}px` : `calc(100% - ${arrowsDistance + 40}px)`;
      galleryControlsContainer.appendChild(button);
    });
  }

  userControls() {
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach((control) => {
      control.addEventListener('click', (e) => {
        e.preventDefault();
        this.setCurrentState(control);

        // Update line indicator
        const navIndicators = document.querySelectorAll('.nav-indicator');
        const clickedNavIndicator = control.parentElement.querySelector('.nav-indicator');

        if (lastClickedCategory) {
          lastClickedCategory.style.backgroundColor = 'transparent';
        }
        clickedNavIndicator.style.backgroundColor = 'green';
        lastClickedCategory = clickedNavIndicator;
      });
    });
  }

  updateBackgroundImage() {
	const activeItem = this.carouselArray.find((item) => item.classList.contains('gallery-item-3'));
	const backgroundImage = activeItem.src;
  
	portfolio.style.transition = 'zoom-in 0.5s ease-in-out';
	portfolio.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`;
	portfolio.style.backgroundSize = 'cover';
	portfolio.style.backgroundPosition = 'center';
	portfolio.style.backgroundRepeat = 'no-repeat';
  }

  updateText(title, description) {
    const titleElement = document.querySelector('.pfcarousel-title');
    const descriptionElement = document.querySelector('.pfcarousel-description');
    titleElement.textContent = title;
    descriptionElement.textContent = description;
  }
}

const seeMoreButton = document.querySelector('.see-more-btn');

seeMoreButton.addEventListener('click', () => {
  window.location.href = 'portfolio.html';
});

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.userControls();
exampleCarousel.updateBackgroundImage();
exampleCarousel.updateText('Initial Title', 'Initial Description');

const categoryLinks = document.querySelectorAll('.nav-link');
categoryLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all navigation links
    categoryLinks.forEach((link) => {
      link.classList.remove('active');
    });

    // Add active class to the clicked navigation link
    link.classList.add('active');
    activeNavIndicator = document.querySelector('.nav-link.active .nav-indicator');

    const category = link.getAttribute('data-category');
    exampleCarousel.updateGallery(category);
    exampleCarousel.updateText('Initial Title', 'Initial Description'); // Reset the text on category change
  });
});

window.addEventListener('DOMContentLoaded', () => {
  activeNavIndicator = document.querySelector('.nav-link.active .nav-indicator');
});

// Add animation to the background image with zoom-in effect
window.addEventListener('load', () => {
  document.body.style.animation = 'zoom-in 0.5s ease-in-out';
});