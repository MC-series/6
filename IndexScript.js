// Automatically show the warning when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('asite-mod');
    if (modal) {
        setTimeout(() => {
            modal.classList.add('nav-ds-show');
        }, 500);
    }
});

// Close function for the button
function asiteExit() {
    const modal = document.getElementById('asite-mod');
    if (modal) {
        modal.classList.remove('nav-ds-show');
    }
}

















if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


function scrollToOST(event) {
      event.preventDefault();
      document.querySelector('#ost-section').scrollIntoView({
        behavior: 'smooth'
      });
    }


// Banner Slideshow Functionality
const slides = document.querySelectorAll('.banner-slide');
const indicators = document.querySelectorAll('.indicator');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
let currentSlide = 0;
let slideInterval;
let isPaused = false;
let progressInterval;

// ======================
// CORE SLIDE FUNCTIONS
// ======================
function resetProgressAnimation() {
    const activeIndicator = document.querySelector('.indicator.active');
    const progressBar = activeIndicator.querySelector('.indicator-progress');

    // Reset animation
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    void progressBar.offsetWidth; // Trigger reflow
    progressBar.style.transition = 'width 10s linear';
    progressBar.style.width = '100%';
}

function showSlide(index) {
    // Wrap around if at ends
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    // Update slides
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');

    // Update indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
        const progress = indicator.querySelector('.indicator-progress');
        progress.style.transition = 'none';
        progress.style.width = '0%';
    });

    indicators[index].classList.add('active');
    currentSlide = index;

    // Reset the progress animation
    if (!isPaused) {
        resetProgressAnimation();
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// ======================
// SLIDESHOW CONTROLS
// ======================
function startSlideShow() {
    isPaused = false;
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 10000);
    resetProgressAnimation();
}

function pauseSlideShow() {
    isPaused = true;
    clearInterval(slideInterval);

    // Pause progress animation by freezing current width
    const activeProgress = document.querySelector('.indicator.active .indicator-progress');
    const computedWidth = window.getComputedStyle(activeProgress).width;
    activeProgress.style.transition = 'none';
    activeProgress.style.width = computedWidth;
}

// ======================
// INITIALIZATION
// ======================
showSlide(0);
startSlideShow();

// ======================
// EVENT LISTENERS
// ======================
// Indicator clicks
indicators.forEach(indicator => {
    indicator.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        pauseSlideShow();
        showSlide(slideIndex);
        startSlideShow();
    });
});

// Arrow navigation
nextArrow.addEventListener('click', function() {
    pauseSlideShow();
    nextSlide();
    startSlideShow();
});

prevArrow.addEventListener('click', function() {
    pauseSlideShow();
    prevSlide();
    startSlideShow();
});

// Hover controls
document.querySelector('.hero-banner').removeEventListener('mouseenter', pauseSlideShow);
document.querySelector('.hero-banner').removeEventListener('mouseleave', startSlideShow);

// Load event
window.addEventListener('load', () => {
    resetProgressAnimation();
});







document.addEventListener('DOMContentLoaded', function () {
  const searchContainer = document.querySelector('.searchbar-container');
  const searchIframe = document.querySelector('.searchbar-iframe');

  // Listen for messages from iframe (iframe must send 'searchActive' or 'searchInactive')
  window.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'searchActive') {
      searchContainer.classList.add('active');
      searchIframe.classList.add('active');
    }

    if (e.data && e.data.type === 'searchInactive') {
      searchContainer.classList.remove('active');
      searchIframe.classList.remove('active');
    }
  });

  // Close iframe search if clicking outside the search area
  document.addEventListener('click', function (e) {
    // Don't close if clicking inside the iframe or container
    if (
      !e.target.closest('.searchbar-container') &&
      !e.target.closest('.searchbar-iframe')
    ) {
      searchContainer.classList.remove('active');
      searchIframe.classList.remove('active');
    }
  });
});



document.addEventListener('DOMContentLoaded', function () {
    const loadStart = Date.now();
    const loadingScreen = document.querySelector('.loading-screen');

    function hideLoader() {
        const loadTime = Date.now() - loadStart;
        const remainingTime = Math.max(0, 3000 - loadTime);

        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, remainingTime);
    }

    window.addEventListener('load', hideLoader);
    setTimeout(hideLoader, 5000); // Absolute fallback
});
