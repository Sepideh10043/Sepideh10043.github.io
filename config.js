// config.js  (Students edit only this file)
window.SITE_CONFIG = {
  // Browser tab title
  pageTitle: "Digital Twin Student Showcase",

  // Navbar
  navBrand: "Student Showcase",

  // Top black banner
  hero: {
    quoteHtml: "“Let’s Grow Together<br>One Heart, One Community”",
    profileImage: "assets/img/image1.jpg", // student photo
    studentName: "Your Name",
    program: "Program / Lab / Department",
    university: "York University, Canada",
    email: "your.email@example.com"
  },

  // Theme colors
  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#fafafa",
    accent: "#0ea5a6"
  },

  // Main heading + big image
  intro: {
    title: "Open Learning Materials for Simulation of Urban Mobility (SUMO)",
    subtitle:
      "SUMO Traffic Simulator tutorials from quick start and traffic signals to reinforcement learning, energy & emissions, and immersive VR-based traffic studies.",
    heroImage: "assets/img/image2.jpg", // big banner image
    heroImageAlt: "Project showcase image"
  },

  // Tutorials at One Glance (4 circles)
  overview: {
    title: "Tutorials at One Glance",
    subtitle:
      "A 4-step Digital Twin pipeline: sensing → modeling → optimizing → deciding.",
    steps: [
      {
        title: "Step 1: Computer Vision",
        text: "Detect, track, and count road users from videos (vehicles, pedestrians, cyclists).",
        image: "assets/img/image1.jpg"
      },
      {
        title: "Step 2: Traffic Simulation",
        text: "Build and calibrate a traffic model (SUMO/VISSIM/Aimsun) using the observed data.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 3: Optimization",
        text: "Improve signal timing / network control using optimization or reinforcement learning.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 4: Decision-Making",
        text: "Compare scenarios with KPIs and recommend actions for a real-world problem.",
        image: "assets/img/image4.jpg"
      }
    ]
  },

  // SUMO Basic Tutorials (keep heading, but reduce to 4 blocks)
  basic: {
    title: "SUMO Basic Tutorials",
    subtitle:
      "Showcase four key modules of your project. Keep it short, clear, and visual.",
    modules: [
      {
        title: "Module 1: Computer Vision Setup",
        bullets: [
          { text: "Data collection and annotation strategy" },
          { text: "Detector/tracker pipeline (YOLO, ByteTrack, etc.)" },
          { text: "Outputs: counts, trajectories, speed, conflicts" }
        ],
        image: "assets/img/image1.jpg"
      },
      {
        title: "Module 2: Simulation Model",
        bullets: [
          { text: "Network building (geometry, lanes, routes)" },
          { text: "Calibration and validation (GEH, travel time, queues)" },
          { text: "Baseline scenario results" }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 3: Optimization / Control",
        bullets: [
          { text: "Webster / GA / PSO / RL approach" },
          { text: "Decision variables (cycle, split, offset, phases)" },
          { text: "Before vs after KPI comparison" }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 4: Findings & Recommendation",
        bullets: [
          { text: "Best scenario summary (what changed and why)" },
          { text: "Implementation notes (constraints, feasibility)" },
          { text: "Future work and limitations" }
        ],
        image: "assets/img/image4.jpg"
      }
    ]
  }
};
