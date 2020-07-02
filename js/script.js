/*jshint esversion: 6 */

//media query
const mqSmall = window.matchMedia('(max-width: 768px)');
const mqMedUp = window.matchMedia('(min-width: 768px)');

//DOM Elements
const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const contact = document.getElementById('contact');
const portfolioSec = document.getElementById('portfolio');
const portfolioPreview = document.getElementById('portfolio_preview');

//mobile layouts
const buttonMenuMobile = document.getElementById('buttonMenuMobile');
const buttonMenuClose = document.getElementById('button_close');
const navMobile = document.getElementById('nav_mobile');
const overlay = document.querySelector('.overlay');

//nav links
const navFEWD = document.getElementById('navFEWD');
const navILL = document.getElementById('navILL');
const navGD = document.getElementById('navGD');
const portfolioLinks = document.querySelector('.portfolios');

//date
const date = new Date();
const year = date.getFullYear();
const siteYear = document.getElementById('year');
//set year
siteYear.textContent = year;

//====================================================================
//                               DATA
//====================================================================

// portfolio links
const fewdPortfolio = [
    {
        title: 'Online Registration Form',
        link: 'https://melissamyra.github.io/techdegree-project-3/',
        repo: 'https://github.com/melissamyra/techdegree-project-3',
        img: 'images/fewd/online-res-form-min.png',
        description: 'An mobile-responsive registration form built with <strong>CSS</strong> and <strong>HTML5 form elements</strong>.'
    },
    {
        title: 'Interactive Photo Gallery',
        link: 'https://melissamyra.github.io/techdegree-project-5/',
        repo: 'https://github.com/melissamyra/techdegree-project-5',
        img: 'images/fewd/interactive-photo-gallery-min.png',
        description: 'An interactive photo gallery built with <strong>CSS Flexbox</strong> and <strong>jQuery</strong>, with a lightbox plugin and functioning search bar.'
    },
    {
        title: 'Phrase Guessing Game',
        link: 'https://melissamyra.github.io/techdegree-project-6/',
        repo: 'https://github.com/melissamyra/techdegree-project-6',
        img: 'images/fewd/guessing-game-min.png',
        description: 'A random phrase guessing game built with vanilla <strong>JavaScript</strong>, made for desktop screens.'
    },
    {
        title: 'WebApp Dashboard',
        link: 'https://melissamyra.github.io/techdegree-project-7/',
        repo: 'https://github.com/melissamyra/techdegree-project-7',
        img: 'images/fewd/webapp-dashboard-min.png',
        description: 'A mobile-responsive mockup web-stats dashboard demo built with <strong>CSS Grid Layout</strong> and <strong>JavaScript</strong> functionality. Interactivity includes notifications, alerts and saving settings to local storage, also uses interactive charts from <strong>Chart.js library</strong>.'
    },
    {
        title: 'Employee Directory',
        link: 'https://melissamyra.github.io/techdegree-project-8/',
        repo: 'https://github.com/melissamyra/techdegree-project-8',
        img: 'images/fewd/employee-directory-min.png',
        description: 'A mobile-responsive mockup employee directory demo that uses <strong>Fetch API</strong> to fetch data from Random User Generator API for 12 fictional employees. Includes functioning search bar, a pop up overlay that allows user to navigate left and right, and features a <strong>night mode.</strong>'
    }
];

const illustrationPortfolio = [
    {
        title: 'Wander',
        img: 'images/illustration/wander.jpg',
        description: 'Digital Illustration of girl holding lantern in the dark'
    },
    {
        title: 'Serenity',
        img: 'images/illustration/serenity.jpg',
        description: 'Fantasy Digital Illustration of girl leaning against a large owl'
    },
    {
        title: 'Graphite Owl Illustration',
        img: 'images/illustration/pencil-owl.jpg',
        description: 'Graphite Owl Illustration'
    },
    {
        title: 'Watercolor Portrait',
        img: 'images/illustration/watercolour-portrait.jpg',
        description: 'Watercolour Portrait of girl with blonde hair wearing red robes'
    },
    {
        title: 'Graphite Illustration Banner',
        img: 'images/illustration/graphite-banner.jpg',
        description: 'Graphite Illustration Banner of tiger eyes and a girl looking back'
    },
    {
        title: 'Graphite Portrait',
        img: 'images/illustration/pencil-portrait.jpg',
        description: 'Graphite Portrait of a man'
    },
    {
        title: 'Ink Owl Illustration',
        img: 'images/illustration/ink-owl.jpg',
        description: 'Fantasy Ink Illustration of an owl'
    }
];

const gdPortfolio = [
    {
        title: 'Lemon Boy Poster',
        img: 'images/graphic-design/lemon-boy-min.png'
    },
    {
        title: 'Gallery Exhibition Poster',
        img: 'images/graphic-design/poster-min.png'
    },
    {
        title: 'Cacto Logo',
        img: 'images/graphic-design/cacto-min.png'
    },
    {
        title: 'Pomade Packaging Design',
        img: 'images/graphic-design/nb-pomade-min.jpg'
    },
    {
        title: 'Wall Banner',
        img: 'images/graphic-design/globorneo-min.png'
    },
    {
        title: 'Limkokwing Booklet Cover',
        img: 'images/graphic-design/lkw-min.jpg'
    },
    {
        title: 'Macam-Macam Logo',
        img: 'images/graphic-design/macam-macam-min.png'
    },
    {
        title: 'Forum Belia Tegas event T-shirt Design',
        img: 'images/graphic-design/fbt-shirts-min.png'
    },
    {
        title: 'Forum Belia Tegas Merchandise',
        img: 'images/graphic-design/fbt-min.png'
    }
];

//====================================================================
//                             FUNCTIONS
//====================================================================

//=========================================================== Helpers

//hide element
const hide = element => {
    element.style.display = 'none';
};

//set default element display
const setDefaultDisplay = element => {
    element.style.display = '';
};

//set element background colour
const setBGcolour = (element, color) => {
    element.style.backgroundColor = color;
};

//set element animation
const animate = (element, animation) => {
    element.style.animation = animation;
};

//====================================================================

//close navigation overlay
const closeOverlay = () => {
    navMobile.style.width = '';
    navMobile.style.padding = '';
    overlay.classList.add('hidden');
};

//display default home page
const displayDefaultLayout = () => {
    hide(portfolioPreview);
    setDefaultDisplay(portfolioSec);
    setDefaultDisplay(header);
    setDefaultDisplay(about);
    setDefaultDisplay(contact);

    main.style.marginTop = '';
};

//handle portfolio navigation events
const handlePortfolioEvents = e => {
    if (e.target === navFEWD ) {
        insertPortfolio(fewdPortfolio, 'portfolio_fewd', 'fewd', 'Front End Web Development Work');
    } else if (e.target === navILL ) {
        insertPortfolio(illustrationPortfolio, 'portfolio_illus', 'illus', 'Illustration Work');
    } else if (e.target === navGD) {
        insertPortfolio(gdPortfolio, 'portfolio_gd', 'gd', 'Visual Design Work');
    }
};

//handle navigation clicks
const handleNavEvents = e => {
    let button = e.target.textContent;
    const home = 'Home';
    const about = 'About';
    const contact = 'Contact';

    if (button === home || button === about || button === contact) {
        insertPortfolio(illustrationPortfolio, 'portfolio_illus', 'illus', 'Illustration Work');
        displayDefaultLayout();
    }

    if (e.target !== navMobile && button !== 'Portfolio' && e.target.id !== 'nav_portfolio' && e.target.id !== 'nav_socials') {
        closeOverlay();
    }
};

//handle Medium - Large screens navigation clicks
const handleMLScreenNavEvents = e => {
    let button = e.target.textContent;
    const home = 'Home';
    const about = 'About';
    const contact = 'Contact';
    const fewd = 'Front End Web Dev';
    const illus = 'Illustrations';
    const gd = 'Graphic Design';

    if (button === home) {
        displayDefaultLayout();
        setBGcolour(body, '');
    } else if (button === about || button === contact || button === fewd || button === illus || button === gd) {
        displayDefaultLayout();
    }
};

//insert portfolio images into portfolio section
const insertPortfolio = (array, id, cardClass, heading) => {

    portfolioSec.innerHTML = '';
    let portfolioHeading = document.createElement('H3');
    portfolioHeading.textContent = heading;
    portfolioHeading.id = 'portfolio_heading';

    const section = document.createElement('DIV');
    section.id = id;

    let index = 0;

    array.forEach(project => {
        let previewContainer = document.createElement('DIV');
        let previewImg = document.createElement('IMG');
        let previewCap = document.createElement('P');

        previewContainer.className = `card_${cardClass}`;
        previewContainer.setAttribute('data-index', index);

        previewImg.setAttribute('alt', project.description);
        previewImg.setAttribute('src', project.img);

        previewCap.className = 'card-caption';
        previewCap.innerHTML = 'view';

        previewContainer.appendChild(previewImg);
        previewContainer.appendChild(previewCap);
        section.appendChild(previewContainer);

        index++;
    });

    portfolioSec.appendChild(portfolioHeading);
    portfolioSec.appendChild(section);

    hide(portfolioPreview);
    setDefaultDisplay(portfolioSec);
    setDefaultDisplay(header);
    setDefaultDisplay(about);
    setDefaultDisplay(contact);

    main.style.marginTop = '';

    document.getElementById('portfolio_heading').scrollIntoView();
};

//display FEWD project data
const displayCard = index => {
    let info = fewdPortfolio[index];
    
    portfolioPreview.innerHTML = '';

    const cardInfo = `
            <h4>${info.title}</h4>
            <p>${info.description}</p>
            <img src="${info.img}" alt="${info.title}">
            <div class="container">
                <button id="buttonBack">Back</button>
                <a href="${info.link}" target="_blank">See Demo</a>
                <a href="${info.repo}" target="_blank">View Repo</a>
            </div>
        `;

    hide(portfolioSec);
    hide(header);
    hide(about);
    hide(contact);

    main.style.marginTop = '73px';

    portfolioPreview.innerHTML = cardInfo;
    setDefaultDisplay(portfolioPreview);

};

//====================================================================
//                        EVENTS & LISTENERS
//====================================================================

window.addEventListener('load', () => {
    if (location.hash) {
        setTimeout(function() {
      
          window.scrollTo(0, 0);
        }, 1);
      }
});

if (mqSmall.matches) {
    buttonMenuMobile.addEventListener('click', () => {
        navMobile.style.width = '75vw';
        navMobile.style.padding = '4rem 1.5rem 1rem';
        overlay.classList.remove('hidden');
    });
    
    buttonMenuClose.addEventListener('click', closeOverlay);
    overlay.addEventListener('click',closeOverlay);

    navMobile.addEventListener('click', handleNavEvents);

    portfolioPreview.addEventListener('click', e => {
        if (e.target.id === 'buttonBack') {
            displayDefaultLayout();
            portfolioSec.scrollIntoView();
        }
    });
}

portfolioLinks.addEventListener('click', handlePortfolioEvents);

portfolioSec.addEventListener('click', e => {
    if (e.target.parentNode.className === 'card_fewd') {
        const card = e.target.closest(".card_fewd");
        const index = card.getAttribute('data-index');
        displayCard(index);
        body.scrollIntoView();
    }
});

if (mqMedUp.matches) {
    window.addEventListener('scroll', () => {
        const position = element => element.offsetTop;
    
        const cards = document.querySelectorAll('[class^="card"]');
        const heading = document.getElementById('portfolio_heading');
        const portfolioPos = position(portfolioSec) - 500;
        const aboutPos = position(about) - 800;
        
            if (window.pageYOffset >= portfolioPos) {
                cards.forEach(card => animate(card, 'slide-up 1s forwards'));
                animate(heading, 'slide-up 1s forwards');
            } else {
                cards.forEach(card => animate(card, 'hide 1s forwards'));
                animate(heading, 'hide 1s forwards');
            }

            if (window.pageYOffset >= aboutPos) {
                setBGcolour(body, '#fff');
            } else {
                setBGcolour(body, '');
            }

    });

    navMobile.addEventListener('click', handleMLScreenNavEvents);

    portfolioPreview.addEventListener('click', e => {
        if (e.target.id === 'buttonBack') {
            displayDefaultLayout();
            portfolioSec.scrollIntoView();
        }
    });
}