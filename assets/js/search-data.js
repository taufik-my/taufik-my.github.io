// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "You can find a one-page resume in PDF form 📄.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-books",
          title: "books",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-scholarship-application-story-epilogue-the-dilemma-and-the-decision",
        
          title: "Scholarship Application Story Epilogue: The Dilemma and The Decision",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/scholarship-epiloge/";
          
        },
      },{id: "post-scholarship-application-story-global-korea-scholarship-for-undergraduate-degree-2020-gks-kgsp-embassy-track",
        
          title: "Scholarship Application Story: Global Korea Scholarship for Undergraduate Degree 2020 (GKS/KGSP) Embassy Track...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/gks/";
          
        },
      },{id: "post-scholarship-application-story-mext-monbukagakusho-global-scientists-and-engineers-program-gsep-tokyo-institute-of-technology-japan",
        
          title: "Scholarship Application Story: MEXT/Monbukagakusho – Global Scientists and Engineers Program (GSEP) Tokyo Institute...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/gsep/";
          
        },
      },{id: "post-the-school-of-life-gap-years",
        
          title: "The School of Life: Gap Years",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/gap-year/";
          
        },
      },{id: "post-the-beginning-abroad",
        
          title: "The Beginning: Abroad",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/the-beginning-abroad/";
          
        },
      },{id: "post-beasiswa-s1-dunia",
        
          title: "Beasiswa S1 Dunia!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/beasiswa-s1-dunia/";
          
        },
      },{id: "post-hello-world",
        
          title: "Hello World 👋",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/helloworld/";
          
        },
      },{id: "books-i-will-teach-you-to-be-rich",
          title: 'I Will Teach You to Be Rich',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-m-happy-to-join-metaearth-lab-as-an-undergraduate-researcher",
          title: 'I’m happy to join MetaEarth Lab as an undergraduate researcher!',
          description: "",
          section: "News",},{id: "news-i-ve-just-completed-the-2024-global-entrepreneurship-summer-school-program-held-at-kaist-and-silicon-valley-usa",
          title: 'I’ve just completed the 2024 Global Entrepreneurship Summer School Program, held at KAIST...',
          description: "",
          section: "News",},{id: "news-i-ve-been-selected-for-the-2024-sdgs-youth-summer-camp-organized-by-unosd-focusing-on-solutions-to-plasticpollution",
          title: 'I’ve been selected for the 2024 SDGs Youth Summer Camp, organized by UNOSD...',
          description: "",
          section: "News",},{id: "news-joshua-and-i-won-the-top-prize-in-a-pitch-competition-hosted-by-the-daejeon-center-for-creative-economy-amp-amp-innovation-where-we-presented-our-startup-empatics",
          title: 'Joshua and I won the top prize in a pitch competition hosted by...',
          description: "",
          section: "News",},{id: "news-i-received-the-2024-kaist-college-of-engineering-leadership-award-for-outstanding-extracurricular-contributions",
          title: 'I received the 2024 KAIST College of Engineering Leadership Award for outstanding extracurricular...',
          description: "",
          section: "News",},{id: "news-i-am-starting-my-internship-as-a-data-analytics-and-consulting-intern-at-lts-inc-in-tokyo-japan",
          title: 'I am starting my internship as a Data Analytics and Consulting Intern at...',
          description: "",
          section: "News",},{id: "news-i-ve-been-selected-as-one-of-the-awardees-of-the-fully-funded-justus-amp-amp-louise-van-effen-excellence-scholarship-to-pursue-an-msc-in-engineering-and-policy-analysis-at-tu-delft-starting-this-fall-2025-semester",
          title: 'I’ve been selected as one of the awardees of the fully-funded Justus &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "projects-marry-me-a-wedding-venue-finder",
          title: 'Marry Me - A Wedding Venue Finder',
          description: "A Human-Computer Interaction Course Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HCI/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%61%75%66%69%6B%6D%75%68%61%6D%61%64%79%75%73%75%70@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/taufik-my", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/taufik_my", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/taufikmuhamady", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
