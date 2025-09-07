// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'BenElgoz', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Quelques projets GitHub',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Mes projets',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Projet interne TotalEnergies',
          description:
            'Grand projet international concernant la sécurité. Les langages que j\'ai pu utiliser étaient Angular et Nest.js. La gestion de projet comprenait la méthode agil SCRUM.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/fr/f/f7/Logo_TotalEnergies.svg',
          // link: 'https://landing.ratos.fr',
        },
        {
          title: 'Ratos',
          description:
            'Projet d\'école réalisé dans le cadre du My Digital Project 2025, dans une équipe où j\'étais le seul développeur, j\'ai utilisé React.js et Node / Express. ',
          imageUrl:
            'https://benelgoz.github.io/Portfolio/gitprofile/logo_ratos.svg',
          link: 'https://github.com/BenElgoz/Ratos',
        },
        {
          title: 'Young Leader School',
          description:
            'Réalisation d\'un site vitrine pour une école complémentaire. J\'ai pu faire le maquettage et la version définitive avec l\'outil low-code Framer ',
          imageUrl:
            'https://benelgoz.github.io/Portfolio/gitprofile/logo_yls.png',
          link: 'https://www.youngleaderschool.com/',
        },
        {
          title: 'Netflix-Clone',
          description:
            'Projet personnel reprenant le design et concept de Netflix, en récupérant les films et séries par une API externe. Réalisé avec React.js.',
          imageUrl:
            'https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png',
          link: 'https://github.com/BenElgoz/Netflix-Clone',
        },
      ],
    },
  },
  seo: { title: 'Portfolio de Benjamin Bonnevial', description: '', imageURL: '' },
  social: {
    linkedin: 'benjamin-bonnevial',
    // x: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    phone: '+33 6 59 57 36 89',
    email: 'benjamin.bonnevial@gmail.com',
  },
  resume: {
    fileUrl:
      'https://benelgoz.github.io/Portfolio/gitprofile/CV_Benjamin_Bonnevial.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Sass',
    'Tailwind',
    'React.js',
    'Angular',
    'Next.js',
    'Node.js',
    'Nest.js',
    'Express.js',
    'PHP',
    'MySQL',
    'PostgreSQL',
    'CakePHP',
    'Git',
    'GitHub',
    'Docker',
    'Wordpress',
    'Framer',
    'Figma',
  ],
  experiences: [
    {
      company: 'TotalEnergies',
      position: 'Alternant Software Engineer',
      from: 'Octobre 2024',
      to: 'Septembre 2025',
      // companyLink: 'https://example.com',
    },
    {
      company: 'Young Leader School',
      position: 'Stagiaire Développeur Front-End Low-Code',
      from: 'Avril 2024',
      to: 'Juin 2024',
      companyLink: 'https://www.youngleaderschool.com/',
    },
  ],
  certifications: [
    {
      name: 'Bachelor Concepteur développeur d\'applications',
      body: 'Titre RNCP 37873 de niveau 6',
      year: 'Août 2025',
      link: 'https://www.francecompetences.fr/recherche/rncp/37873/',
    },
  ],
  educations: [
    {
      institution: 'MBA Développeur Full-Stack',
      // degree: 'Degree',
      from: '2025',
      to: '2027',
    },
    {
      institution: 'Bachelor Développeur Web',
      // degree: 'Degree',
      from: '2022',
      to: '2025',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'clair',
      // 'sombre',
      // 'cupcake',
      // 'émeraude',
      // 'retro',
      // 'cyberpunk',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      // 'sunset',
      // 'caramellatte',
      // 'abyss',
      // 'silk',
      // 'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
