(function () {
  const STORAGE_KEY = "amanPanchalPortfolioData";

  const defaultData = {
    profile: {
      name: "Aman Panchal",
      role: "Mechanical Design & Automation Professional",
      tagline: "I design practical automation systems and lead multidisciplinary innovation teams.",
      note: "I build useful systems for industry and agriculture, with a strong focus on execution.",
      image: "assets/aman-panchal.png",
      leadershipYears: "03+",
      leadershipLine: "Years of Experience in Leadership",
      systemYears: "02+",
      systemLine: "Years of Experience in System Designe",
      accolades: "10+",
      teamScale: "14 core + 50+ volunteers"
    },
    sections: {
      home: [
        {
          id: "home-obj",
          title: "Career Objective",
          duration: "Current Focus",
          description: "As a bachelor's student, I am seeking a career in automation product design and production industry. I am committed to expanding multidisciplinary skills and contributing to Industry 4.0 with practical, meaningful innovation."
        },
        {
          id: "home-edu-1",
          title: "B.Tech. Mechanical Engineering",
          duration: "GJUS&T, Hisar, Haryana",
          description: "Accredited A+ Grade by NAAC. NBA accredited for 2020-24 cycle."
        },
        {
          id: "home-edu-2",
          title: "Diploma in Pharmacy",
          duration: "2018 - 2020",
          description: "Atam Institute of Pharmacy, Hisar, Haryana. Affiliated by Pharmacy Council of Haryana."
        },
        {
          id: "home-edu-3",
          title: "Intermediate",
          duration: "2016 - 2017",
          description: "Government Senior Secondary School, Hisar, Haryana. Affiliated by H.B.S.E. Board."
        },
        {
          id: "home-edu-4",
          title: "Matriculation",
          duration: "2014 - 2015",
          description: "Leading Angel Public School, Hisar, Haryana. Affiliated by H.B.S.E. Board."
        },
        {
          id: "home-cert-1",
          title: "Barclays LifeSkills Programme",
          duration: "Oct 2023",
          description: "Campus Recruitment Training by GTT Foundation, Pune, Maharashtra."
        },
        {
          id: "home-cert-2",
          title: "Winter NSS Week Camp",
          duration: "Feb 2023",
          description: "NSS, GJUS&T, Haryana."
        },
        {
          id: "home-cert-3",
          title: "Aptitude Training Program",
          duration: "Jan 2023",
          description: "TIME Institute, Hisar, Haryana."
        },
        {
          id: "home-cert-4",
          title: "Summer NSS Village Camp",
          duration: "Jul 2022",
          description: "NSS, GJUS&T, Haryana."
        },
        {
          id: "home-cert-5",
          title: "Management Development Programme",
          duration: "Nov 2022",
          description: "MSME-DFO, Karnal, Haryana."
        },
        {
          id: "home-cc-1",
          title: "10-meter Pistol Shooting",
          duration: "Feb 2021 - Nov 2023",
          description: "Competitive co-curricular participation with sustained discipline and focus."
        },
        {
          id: "home-cc-2",
          title: "NSS Volunteer",
          duration: "Nov 2021 - Mar 2024",
          description: "Community and campus engagement through NSS initiatives."
        },
        {
          id: "home-cc-3",
          title: "Head Student Coordinator, Smart India Hackathon",
          duration: "Mar 2022 - Oct 2023",
          description: "Led student coordination and activity execution for major innovation events."
        },
        {
          id: "home-cc-4",
          title: "Head Coordinator, Hackathon Club - T&P Cell, GJU",
          duration: "Jul 2023 - Feb 2024",
          description: "Managed club-level operations and event delivery."
        }
      ],
      experience: [
        {
          id: "exp-1",
          title: "Chief Technical Officer, Ground Rebotics Pvt. Ltd. @ AIC, IITD",
          duration: "Mar 2024 - Present",
          description: "Engineering projects on agriculture and aquaculture automation; won 10+ national accolades.\nCommanded multidisciplinary teams and secured government backing via NIDHI PRAYAS.\nCurrently contributing as Mentor."
        },
        {
          id: "exp-2",
          title: "Founder & Captain, iConnect - PDUIIC, GJUS&T",
          duration: "Oct 2023 - Feb 2024",
          description: "Organized the 1st Techfest of GJUS&T with 10+ events over 3 days.\nRecruited and led 14 members with 50+ volunteers.\nCoordinated sponsors, judges, administration, and 2000+ attendees."
        },
        {
          id: "exp-3",
          title: "CAD-CAM Training, MSME Technology Centre, Rohtak",
          duration: "Sep 2023 - Nov 2023",
          description: "Completed 200-hour training covering CAD, CAE, and CAM fundamentals.\nExecuted 20+ CNC programs using Sinumerik EMCO WinNC.\nHands-on basics: turning, boring, grooving, drilling, milling, engraving."
        },
        {
          id: "exp-4",
          title: "Summer Internship, Jindal Southwest (JSW Plant), Hisar",
          duration: "Jun 2022 - Aug 2022",
          description: "Resolved machinery issues to minimize downtime and maintain operations.\nManaged workflow efficiency, safety, and quality standards.\nImproved troubleshooting and line management for productivity."
        }
      ],
      skills: [
        {
          id: "skill-1",
          title: "Mechanical Designing (CAD Modelling)",
          duration: "Core Technical Skill",
          description: "SolidWorks\nSiemens UG NX\n2D/3D modelling, assemblies, and surfaces"
        },
        {
          id: "skill-2",
          title: "3D Printing Technology",
          duration: "Core Technical Skill",
          description: "Fused Deposition Modelling (FDM)\nStereolithography (SLA)\nDigital Light Processing (DLP)"
        },
        {
          id: "skill-3",
          title: "Design Analysis & Manufacturing",
          duration: "CAE + CAM",
          description: "Ansys Workbench for CAE validation and PLM\nSiemens UG NX for CAM processes"
        },
        {
          id: "skill-4",
          title: "Sinumerik CNC Operations (EMCO WinNC)",
          duration: "Hands-on Operations",
          description: "Turning\nBoring\nGrooving\nDrilling\nMilling\nEngraving"
        },
        {
          id: "skill-5",
          title: "Other Technical Skills",
          duration: "Supplementary",
          description: "Video editing\nIoT\nArduino\nGraphic design using Canva"
        },
        {
          id: "skill-6",
          title: "Soft Skills",
          duration: "Professional Behaviour",
          description: "Project management\nResearch and analysis\nLeadership\nTeamwork\nStrategic planning\nProblem-solving\nDecision-making\nDesign thinking\nAnalytical skills"
        }
      ],
      projects: [
        {
          id: "proj-1",
          title: "CNC Foam Cutting Machine",
          duration: "Dec 2022 - Feb 2023",
          description: "Developed precise 3D foam cutting for polystyrene fabrication.\nAssembled aluminium rods, servo motors, and thermoplastic 3D printed parts.\nImplemented numerical controls for reliable cutting performance."
        },
        {
          id: "proj-2",
          title: "SWAN (System for Water Analysing & Nurturing)",
          duration: "Feb 2022 - Oct 2023",
          description: "Built an IoT-based water quality monitoring device for aquafarmers.\nRecognized through multiple PAN-India awards.\nFunded through RUSA 2.0 grant via PDUIIC, GJUS&T, Hisar."
        },
        {
          id: "proj-3",
          title: "GVIC (Gate Valve for Irrigation from Canals)",
          duration: "Feb 2024 - Present",
          description: "Designed a LoRa-operated flood irrigation system for Indian farmers.\nFunded through NIDHI PRAYAS grant.\nIncubated at AIC, Technopark, IIT Delhi Sonipat Campus."
        }
      ],
      awards: [
        {
          id: "award-1",
          title: "1st Prize - SSSS Category, 4th Technovation Hackathon",
          duration: "Feb 2022",
          description: "Innovation Budge, Sharda University, Delhi."
        },
        {
          id: "award-2",
          title: "1st Prize - Young Leaders Event, Techspardha'22",
          duration: "Apr 2022",
          description: "NIT Kurukshetra, Haryana."
        },
        {
          id: "award-3",
          title: "Silver Medallist - 10-meter Air Pistol",
          duration: "Apr 2022",
          description: "Inter College Competition, GJUS&T."
        },
        {
          id: "award-4",
          title: "Student of the Year, Udaan Fest 2K22",
          duration: "May 2022",
          description: "GJUS&T, Hisar, Haryana."
        },
        {
          id: "award-5",
          title: "1st Prize - Business Darbar, Prometeo'23",
          duration: "Jan 2023",
          description: "IIT Jodhpur, Rajasthan."
        },
        {
          id: "award-6",
          title: "Most Impactful Idea - Moonshot, Prometeo'23",
          duration: "Jan 2023",
          description: "IIT Jodhpur, Rajasthan."
        },
        {
          id: "award-7",
          title: "1st Prize - B-Plan Event, Techspardha'23 & E-Summit'23",
          duration: "Jan 2023",
          description: "NIT Kurukshetra, Haryana."
        },
        {
          id: "award-8",
          title: "Finalist - Empresario'23, Global Business Model Competition",
          duration: "Feb 2023",
          description: "IIT Kharagpur, West Bengal."
        },
        {
          id: "award-9",
          title: "1st Prize - Ideastrome, E-Summit'23",
          duration: "Feb 2023",
          description: "IIT Roorkee, Uttarakhand."
        },
        {
          id: "award-10",
          title: "Finalist - Investors Vista, E-Summit'23",
          duration: "Feb 2023",
          description: "IIT Roorkee, Uttarakhand."
        },
        {
          id: "award-11",
          title: "Finalist - State Level Hackathon, iHUB DivyaSampark@IIT Roorkee",
          duration: "Apr 2023",
          description: "DCRUST, Murthal, Haryana."
        },
        {
          id: "award-12",
          title: "Gold Medal (Declamation) - NSS Week Village Camp",
          duration: "Feb 2023",
          description: "NSS, GJUS&T, Hisar."
        },
        {
          id: "award-13",
          title: "Finalist - Build Your Own Business, Himalayan Startup Trek 2023",
          duration: "Oct 2023",
          description: "IIT Mandi, Himachal Pradesh."
        }
      ],
      contact: [
        {
          id: "contact-1",
          title: "Phone",
          duration: "Primary",
          description: "+91 9017 523352"
        },
        {
          id: "contact-2",
          title: "Email",
          duration: "Primary",
          description: "amanpanchal07@gmail.com"
        },
        {
          id: "contact-3",
          title: "Location",
          duration: "Current Base",
          description: "Hisar, Haryana, India - 125001"
        },
        {
          id: "contact-4",
          title: "LinkedIn",
          duration: "Profile",
          description: "linkedin.com/in/aman-panchal-980b7026b/"
        },
        {
          id: "contact-5",
          title: "Languages Known",
          duration: "Communication",
          description: "Hindi - Native proficiency\nEnglish - Professional proficiency\nPunjabi - Native proficiency"
        },
        {
          id: "contact-6",
          title: "Hobbies",
          duration: "Personal",
          description: "Discovering new places\nListening to music\nExploring technology"
        }
      ]
    }
  };

  function clone(data) {
    return JSON.parse(JSON.stringify(data));
  }

  function normalize(data) {
    if (!data || typeof data !== "object") {
      return clone(defaultData);
    }

    const merged = clone(defaultData);
    if (data.profile && typeof data.profile === "object") {
      Object.assign(merged.profile, data.profile);
    }

    if (merged.profile.teamScale === "14 + 50+") {
      merged.profile.teamScale = "14 core + 50+ volunteers";
    }

    if (data.sections && typeof data.sections === "object") {
      Object.keys(merged.sections).forEach(function (key) {
        if (Array.isArray(data.sections[key])) {
          merged.sections[key] = data.sections[key].map(function (card) {
            return {
              id: card.id || key + "-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
              title: card.title || "Untitled",
              duration: card.duration || "",
              description: card.description || ""
            };
          });
        }
      });
    }

    return merged;
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return clone(defaultData);
      }
      return normalize(JSON.parse(raw));
    } catch (error) {
      return clone(defaultData);
    }
  }

  function save(data) {
    const clean = normalize(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
    return clean;
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
    return clone(defaultData);
  }

  window.portfolioStore = {
    STORAGE_KEY,
    defaultData,
    clone,
    normalize,
    load,
    save,
    reset
  };
})();



