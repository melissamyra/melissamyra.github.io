//media query
const mqSmall = window.matchMedia('(max-width: 768px)');

//DOM Elements
const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const buttonMenuMobile = document.getElementById('buttonMenuMobile');
const buttonMenuClose = document.getElementById('button_close');
const navMobile = document.getElementById('nav_mobile');
const overlay = document.querySelector('.overlay');
const portfolioSec = document.getElementById('portfolio');
const aboutSec = document.getElementById('about');

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

//colour
const dark = '#e4e4e4';

// portfolio links
const fewdPortfolio = [
    {
        title: 'Online Registration Form',
        link: 'https://melissamyra.github.io/techdegree-project-3/',
        img: 'images/fewd/online-res-form.png'
    },
    {
        title: 'Interactive Photo Gallery',
        link: 'https://melissamyra.github.io/techdegree-project-5/',
        img: 'images/fewd/interactive-photo-gallery.png'
    },
    {
        title: 'Phrase Guessing Game',
        link: 'https://melissamyra.github.io/techdegree-project-6/',
        img: 'images/fewd/guessing-game.png'
    },
    {
        title: 'WebApp Dashboard',
        link: 'https://melissamyra.github.io/techdegree-project-7/',
        img: 'images/fewd/webapp-dashboard.png'
    },
    {
        title: 'Employee Directory',
        link: 'https://melissamyra.github.io/techdegree-project-8/',
        img: 'images/fewd/employee-directory.png'
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

const closeOverlay = () => {
    navMobile.style.width = '';
    navMobile.style.padding = '';
    overlay.classList.add('hidden');
};

const handlePortfolioEvents = e => {
    if (e.target === navFEWD ) {
        insertPortfolio(fewdPortfolio, 'portfolio_fewd', 'fewd', 'Front End Web Development Work');
    } else if (e.target === navILL ) {
        insertPortfolio(illustrationPortfolio, 'portfolio_illus', 'illus', 'Illustration Work');
    } else if (e.target === navGD) {
        insertPortfolio(gdPortfolio, 'portfolio_gd', 'gd', 'Visual Design Work');
    }
};

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

// navFEWD.addEventListener('click', () => {
//     insertPortfolio(fewdPortfolio, 'portfolio-fewd', 'fewd');
// });

// navILL.addEventListener('click', () => {
//     insertPortfolio(illustrationPortfolio, 'portfolio-illus', 'illus');
// });

// navGD.addEventListener('click', () => {
//     insertPortfolio(gdPortfolio, 'portfolio-gd', 'gd');
// });


// if (mqSmall.matches) {
//     let prevScrollpos = window.pageYOffset;
//     window.onscroll = () => {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.querySelector('header::after').style.opacity = "1";
//         console.log(document.querySelector('header::after'));
//     } else {
//         document.querySelector('header::after').style.opacity = "0";
//     }
//     prevScrollpos = currentScrollPos;
//     }
// }