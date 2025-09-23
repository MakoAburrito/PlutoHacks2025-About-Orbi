<<<<<<< HEAD
// Get the audio element
const audio = document.getElementById('audio');
let isGif1Visible = true;
let isAudioPlaying = false;

//this creates random dots across the height and width of the screen. Randomly each page load.
const starContainer = document.querySelector('.stars');
const starCount = 200;

function createStars() {
  // Clear existing stars if any
  starContainer.innerHTML = '';

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Use actual screen width/height in pixels
    const x = Math.random() * vw;
    const y = Math.random() * vh;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.opacity = Math.random();
    star.style.width = `${Math.random() * 2 + 1}px`; // 1–3px
    star.style.height = star.style.width;

    starContainer.appendChild(star);
  }
}

// Run on page load
createStars();

// Optional: Re-run on window resize to regenerate
window.addEventListener('resize', createStars);


//changing gifs and pausing/stopping music when swapped back to original none hidden gif.

function toggleGifs() {
    const gif1 = document.getElementById('gif1');
    const gif2 = document.getElementById('gif2');
    const audio = document.getElementById('audio');

    if (isGif1Visible) {
        gif1.style.display = 'none';
        gif2.style.display = 'inline-block';
        if (!isAudioPlaying) {
            audio.play();
            isAudioPlaying = true;
        }
    } else {
        gif1.style.display = 'inline-block';
        gif2.style.display = 'none';
        if (isAudioPlaying) {
            audio.pause();
            audio.currentTime = 0;
            isAudioPlaying = false;
        }
    }

    isGif1Visible = !isGif1Visible;
}

  const backToTopBtn = document.getElementById("backToTop");

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Scroll smoothly to top on click
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

      document.querySelectorAll('.GridGallery .GalleryItem').forEach(image => {
        image.onclick = () => {
            document.querySelector('.GalleryLightBox').style.display = 'block';
            document.querySelector('.GalleryLightBox img').src = image.querySelector('img').src;
        }
    });
    
    document.querySelector('.GalleryLightBox span').addEventListener('click', () => {
        document.querySelector('.GalleryLightBox').style.display = 'none';
    });
    
/*script for infinite scrolling bar*/
/* Used this as a video to reference the code from most of it is following this tutorial
https://www.youtube.com/watch?v=6QE8dXq9SOE&t=605s&ab_channel=CodingNepal

The concept of the script though is adding the new class dragging to the ul .carousel class
which them manipulates it to reactively pull the card deck side to side based on mouse position from the left.

I changed the layout of how the card were and the classes to suit the css styles I made
and did very minimal tweaks to the js as this unfortunately was out of my skill range.

I did however learn alot of concepts from this :>!
*/
const WrapperCarousel = document.querySelector(".WrapperCarousel");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".WrapperCarousel i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children]

let isDragging = false, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice (0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach(btn => {
    btn.addEventListener ("click", () => {
        console.log(btn.id); /*<- This is just to check the log if the arrow icons are working in the log */
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging"); /*Stops code from dragging text when sliding card using css*/
    //Record the initial cursor and scroll position of the carousel
    startX = e.pageX
    startScrollLeft = carousel.scrollLeft;

}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    //Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft =  startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const autoPlay = () => {
    if (window.innerWidth < 800) return;
    //Autoplay the card
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 3500);
}
autoPlay();

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } else if ( Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    //Clear existing time if mouse not hover carousel.
    clearTimeout(timeoutId);
    if(!WrapperCarousel.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
=======
// Get the audio element
const audio = document.getElementById('audio');
let isGif1Visible = true;
let isAudioPlaying = false;

//this creates random dots across the height and width of the screen. Randomly each page load.
const starContainer = document.querySelector('.stars');
const starCount = 200;

function createStars() {
  // Clear existing stars if any
  starContainer.innerHTML = '';

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Use actual screen width/height in pixels
    const x = Math.random() * vw;
    const y = Math.random() * vh;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.opacity = Math.random();
    star.style.width = `${Math.random() * 2 + 1}px`; // 1–3px
    star.style.height = star.style.width;

    starContainer.appendChild(star);
  }
}

// Run on page load
createStars();

// Optional: Re-run on window resize to regenerate
window.addEventListener('resize', createStars);


//changing gifs and pausing/stopping music when swapped back to original none hidden gif.

function toggleGifs() {
    const gif1 = document.getElementById('gif1');
    const gif2 = document.getElementById('gif2');
    const audio = document.getElementById('audio');

    if (isGif1Visible) {
        gif1.style.display = 'none';
        gif2.style.display = 'inline-block';
        if (!isAudioPlaying) {
            audio.play();
            isAudioPlaying = true;
        }
    } else {
        gif1.style.display = 'inline-block';
        gif2.style.display = 'none';
        if (isAudioPlaying) {
            audio.pause();
            audio.currentTime = 0;
            isAudioPlaying = false;
        }
    }

    isGif1Visible = !isGif1Visible;
}

  const backToTopBtn = document.getElementById("backToTop");

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Scroll smoothly to top on click
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

      document.querySelectorAll('.GridGallery .GalleryItem').forEach(image => {
        image.onclick = () => {
            document.querySelector('.GalleryLightBox').style.display = 'block';
            document.querySelector('.GalleryLightBox img').src = image.querySelector('img').src;
        }
    });
    
    document.querySelector('.GalleryLightBox span').addEventListener('click', () => {
        document.querySelector('.GalleryLightBox').style.display = 'none';
    });
>>>>>>> master
