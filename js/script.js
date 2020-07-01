//media query
const mqSmall = window.matchMedia('(max-width: 768px)');

//DOM Elements
const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const footer = document.querySelector('footer');
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
const navAbout = document.querySelector('a[href="#about"]');
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
        title: 'Interactive Photo Gallery',
        link: 'https://melissamyra.github.io/techdegree-project-5/',
        repo: 'https://github.com/melissamyra/techdegree-project-5',
        img: 'images/fewd/interactive-photo-gallery.png',
        description: 'An interactive photo gallery built with JavaScript and jQuery, with a lightbox plugin and functioning search bar.'
    },
    {
        title: 'Phrase Guessing Game',
        link: 'https://melissamyra.github.io/techdegree-project-6/',
        repo: 'https://github.com/melissamyra/techdegree-project-6',
        img: 'images/fewd/guessing-game.png',
        description: 'A random phrase guessing game built with vanilla JavaScript for desktop screens.'
    },
    {
        title: 'WebApp Dashboard',
        link: 'https://melissamyra.github.io/techdegree-project-7/',
        repo: 'https://github.com/melissamyra/techdegree-project-7',
        img: 'images/fewd/webapp-dashboard.png',
        description: 'A mobile-responsive mockup web-stats dashboard demo built with CSS Grid Layout and JavaScript. Includes interactive charts made with Chart.js library.'
    },
    {
        title: 'Employee Directory',
        link: 'https://melissamyra.github.io/techdegree-project-8/',
        repo: 'https://github.com/melissamyra/techdegree-project-8',
        img: 'images/fewd/employee-directory.png',
        description: 'A mobile-responsive mockup employee directory demo that uses Fetch API to generate data for 12 random employees. Includes functioning search bar, interactive pop up overlay, and features a night mode.'
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
    },
    {
        title: 'Graphite Bird Illustration',
        img: 'images/illustration/bird.jpg',
        description: 'Graphite Illustration of a small bird'
    }
];

const gdPortfolio = [
    {
        title: 'Lemon Boy Poster',
        img: 'images/graphic-design/lemon-boy.png'
    },
    {
        title: 'Gallery Exhibition Poster',
        img: 'images/graphic-design/poster.png'
    },
    {
        title: 'Cacto Logo',
        img: 'images/graphic-design/cacto.png'
    },
    {
        title: 'Pomade Packaging Design',
        img: 'images/graphic-design/nb-pomade.jpg'
    },
    {
        title: 'Wall Banner',
        img: 'images/graphic-design/globorneo.png'
    },
    {
        title: 'Limkokwing Booklet Cover',
        img: 'images/graphic-design/lkw.jpg'
    },
    {
        title: 'Macam-Macam Logo',
        img: 'images/graphic-design/macam-macam.png'
    },
    {
        title: 'Forum Belia Tegas event T-shirt Design',
        img: 'images/graphic-design/fbt-shirts.png'
    },
    {
        title: 'Forum Belia Tegas Merchandise',
        img: 'images/graphic-design/fbt.png'
    }
];

//====================================================================
//                             FUNCTIONS
//====================================================================

//close navigation overlay
const closeOverlay = () => {
    navMobile.style.width = '';
    navMobile.style.padding = '';
    overlay.classList.add('hidden');
};

//display default home page
const displayDefaultLayout = () => {
    portfolioPreview.style.display = "none";
    portfolioSec.style.display = "";
    header.style.display = "";
    about.style.display = "";
    contact.style.display = "";

    main.style.marginTop = '';
}

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
}

//insert portfolio images into portfolio section
const insertPortfolio = (array, id, cardClass, heading) => {

    portfolioSec.innerHTML = '';
    portfolioHeading = document.createElement('H3');
    portfolioHeading.textContent = heading;

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
        previewCap.innerHTML = project.title;

        previewContainer.appendChild(previewImg);
        previewContainer.appendChild(previewCap);
        section.appendChild(previewContainer);

        index++;
    });

    portfolioSec.appendChild(portfolioHeading);
    portfolioSec.appendChild(section);

    portfolioPreview.style.display = "none";
    portfolioSec.style.display = "";
    header.style.display = "";
    about.style.display = "";
    contact.style.display = "";

    main.style.marginTop = '';
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
                <button><a href="${info.link}" target="_blank">See Demo</a></button>
                <button><a href="${info.repo}" target="_blank">View Repo</a></button>
            </div>
        `;

    portfolioSec.style.display = "none";
    header.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";

    main.style.marginTop = '73px';

    portfolioPreview.innerHTML = cardInfo;
    portfolioPreview.style.display = "";

};

//====================================================================
//                        EVENT LISTENERS
//====================================================================
buttonMenuMobile.addEventListener('click', () => {
    navMobile.style.width = '75vw';
    navMobile.style.padding = '4rem 1.5rem 1rem';
    overlay.classList.remove('hidden');
});

buttonMenuClose.addEventListener('click', closeOverlay);
overlay.addEventListener('click',closeOverlay);

portfolioLinks.addEventListener('click', handlePortfolioEvents);

navMobile.addEventListener('click', handleNavEvents);

portfolioSec.addEventListener('click', e => {
    if (e.target.parentNode.className === 'card_fewd') {
        const card = e.target.closest(".card_fewd");
        const index = card.getAttribute('data-index');
        displayCard(index);
        window.scrollTo(0, 0);
    }
});

portfolioPreview.addEventListener('click', e => {
    if (e.target.id === 'buttonBack') {
        displayDefaultLayout();
        window.scrollTo(0, 1200);
    }
});