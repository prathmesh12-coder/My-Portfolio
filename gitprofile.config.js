// gitprofile.config.js

const config = {
  github: {
    username: 'prathmesh12-coder', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'prathmesh-sapate-b61987200',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '7588294495',
    email: 'pthsapate12@gmail.com',
    leetcode: 'prathmesh_12',
    gfg:'lit2020043',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1ETpzDRU2xIREdR_qlsOaN-R1GctOPMOT/view?usp=sharing' // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'c++',
    'JavaScript',
    'React.js',
    'Node.js',
    'HTML',
    'MySQL',
    'Git',
    'CSS',
    'Tailwind'
  ],
  experiences: [
    {
      company: 'Chegg',
      position: 'Subject Matter Expert',
      from: 'October 2023',
      to: 'Present',
    },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
 
  certifications: [
    {
      name: 'Wen Developement Bootcamp',
      body: 'Consists of HTML5, CSS3, and modern JavaScript, Node.js, Express.js, MongoDB alongside hands-on experience in building real-world applications',
      year: 'March 2024',
      link: 'https://drive.google.com/file/d/1xldSNqNGYE8F0rrRakNR3-td__kC1Lh2/view?usp=drivesdk',
    },
    {
      name: 'Flipkart Grid Level 2',
      body: 'Submission of Proof of Concept with Demo Video and Code Submission: Blockchain-based eCommerce warranty system using NFTs of Flipkart GRiD 4.0 - Software Development Challenge organised by Flipkart',
      year: 'July 2022',
      link: 'https://drive.google.com/file/d/1-CV2M-kJdRaswc45o7n1HDlvhDdVPKsL/view?usp=drivesdk',
    },
    
    {
      name: 'Flipkart Grid Level 1',
      body: 'E-Commerce & Tech Quiz of Flipkart GRiD 4.0 - Software Development Challenge organised by Flipkart',
      year: 'July 2022',
      link: 'https://drive.google.com/file/d/1-CV2M-kJdRaswc45o7n1HDlvhDdVPKsL/view?usp=drivesdk',
    },
    {
      name: 'IP Awareness/Training program participation',
      body: 'National Intellectual Property Awareness Mission',
      year: 'February 2022',
      link: 'https://drive.google.com/file/d/1PTubn15LAkR9yM1tY6bRgAJ0F4GOsf3o/view?usp=drivesdk',
    },
    {
      name: 'CodeRush Participation',
      body: 'coding contest CODE_RUSH conducted by GeeksforGeeks Student Chapter IIIT Lucknow',
      year: 'December 2020',
      link: 'https://drive.google.com/file/d/1-rAoNuOESBszeYGFteHGm1KpCqtKq068/view?usp=drivesdk',
    },
  ],


  education: [
    {
      institution: 'Indian Institute of Information Technology, Lucnknow',
      degree: 'B.Tech In Information Technology (CGPA:8.71)',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Sarosh Junior College, Aurangabad',
      degree: 'PCM : 12th - 89.38% HSC',
      from: '2018',
      to: '2020',
    },
    {
      institution: 'Jawahar Navoday Vidyalaya Kannad, Aurangabad',
      degree: '10th - 94.8% CBSE',
      from: '2018',
      to: '2013',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'SemiFinalist in Flipkart Grid 4.O',
      description:
      `Achieved semi-finalist status in the prestigious Flipkart Grid 4.0 Hackathon, a testament to our team's collaborative spirit and innovative prowess in solving real-world challenges set forth by one of India's leading e-commerce giants`,
      imageUrl: 'https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6299958714b6b_150150_-_challenge_logo.png?d=200x200',
      link: 'https://unstop.com/hackathons/flipkart-grid-40-software-development-challenge-flipkart-grid-40-flipkart-348170',
    },
    {
      title: 'Hack-o-Fiesta',
      description:
        'Achieved Rank 4 in the hackathon organized by Axios. A blockchain project developed during hackathon, designed to facilitate cryptocurrency trading.',
      imageUrl: 'https://hackofiesta.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F9fc09042aa5e43f786098e2a0c6474be%2Fassets%2Fcover%2F24.png&w=1440&q=100',
      link: 'https://hackofiesta.devfolio.co/overview',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with ❤️ by <a 
  // class="text-primary" href="https://www.linkedin.com/in/akshay-lavate/"
  // target="_blank"
  // rel="noreferrer"
  // >Akshay Lavate</a> with <a 
  //   class="text-primary" href="https://github.com/arifszn/gitprofile"
  //   target="_blank"
  //   rel="noreferrer"
  // >@arifszn/gitprofile</a>`,
};

export default config;
