// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  navBrand: "Student Academic Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    quoteHtml: "“Digital twins turn data into decisions.”",
    profileImage: "assets/img/image1.jpg", // student photo OR lab logo
    studioName: "Academic Digital Twin Studio",
    tagline: "Course Project · Educational Case Study",
    studentName: "Your Name",
    program: "Program / Department",
    university: "Your University, Canada",
    email: "your.email@example.com"
  },

  // Required disclaimer shown near top AND footer
  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    cityName: "City of X (example)",
    courseName: "Digital Twins for Smart Cities",
    institutionName: "York University"
  },

  // Theme colors
  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  // Star divider bars
  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  // Footer colors
  footer: {
    footerBg: "#111111",
    footerText: "#ffffff",
    footerBorder: "#222222"
  },

  intro: {
    title: "Digital Twin Case Study",
    subtitle:
      "We demonstrate an end-to-end digital twin workflow using real-world video data: sensing with computer vision, building and calibrating a SUMO model, testing signal timing strategies, and visualizing scenario KPIs for decision support.",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "", // optional: "assets/img/cover.jpg"
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption: "Autoplay preview: sensing → simulation → optimization → visualization (20s)"
  },

  caseStudy: {
    title: "Case Study Context",
    locationLabel: "Study Location",
    locationValue: "Intersection Name, City, Province",
    timeframeLabel: "Data Window",
    timeframeValue: "Example: Weekday PM peak (4–6 PM), Fall 2025",

    problemTitle: "Problem Statement",
    problemBullets: [
      "Observed congestion and queue spillback during peak periods",
      "Potential safety concerns due to turning conflicts and stop-and-go conditions",
      "Need to compare low-cost operational improvements before infrastructure changes"
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Extract traffic volumes and movements from video using computer vision",
      "Build and calibrate a SUMO simulation model representing baseline operations",
      "Test signal timing strategies and compare KPIs across scenarios",
      "Summarize results as potential improvements under stated assumptions"
    ]
  },

  dataMethods: {
    title: "Data & Methods (Transparency)",
    subtitle:
      "We describe data sources, tools, assumptions, and limitations to support responsible academic use.",
    dataSourcesTitle: "Data Sources",
    dataSources: [
      { name: "Video Data", detail: "Course-provided or publicly accessible footage (cite source if public)", url: "" },
      { name: "Intersection Geometry", detail: "OpenStreetMap / GIS base layers", url: "" },
      { name: "Signal Timing", detail: "Assumed or derived baseline timing (document assumptions)", url: "" }
    ],
    toolsTitle: "Tools Used",
    tools: ["Python", "YOLO/Detector", "Tracker (e.g., ByteTrack)", "SUMO", "QGIS", "Unity / Dashboard"],

    assumptionsTitle: "Assumptions & Limitations",
    assumptionsBullets: [
      "Simulation results depend on calibration quality and available data (e.g., limited observation window).",
      "Optimized timings are evaluated in simulation only and are not validated by the city.",
      "Findings are scenario-specific and may not generalize to other periods or locations."
    ]
  },

  overview: {
    title: "Digital Twin Pipeline",
    subtitle: "A 4-step pipeline: Sensing → Simulating → Optimizing → Visualizing.",
    steps: [
      {
        title: "Step 1: Sensing (Computer Vision)",
        text: "Detect, track, and count vehicles from video to derive demand inputs.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 2: Simulating (Traffic Simulation)",
        text: "Build and calibrate a SUMO model to represent baseline operations.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 3: Optimizing (Signal Strategy Testing)",
        text: "Test timing strategies and compare performance across scenarios.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 4: Visualizing (Decision Support)",
        text: "Communicate results with KPIs, plots, and scenario comparisons.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Technical Implementation (Demo Modules)",
    subtitle: "Short module demos with links (optional): each module shows evidence and outputs.",
    modules: [
      {
        title: "Module 1: Sensing",
        videoUrl: "https://youtu.be/PUT_VIDEO_LINK_HERE",
        bullets: [
          { text: "Detection + tracking approach (what model, what tracker)" },
          { text: "Outputs: counts, turning movements, trajectories (examples)" },
          { text: "Quality checks: missed detections, occlusion notes" }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Simulating",
        videoUrl: "https://youtu.be/PUT_VIDEO_LINK_HERE",
        bullets: [
          { text: "Network build + demand inputs from sensing outputs" },
          { text: "Calibration evidence (travel time / queue / GEH, etc.)" },
          { text: "Baseline KPI summary" }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Signal Strategy Testing",
        videoUrl: "https://youtu.be/PUT_VIDEO_LINK_HERE",
        bullets: [
          { text: "What was changed (cycle, split, offsets, phases)" },
          { text: "How strategies were tested (scenarios / constraints)" },
          { text: "Before vs after KPI comparison" }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Visualization",
        videoUrl: "https://youtu.be/PUT_VIDEO_LINK_HERE",
        bullets: [
          { text: "Dashboard/plots used to communicate results" },
          { text: "Scenario comparison: what-if outcomes" },
          { text: "Limitations and next steps" }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

  results: {
    title: "Results & Potential Improvements (Simulation-Based)",
    subtitle:
      "We report baseline vs tested scenario performance using measurable KPIs. These are academic simulation outputs, not city-validated results.",

    kpis: [
      { metric: "Average delay", baseline: "45", improved: "36", unit: "s/veh", note: "Simulated average" },
      { metric: "Max queue", baseline: "180", improved: "140", unit: "m", note: "Peak 5-min window" },
      { metric: "Travel time", baseline: "220", improved: "190", unit: "s", note: "Study corridor" }
    ],

    discussionTitle: "Discussion (Safe Language)",
    discussionBullets: [
      "In our simulation, timing changes reduced delay and queues under the observed demand conditions.",
      "Benefits depend on traffic patterns; additional days/time periods should be tested.",
      "Any real-world implementation would require agency review, constraints, and field validation."
    ]
  },

  team: {
    title: "Team & Acknowledgments",
    subtitle: "Academic context, roles, and references for transparency.",
    members: [
      { name: "Your Name", role: "CV + Simulation + Reporting" }
    ],
    acknowledgments: [
      "Course: Digital Twins for Smart Cities",
      "Institution: York University",
      "Instructor: [Your Name Here]"
    ],
    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO"
  }
};
