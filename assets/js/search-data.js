// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-blocking-metastasis-with-a-peg-modified-peptide-drug",
          title: 'Blocking Metastasis with a PEG-modified Peptide Drug',
          description: "Multi-arm PEG-modified peptidomimetic inhibitors of tumor cell-blood vessel interaction to block extravasation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-gene-delivery-lipid-nanoparticle-to-inhibit-metastasis-of-lung-cancer",
          title: 'Gene delivery lipid nanoparticle to inhibit metastasis of lung cancer',
          description: "The novel siRNA and ASO co-loaded liposome combines with peptide drug to suppress metastasis by multitarget interference",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-overcoming-drug-resistance-by-inducing-ferroptosis",
          title: 'Overcoming drug resistance by inducing ferroptosis',
          description: "The liposome-based nanocatalytic sensitizer for inducing ferroptosis in AZD9291-resistant non-small cell lung cancer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-targeting-neuroinflammation-by-bioreactive-nanoparticle-for-early-detection-and-intervention-of-alzheimer-s-disease",
          title: 'Targeting neuroinflammation by bioreactive nanoparticle for early detection and intervention of Alzheimer’s Disease...',
          description: "A blood–brain barrier (BBB)-crossing manganese dioxide nanoparticle enables early detection through MRI signal enhancement and disease modification by reducing pathological factors such as ROS, hypoxia, and phosphorylated tau in the brains of Alzheimer’s disease (AD) mouse models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-lipid-polymer-hybrid-nanoparticles-for-inhibiting-metastasis-via-tumor-microenvironment-regulation",
          title: 'Lipid-Polymer hybrid nanoparticles for inhibiting metastasis via tumor microenvironment regulation',
          description: "WORK IN PROGRESS",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-lipid-polymer-hybrid-nanoparticle-as-an-adjuvant-therapy-to-inhibit-metastasis-and-recurrence",
          title: 'Lipid-polymer hybrid nanoparticle as an adjuvant therapy to inhibit metastasis and recurrence',
          description: "WORK IN PROGRESS",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
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
