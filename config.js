// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  navBrand: "Student Academic Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    quoteHtml: "“Digital twins turn data into decisions.”",
    profileImage: "assets/img/image1.jpg",
    studioName: "Academic Digital Twin Studio",
    tagline: "Course Project · Educational Case Study",
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
    cityName: "City of X (example)",
    courseName: "Digital Twins for Smart Cities",
    institutionName: "RoadwayVR University",
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
    title: "Digital Twin Case Study",
    subtitle:
      "This website presents an academic case study that demonstrates the full digital twin pipeline using a real-world intersection video. We extract traffic demand with computer vision, build and calibrate a SUMO model, test signal timing strategies as what-if scenarios, and communicate results through clear KPIs and visualizations.",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): raw video → detections/tracks → SUMO baseline → signal timing scenarios → KPI comparison dashboard."
  },

  caseStudy: {
    title: "Introduction",
    locationLabel: "Study Location",
    locationValue: "Example: Main St & 2nd Ave, City of X, Province",
    timeframeLabel: "Data Window",
    timeframeValue: "Example: Weekday PM peak (4–6 PM), Fall 2025",

    introText:
      "We selected a single intersection and treated it as a case study to practice how planners and engineers evaluate operational performance using data-driven methods. The goal is to compare baseline conditions to potential improvements in simulation under clearly stated assumptions.",

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
    ],

    deliverablesTitle: "Academic Deliverables",
    deliverablesBullets: [
      "Annotated video clips and extracted counts/turning movements.",
      "SUMO network + demand files with calibration notes.",
      "Scenario comparison table (baseline vs strategies) with KPI plots.",
      "Short demo video + GitHub repo for reproducibility."
    ]
  },

  dataMethods: {
    title: "Data & Tools (Transparency)",
    subtitle:
      "To support responsible academic use, we document data sources, tools, assumptions, and limitations. Results are simulation-based and should be interpreted as educational what-if outcomes—not field-validated agency conclusions.",

    dataSourcesTitle: "Data Sources",
    dataSources: [
      {
        name: "Video Data",
        detail:
          "Course-provided footage of the study intersection used to estimate volumes and turning movements. If public footage is used, cite the URL and date accessed.",
        url: ""
      },
      {
        name: "Intersection Geometry",
        detail:
          "Road layout created from OpenStreetMap and refined in QGIS (lanes, approaches, connectors).",
        url: ""
      },
      {
        name: "Signal Timing",
        detail:
          "Baseline timing assumed/derived from observation. Any missing parameters are documented as assumptions.",
        url: ""
      }
    ],

    toolsTitle: "Tools Used",
    tools: [
      "Python (data processing, metrics, plots)",
      "YOLO/Detector (object detection)",
      "Tracker (e.g., ByteTrack) for trajectories",
      "SUMO (microsimulation model)",
      "QGIS / OSM (network building)",
      "Unity / Dashboard (visualization)"
    ],

    assumptionsTitle: "Assumptions & Limitations",
    assumptionsBullets: [
      "Simulation performance depends on calibration quality and the representativeness of the observed time window.",
      "Some parameters (e.g., driver behavior, compliance, exact signal settings) may be approximated and documented.",
      "Optimized strategies are evaluated in simulation only and are not validated or endorsed by the city.",
      "Results are scenario-specific and may change across different days, weather conditions, or demand patterns."
    ],

    reproducibilityNote:
      "Reproducibility: we provide the model files, scripts, and a short ‘How to run’ section in the repository so others can reproduce the baseline and scenario outputs."
  },

  overview: {
    title: "Methodology",
    subtitle: "A 4-step pipeline used in this case study: Computer Vision → Simulation → Optimization → Decision.",
    steps: [
      { title: "Step 1: Data Layer (Computer Vision)", text: "We detect and track road users from the video to estimate turning volumes, trajectories, speeds, and time headways. These outputs become inputs to the simulation model.", image: "assets/img/image2.jpg" },
      { title: "Step 2: Simulating (Traffic Simulation)", text: "We build a SUMO network for the intersection/corridor and calibrate demand and behavior so baseline queues and travel times are reasonable compared to what is observed.", image: "assets/img/image3.jpg" },
      { title: "Step 3: Optimizing (Signal Strategy Testing)", text: "We test alternative timing plans (cycle length, green splits, offsets, phases). Each scenario is evaluated using consistent KPIs to enable a fair comparison.", image: "assets/img/image4.jpg" },
      { title: "Step 4: Visualizing (Decision Support)", text: "We communicate outcomes with KPI dashboards, plots, and short animations to help a non-technical audience understand tradeoffs between scenarios.", image: "assets/img/image5.jpg" }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    subtitle:
      "Each module includes evidence (screenshots/plots) showing what was implemented and how outputs were validated at a basic academic level.",
    introText:
      "Below we document key technical decisions so the work is transparent and reproducible. The emphasis is on clear inputs/outputs and measurable evidence—not marketing claims.",

    // ✅ videoUrl removed from all modules
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
    headlineResult:
      "Headline (example): In simulation, Strategy B reduced average delay by ~20% and shortened peak queues by ~22% relative to the baseline.",
    kpis: [
      { metric: "Average delay", baseline: "45", improved: "36", unit: "s/veh", note: "Simulated average (all approaches)" },
      { metric: "Max queue", baseline: "180", improved: "140", unit: "m", note: "Peak 5-min window (worst approach)" },
      { metric: "Travel time", baseline: "220", improved: "190", unit: "s", note: "Study corridor (one direction)" }
    ],
    discussionTitle: "Discussion (Safe Language)",
    discussionBullets: [
      "In our simulation, timing changes reduced delay and queues under the observed demand conditions.",
      "Tradeoffs may exist (e.g., one approach improves while another worsens); we report both.",
      "Additional testing across multiple days/time periods would improve confidence and generalizability.",
      "Any real-world implementation would require agency review, constraints, and field validation."
    ],
    safeConclusionSentence:
      "These findings should be interpreted as academic what-if scenario outcomes under stated assumptions, not as an official operational assessment."
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
      "Data: Course-provided video and/or public sources (listed above)",
      "Tools: SUMO, Python, CV models, and visualization tools"
    ],
    creditsLine:
      "Credits: This is a student academic project. Any errors or interpretations are the student’s own.",
    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO",
    extraLinks: [
      { label: "Demo Video", url: "https://youtu.be/PUT_VIDEO_LINK_HERE" },
      { label: "Final Report (PDF)", url: "assets/report/final-report.pdf" }
    ]
  }
};
