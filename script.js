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