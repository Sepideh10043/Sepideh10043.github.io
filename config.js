// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "RWR 4013",

    // updated tagline text (big pill)
    tagline: "Course Project: Digital Twins for Smart Cities",

    studentName: "Yohan Mohammadi",
    program: "Program / Department",
    university: "RoadwayVR University, Canada",
    email: "your.email@example.com"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
    footerBg: "#111111",
    footerText: "#ffffff",
    footerBorder: "#222222"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Digital Twin of an Urban Intersection Using Video-Based Demand Estimation and SUMO Scenario Testing",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): raw video → detections/tracks → SUMO baseline → signal timing scenarios → KPI comparison dashboard."
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
      "Single-intersection case study for practicing data-driven operational evaluation.",
      "Compare baseline conditions to potential improvements using simulation under stated assumptions.",
      "Focus on transparent methods and measurable KPIs (educational what-if outcomes)."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
      "Observed congestion and queue spillback during peak periods (video evidence).",
      "Stop-and-go conditions and turning interactions may increase perceived conflict risk.",
      "Need to compare low-cost operational strategies before considering major geometric changes."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Extract traffic volumes, turning movements, and trajectories from video using computer vision.",
      "Build a baseline SUMO model that matches observed demand and approximate field conditions.",
      "Test signal timing strategies as controlled what-if scenarios (cycle, splits, offsets, phasing).",
      "Summarize scenario performance using measurable KPIs and communicate findings clearly."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Data Layer (Computer Vision)",
        text: "We detect and track road users from the video to estimate turning volumes, trajectories, speeds, and time headways. These outputs become inputs to the simulation model.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 2: Model Layer (Traffic Simulation)",
        text: "We build a SUMO network for the intersection/corridor and calibrate demand and behavior so baseline queues and travel times are reasonable compared to what is observed.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 3: Connection Layer (Signal Optimization)",
        text: "We test alternative timing plans (cycle length, green splits, offsets, phases). Each scenario is evaluated using consistent KPIs to enable a fair comparison.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 4: Service Layer (Decision & Visualization)",
        text: "We communicate outcomes with KPI dashboards, plots, and short animations to help a non-technical audience understand tradeoffs between scenarios.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Sensing",
        bullets: [
          { text: "Detector + tracker used (e.g., YOLOv8 + ByteTrack) and why chosen." },
          { text: "Extraction of turning volumes and movement counts from tracked trajectories." },
          { text: "Quality checks: occlusion notes, sample frames, and error sources." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Simulating",
        bullets: [
          { text: "Network build: lanes/connectors, routes, demand inputs from Module 1." },
          { text: "Calibration evidence (travel time, queue length, or GEH comparison where possible)." },
          { text: "Baseline KPIs: delay, queues, stops, throughput (brief summary)." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Signal Strategy Testing",
        bullets: [
          { text: "Decision variables changed: cycle length, splits, offsets, and/or phase structure." },
          { text: "Scenario design: baseline + 2–3 what-if timing strategies under the same demand." },
          { text: "Comparison: before vs after KPI table and one clear plot." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Visualization",
        bullets: [
          { text: "Dashboard or plot set: KPI cards, bar charts, and/or time series." },
          { text: "Scenario story: what changed, what improved, and what tradeoffs appeared." },
          { text: "Limitations + next steps: what data would strengthen confidence." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

  results: {
    title: "Results & Potential Improvements (Simulation-Based)",
    subtitle:
      "We compare baseline conditions to tested scenarios using measurable KPIs. These results are simulation outputs for educational purposes only and are not city-validated or approved.",

    kpis: [
      { metric: "Average Delay",         baseline: "45",   improved: "36",   change: "-20%",     unit: "s/veh", note: "Overall" },
      { metric: "Average Stopped Delay", baseline: "28",   improved: "22",   change: "-21%",     unit: "s/veh", note: "Overall" },
      { metric: "Throughput",           baseline: "1800", improved: "1950", change: "+8%",      unit: "veh/h", note: "Total served" },
      { metric: "Emission",             baseline: "100",  improved: "87",   change: "-13%",     unit: "kg",    note: "CO₂ (example)" },
      { metric: "LOS",                  baseline: "D",    improved: "C",    change: "Improved", unit: "-",     note: "Intersection LOS" }
    ],

    charts: {
      left: {
        title: "Average Delay per Approach",
        src: "assets/img/image6.jpg",
        alt: "Average delay per approach chart"
      },
      right: {
        title: "Average Delay (Overall)",
        src: "assets/img/image7.jpg",
        alt: "Overall average delay chart"
      }
    },

    discussionTitle: "Discussion (Safe Language)",
    discussionBullets: [
      "In our simulation, timing changes reduced delay and queues under the observed demand conditions.",
      "Tradeoffs may exist (e.g., one approach improves while another worsens); we report both.",
      "Additional testing across multiple days/time periods would improve confidence and generalizability.",
      "Any real-world implementation would require agency review, constraints, and field validation."
    ]
  },

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Your Name", role: "Computer Vision + Simulation + KPI Analysis + Reporting" }
    ],

    acknowledgments: [
      "Course: Digital Twins for Smart Cities",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Python, CV models, and visualization tools"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO"
  }
};
