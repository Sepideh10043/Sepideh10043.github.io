// config.js  (Students edit only this file)
window.SITE_CONFIG = {
  // Browser tab title
  pageTitle: "Digital Twin Student Showcase",

  // Navbar
  navBrand: "Student Showcase",

  // Top black banner
  hero: {
    quoteHtml: "“Your Slogen”",
    profileImage: "assets/img/image1.jpg", // student photo
    studentName: "Your Name",
    program: "Program / Department",
    university: "Your University, Canada",
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
    title: "Digital Twin for Smart City",
    subtitle:
      "Learn the full digital-twin pipeline: extract real-world traffic data with computer vision, model networks/signals/demand in SUMO, and evaluate smart-city strategies through simulation.",
    heroImage: "assets/img/image2.jpg", // big banner image
    heroImageAlt: "Project showcase image"
  },

  // Digital Twins for Smart Cities (4 circles)
  overview: {
    title: "Digital Twins for Smart Cities",
    subtitle:
      "A 4-step Digital Twin pipeline: Sensing → Simulating → Optimizing → Deciding.",
    steps: [
      {
        title: "Step 1: Sensing (Computer Vision)",
        text: "Detect, track, and count vehicles from videos.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 2: Simulating (Traffic Simulation)",
        text: "Build and calibrate a traffic simulation model (SUMO) using the observed data.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 3: Optimizing (Measuring System Performance)",
        text: "Improve signal timing / network control using optimization algorithm.",
        image: "assets/img/image5.jpg"
      },
      {
        title: "Step 4: Deciding (Visualization for Decision-Making)",
        text: "Compare scenarios with KPIs and recommend actions for a real-world problem.",
        image: "assets/img/image6.jpg"
      }
    ]
  },

  // SUMO Basic Tutorials (keep heading, but reduce to 4 blocks)
  basic: {
    title: "Video Demonstration",
    subtitle:
      "Showcasing 1-min video for each step",
    modules: [
      {
        title: "Module 1: Sensing",
        bullets: [
          { text: "Data collection and annotation strategy" },
          { text: "Detector/tracker pipeline (YOLO, ByteTrack, etc.)" },
          { text: "Outputs: counts, trajectories, speed, conflicts" }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 2: Simulating",
        bullets: [
          { text: "Network building (geometry, lanes, routes)" },
          { text: "Calibration and validation (GEH, travel time, queues)" },
          { text: "Baseline scenario results" }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 3: Optimizing",
        bullets: [
          { text: "Webster approach" },
          { text: "Decision variables (cycle, split, offset, phases)" },
          { text: "Before vs after KPI comparison" }
        ],
        image: "assets/img/image5.jpg"
      },
      {
        title: "Module 4: Deciding",
        bullets: [
          { text: "Best scenario summary (what changed and why)" },
          { text: "Implementation notes (constraints, feasibility)" },
          { text: "Future work and limitations" }
        ],
        image: "assets/img/image6.jpg"
      }
    ]
  }
};
