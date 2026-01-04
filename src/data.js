// src/data.js
import { Cpu, Zap, Beaker } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Mikhail Tiuterev",
  roles: ["Applied Scientist", "ML Engineer", "Physics Researcher"],
  tagline: "Bridging the gap between physical systems and machine learning.",
  videoResumeUrl: "/my_video_resume.mp4",
  videoPosterUrl: "/video_poster.jpg",
  socials: {
    github: "https://github.com/miketio",
    linkedin: "https://www.linkedin.com/in/tiuterevmt/",
    email: "mailto:mikhail.tiuterev@gmail.com"
  }
};

export const PROJECTS = [
  // {
  //   id: 1,
  //   title: "Autonomous Racing (DeepRacer)",
  //   description: "Top 20 Finalist in the Audi & AWS DeepRacer Cup. Optimized action-space (race line, speed, steering) using Metropolis-Hastings algorithms and reinforcement learning. Deployed lightweight PyTorch models on AWS for competitive autonomous racing.",
  //   techStack: ["Python", "PyTorch", "AWS", "Reinforcement Learning"],
  //   images: [
  //     "/deepracer/img1.jpg",
  //     "/deepracer/img2.jpg",
  //     "/deepracer/img3.jpg",
  //     "/deepracer/img4.jpg"
  //   ],
  //   buttons: [
  //     {
  //       label: "Source Code",
  //       link: "https://github.com/Piet1848/Bonnfire",
  //       isPrimary: true
  //     }
  //   ]
  // },
    {
    id: 1,
    title: "AI Agent for Audience Simulation",
    description: "Built a system that discovers hidden audience segments, converts them to LLM-powered personas, then simulates their responses to questions they've never seen.",
    techStack: ["AI Agents", "Python", "React", "Project Management"],
    images: [
      "/survey_modulation/stage_0.jpg",
      "/survey_modulation/stage_1.jpg",
      "/survey_modulation/stage_2.jpg",
      "/survey_modulation/stage_3.jpg",
      "/survey_modulation/stage_4.jpg",
      "/survey_modulation/stage_5.jpg",
      "/survey_modulation/stage_6.jpg",
      "/survey_modulation/stage_7.jpg"
    ],
    buttons: [
      {
        label: "Source Code",
        link: "https://github.com/miketio/survey_modulation",
        isPrimary: true
      }
    ]
  },
  {
    id: 2,
    title: "AI-Enabled SVD Operator",
    description: "Top 7 Finalist at Huawei Tech Arena (Sweden). Developed a hybrid CNN & Transformer model for wireless communications (128x128 -> rank-64). Optimized compute efficiency to <8M MACs for high-performance signal processing.",
    techStack: ["Python", "CNN", "Transformers", "Signal Processing"],
    images: [
      "/svd-operator/img1.jpg",
      "/svd-operator/img2.jpg",
      "/svd-operator/img3.jpg"
    ],
    buttons: [
      {
        label: "View Repository",
        link: "https://github.com/miketio/huawei_hackathon_sweden_2025",
        isPrimary: true
      }
    ]
  },
  {
    id: 3,
    title: "Laser Intensity Controller",
    description: "Built a multi-threaded Python/PyQt5 controller for real-time laser-intensity stabilization at the University of Bonn. Integrated Adam/Nelder-Mead optimization to eliminate manual tuning, significantly accelerating data collection and reproducibility.",
    techStack: ["Python", "PyQt5", "Automation", "Hardware Control"],
    images: [
      "/laser-controller/img1.jpg",
      "/laser-controller/img2.jpg"
    ],
    buttons: [
      {
        label: "View Code",
        link: "https://github.com/miketio/ExperimentSoftware",
        isPrimary: true
      }
    ]
  },
  {
    id: 4,
    title: "Battery SoC Estimation",
    description: "3rd Place at Huawei Tech Arena (Nuremberg). Implemented an Extended Kalman Filter (EKF) and tuned parameters using Nelder-Mead optimization to accurately estimate State-of-Charge from noisy voltage/current data.",
    techStack: ["Python", "Kalman Filters", "SciPy", "Data Analysis"],
    images: [
      "/battery-soc/img1.jpg",
      "/battery-soc/img2.jpg",
      "/battery-soc/img3.jpg",
      "/battery-soc/img4.jpg"
    ],
    buttons: [
      {
        label: "GitHub Repository",
        link: "https://github.com/miketio/huawei_hackathon_2024",
        isPrimary: true
      }
    ]
  },
  {
    id: 5,
    title: "Formula Student Aerodynamics",
    description: "Designed advanced aerodynamic components using Creo CAD for the GET Racing team. Manufactured carbon-fiber parts and contributed to a 30% increase in downforce, helping the team achieve P23 at FSG 2025.",
    techStack: ["CAD (Creo)", "Composites", "Fluid Dynamics", "Manufacturing"],
    images: [
      "/formula-student/img1.jpg",
      "/formula-student/img2.jpg",
      "/formula-student/img3.jpg"
    ],
    buttons: [
      {
        label: "Visit Team Website",
        link: "https://www.get-racing.de/",
        isPrimary: true
      }
    ]
  },
  {
    id: 6,
    title: "RFID Initialization App",
    description: "1st Place at IFM Hackathon 2025. Developed a winning application for RFID initialization, featuring seamless integration with SAP BTP middleware to streamline warehouse logistics.",
    techStack: ["SAP BTP", "RFID", "Integration", "Software Design"],
    images: [
      "/rfid-app/img1.jpg",
      "/rfid-app/img2.jpg",
      "/rfid-app/vid1.mp4"
    ],
    buttons: [
      {
        label: "Documentation",
        link: "https://github.com/ifm/ifm-hackathon-2025-team2",
        isPrimary: true
      }
    ]
  }
];

export const VALUE_PROPS = [
  { icon: Cpu, title: "Scientific Computing", desc: "Modeling physical systems with ML" },
  { icon: Zap, title: "Automation", desc: "Optimizing hardware control loops" },
  { icon: Beaker, title: "Research & Analysis", desc: "From theory to production code" },
];