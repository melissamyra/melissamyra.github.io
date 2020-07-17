/*jshint esversion: 6 */

//media query
const mqSmall = window.matchMedia('(max-width: 768px)');
const mqMedUp = window.matchMedia('(min-width: 768px)');

//DOM Elements
const mobileLogo = document.querySelector('.menu_mobile h2');
const body = document.querySelector('body');
const intro = document.getElementById('intro');
const header = document.querySelector('header');
const main = document.querySelector('main');
const about = document.getElementById('about');
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
const portfolioSecLinks = document.querySelectorAll('.portfolios_link');

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
    setDefaultDisplay(intro);
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

    if (e.target !== navMobile && button !== 'Portfolio' && e.target.id !== 'nav_portfolio' && e.target.id !== 'nav_socials' && e.target.className !== 'portfolios' && e.target.tagName !== 'LI') {
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
        setDefaultDisplay(intro);
        intro.style.opacity = '';
        intro.style.transform = '';
        portfolioSecLinks.forEach(link => link.style.color = '#151515');
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

    const positionX = element => element.offsetTop;
    const positionY = element => element.offsetLeft;
    if (mqSmall.matches) {
        const portfolioX = positionX(portfolioSec) - 30;
        const portfolioY = positionY(portfolioSec);
        setTimeout(()=>{
            window.scrollTo(portfolioY, portfolioX);
        },100);
    } else {
        const portfolioX = positionX(portfolioSec);
        const portfolioY = positionY(portfolioSec);
        setTimeout(()=>{
            window.scrollTo(portfolioY, portfolioX);
        },100);
    }
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

    hide(intro);
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
        navMobile.style.padding = '2rem 2rem 1rem';
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

    const position = element => element.offsetTop;
    const aboutPos = position(about) - 500;

    window.addEventListener('scroll', () => {

        if (window.pageYOffset >= aboutPos) {
            mobileLogo.style.opacity = '1';
        } else {
            mobileLogo.style.opacity = '';
        }
    });
}

portfolioLinks.addEventListener('click', handlePortfolioEvents);

portfolioSec.addEventListener('click', e => {
    if (e.target.parentNode.className === 'card_fewd') {
        const card = e.target.closest(".card_fewd");
        const index = card.getAttribute('data-index');
        displayCard(index);
        
        if (mqSmall.matches) {
            window.scrollTo(0,50);
        } else if (mqMedUp.matches) {
            body.scrollIntoView();
        }
    }
});

if (mqMedUp.matches) {
    window.addEventListener('scroll', () => {
        const position = element => element.offsetTop;
    
        const cards = document.querySelectorAll('[class^="card"]');
        const heading = document.getElementById('portfolio_heading');
        const portfolioPos = position(portfolioSec) - 500;
        const aboutPos = position(about) - 1000;
        
            if (window.pageYOffset >= portfolioPos) {
                cards.forEach(card => animate(card, 'slide-up 1s forwards'));
                animate(heading, 'slide-up 1s forwards');
            } else {
                cards.forEach(card => animate(card, 'hide 1s forwards'));
                animate(heading, 'hide 1s forwards');
            }

            if (window.pageYOffset >= aboutPos) {
                setBGcolour(body, '#fff');
                portfolioSecLinks.forEach(link => link.style.color = '');
                intro.style.opacity = '0';
                intro.style.transform = 'translateY(-150px)';
                setTimeout(()=> {
                    hide(intro)
                },100);
            } else {
                setBGcolour(body, '');
                portfolioSecLinks.forEach(link => link.style.color = '#151515');
                setTimeout(()=> {
                    setDefaultDisplay(intro);
                },200);
                intro.style.opacity = '';
                intro.style.transform = '';
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