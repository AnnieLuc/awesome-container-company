// Images for Hero section
import foodWaste                      from '../images/food-waste.png';
import foodWithAwesomeContainer       from '../images/food-with-awesome-container.png';

// Images for BadEffects section
import plasticInOcean                 from '../images/plastic-in-ocean.png';
import plasticInLandfill              from '../images/plastic-in-landfills.png';
import plasticNonRecyclable           from '../images/non-recyclable-plastics.png';

// Images for slides in SustainabilityDelivered section
import containerImage25oz             from '../images/gallery-containers-1.png';
import containerImage16oz             from '../images/gallery-containers-2.png';
import containerImage100oz            from '../images/gallery-containers-3.png';

// Images for circular ecosystem in HowItWorks section
import HowItWorksImg1                 from '../images/how-it-works-1.svg';
import HowItWorksImg2                 from '../images/how-it-works-2.svg';
import HowItWorksImg3                 from '../images/how-it-works-3.svg';
import HowItWorksImg4                 from '../images/how-it-works-4.svg';

// Images of all the team members used in AwesomeTeam section
import huangLam                       from '../images/founders/hung-lam.png';
import edwinPhua                      from '../images/founders/edwin-phua.png';
import guillaumeCatella               from '../images/founders/guillaume-catella.png';

// Logos of all the partners used in AwesomePartners section
import chefAtWork                     from '../images/partners/chef-at-work.png';
import creatella                      from '../images/partners/creatella.png';
import goaGoa                         from '../images/partners/goa-goa.png';
import ninjaVan                       from '../images/partners/ninja-van.png';
import constellation               from '../images/partners/constellation.png';
import greatSolutions               from '../images/partners/greatsolutions.png';

const data = {
  pageLoad: {
    companyName: 'Awesome Container Company',
  },
  hero: {
    mainText: 'Help our environment by eliminating single-use plastics from your delivery with',
    companyName: 'Awesome Container Company',
    imagesToCompare : {
      firstImg: {
        url: foodWaste,
        description: 'Food getting wasted without awesome containers',
      },
      secondImg: {
        url: foodWithAwesomeContainer,
        description: 'Food with awesome containers',
      }
    },
    chatMessages: [
      {
        sender: 'guest',
        color: 'default',
        hasOnClickEvent: false,
        message: 'What do you do?',
      },
      {
        sender: 'admin',
        color: 'primary',
        hasOnClickEvent: false,
        message: 'We provide reusable containers for restaurants, pick them up from users, clean them and give them back to your restaurant',
      },
      {
        sender: 'guest',
        color: 'default',
        hasOnClickEvent: false,
        message: 'Awesome!',
      },
      {
        sender: 'guest',
        color: 'highlight',
        hasOnClickEvent: true,
        message: 'I want to work with you!',
      },
      {
        sender: 'admin',
        color: 'primary',
        hasOnClickEvent: false,
        message: 'Cool! We operate in Singapore and are planning to open in Many other countries soon!',
      },
    ]
  },
  plasticsBadEffects: [
    {
      caption: 'Single-use plastics pollute oceans and kill marine species',
      image: plasticInOcean,
    },
    {
      caption: 'Single-use plastics pollute landfills and emit dangerous chemicals and greenhouse gases',
      image: plasticInLandfill,
    },
    {
      caption: 'Not all of the single-use plastics are recyclable',
      image: plasticNonRecyclable,
    }
  ],
  sustainabilityDeliveredSlides: [
    {
      id: 1,
      image: containerImage25oz,
      features: [
        'Removable/adjustable divider',
        'Leak-resistant lid keeps food fresh',
        'Rectangle shapes stack to save storage space',
        'Easy to sanitize and dishwasher safe',
        'Containers and lids are freezer safe',
        'Containers are oven safe up to 300 degrees',
        'Lighter and sturdier than glass',
        'Etched tare weights for easy bulk shopping',
        '304 (18/8) stainless steel, LDPE #4 plastic lid, PP #5 plastic divider',
        'Free of BPA, BPS, phthalates and lead',
      ],
      sizing: [
        '25oz container size with lid on: 7.75” x 1.75" x 5” Lids: 7.75” x 5"',
      ],
    },
    {
      id: 2,
      image: containerImage16oz,
      features: [
        'Leak-resistant lid keeps food fresh',
        'Easy to sanitize and dishwasher safe',
        'Containers and lids are freezer safe',
        'Containers are oven safe up to 300 degrees',
        'Three containers nest to save storage space',
        'Lighter and sturdier than glass',
        'Etched tare weights for easy bulk shopping',
        '304 (18/8) stainless steel, LDPE #4 plastic',
        'Free of BPA, BPS, phthalates and lead',
      ],
      sizing: [
        '16oz, container size with lid on: 4-5/8" x 2.25". Lid is 4.75” diameter',
        '9oz, container size with lid on: 4" x 2". Lid is 4” diameter',
        '5oz, container size with lid on: 3.5" x 1.5". Lid is 3.5” diameter',
      ],
    },
    {
      id: 3,
      image: containerImage100oz,
      features: [
        'Removable 2-section + 4-section divider',
        'Leak-resistant lid keeps food fresh',
        'Easy to sanitize and dishwasher safe',
        'Containers and lids are freezer safe',
        'Containers are oven safe up to 300 degrees',
        'Lighter and sturdier than glass',
        'Etched tare weights for easy bulk shopping',
        '304 (18/8) stainless steel, LDPE #4 plastic lid, PP#5 divider',
        'Free of BPA, BPS, phthalates and lead',
      ],
      sizing: [
        '100oz (3 liters, 12.5 cups), 9.5” x 3.25”',
      ],
    },
  ],
  howItWorks: {
    title: 'How it works?',
    circularEcosystem: {
      step1: {
        stepNo: '01',
        image: {
          url: HowItWorksImg1,
          description: 'a mobile app with containers',
        },
        caption: 'Restaurants request reusable containers via app',
      },
      step2: {
        stepNo: '02',
        image: {
          url: HowItWorksImg2,
          description: 'a delivery truck',
        },
        caption: 'Deliver containers to restaurants',
      },
      step3: {
        stepNo: '03',
        image: {
          url: HowItWorksImg3,
          description: 'a person picking up the used containers',
        },
        caption: 'Pick up used containers from users via app',
      },
      step4: {
        stepNo: '04',
        image: {
          url: HowItWorksImg4,
          description: 'a washed, clean and sparkling container',
        },
        caption: 'Wash containers at commercial facility',
      }
    }
  },
  impacts: {
    title: 'Impact',
    cards: [
      {
        id: 1,
        cardHeader: "For Businesses",
        cardContent: [
          "Save at least 50% on supply cost",
          "Save 50-60 hours per week of manager's labor cost: no inventory management, no reordering, no restocking",
          "Save real estate cost for storage",
          "Government helps Subsidize Up to 70%",
        ],
      },
      {
        id: 2,
        cardHeader: "For Users",
        cardContent: [
          "Remove all chemicals going into food: plastics, BPA, PFAS and other 'forever chemicals' used to hold compostable packaging together",
          "Gamification: reward for returned containers",
          "Sustainability sells: users feel good about helping the planet",
        ],
      },
    ],
  },
  competition: {
    title: 'The competition is no match',
    table: [
      ['', 'Awesome Container Company', 'Deliver Zero', 'Logistics Company', 'Washing Facility', 'Single-use plastics'],
      ['Save over 50% on supply costs', true, false, false, false, false],
      ['Save real estate storage costs', true, true, false, false, false],
      ['Inventory management', true, false, false, false, false],
      ['Never reorder supplies', true, false, false, false, false],
      ['Easy pickup and delivery', true, false, true, true, true],
      ['Sustainable products', true, false, false, true, false],
      ['App for tracking and reporting', true, false, true, false, false],
    ],
  },
  awesomeTeam: {
    title: 'An Awesome Team',
    members: [
      {
        name: 'Hung Lam',
        title: 'Founder / CEO',
        linkedIn: 'https://www.linkedin.com/in/hung-lam-85a502163/',
        image: huangLam,
      },
      {
        name: 'Edwin Phua',
        title: 'Co-founder / COO',
        linkedIn: 'https://www.linkedin.com/in/edwin-phua/',
        image: edwinPhua,
      },
      {
        name: 'Guillaume Catella',
        title: 'Co-founder / CTO',
        linkedIn: 'https://www.linkedin.com/in/guillaumecatella/',
        image: guillaumeCatella,
      },
    ],
  },
  awesomePartners: {
    title: 'And Awesome Partners',
    logos: [
      {
        imgUrl: chefAtWork,
        link: 'https://chefatwork.com.sg/',
      },
      {
        imgUrl: ninjaVan,
        link: 'https://www.ninjavan.co/en-sg',
      },
      {
        imgUrl: greatSolutions,
        link: 'https://greatsolutions.com.sg/'
      },  
      {
        imgUrl: constellation,
        link: 'https://constellationnetwork.io/'
      },
      {
        imgUrl: creatella,
        link: 'https://creatella.ventures/'
      },
      {
        imgUrl: goaGoa,
        link: 'http://goaltd.com.hk/index.php/en/'
      },    

    ],
  },
  footer: {
    contactlink: 'https://calendly.com/awesomecontainers',
    address: {
      line1: '71 UBI Road 1, #08-42,',
      line2: 'Oxley Bizhub,',
      country: 'Singapore',
      postcode: '408732',
    },
    social: {
      twitter: '@Awesome_Venture',
    },
    activeInCountries: 'Singapore',
    planningToBeActiveInCountries: 'UK, EU, OSEAN, China, Vietnam, Malaysia, Taiwan',
  }
}

export default data;
