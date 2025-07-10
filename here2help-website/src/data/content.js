// Content configuration file for easy editing
// Edit this file to update website content without touching component code

export const siteContent = {
  // Hero Section
  hero: {
    title: "Here2help",
    subtitle: "A smart community mutual aid application that connects people who need help with volunteers in real-time, powered by location-based technology and AI.",
    features: [
      { icon: "MapPin", text: "Location-based" },
      { icon: "Heart", text: "Real-time help" },
      { icon: "Users", text: "Community driven" }
    ],
    buttons: [
      { text: "Explore the App", type: "primary" },
      { text: "View Demo", type: "secondary" }
    ],
    badge: {
      subtitle: "University CS Project",
      title: "E2E Full Stack Management IoT"
    }
  },

  // About Section
  about: {
    title: "About Here2help",
    description: "Here2help is a revolutionary community mutual aid platform that leverages cutting-edge technology to connect people in need with willing volunteers in their local area.",
    features: [
      {
        title: "Real-time Matching",
        description: "Our AI-powered system instantly matches help requests with nearby volunteers based on location, skills, and availability."
      },
      {
        title: "Secure & Trusted",
        description: "Built-in verification system and community ratings ensure safe and reliable interactions between users."
      },
      {
        title: "Easy to Use",
        description: "Intuitive interface makes it simple for anyone to request help or offer assistance in just a few taps."
      }
    ]
  },

  // How It Works Section
  howItWorks: {
    title: "How It Works",
    subtitle: "Getting help or helping others is just a few taps away",
    steps: [
      {
        step: "1",
        title: "Request Help",
        description: "Post your help request with details about what you need and your location."
      },
      {
        step: "2",
        title: "Get Matched",
        description: "Our AI system finds nearby volunteers who can assist with your specific need."
      },
      {
        step: "3",
        title: "Connect & Help",
        description: "Connect with your matched volunteer and coordinate the assistance."
      }
    ]
  },

  // Technology Section
  technology: {
    title: "Technology Stack",
    subtitle: "Built with modern technologies for reliability and scalability",
    technologies: [
      {
        name: "React Native",
        description: "Cross-platform mobile development",
        category: "Frontend"
      },
      {
        name: "Node.js",
        description: "Scalable backend services",
        category: "Backend"
      },
      {
        name: "MongoDB",
        description: "Flexible data storage",
        category: "Database"
      },
      {
        name: "Socket.io",
        description: "Real-time communication",
        category: "Real-time"
      },
      {
        name: "Google Maps API",
        description: "Location services",
        category: "Location"
      },
      {
        name: "Firebase",
        description: "Authentication & notifications",
        category: "Services"
      }
    ]
  },

  // Use Cases Section
  useCases: {
    title: "Use Cases",
    subtitle: "Here2help serves various community needs",
    cases: [
      {
        title: "Emergency Assistance",
        description: "Quick help during emergencies like medical situations, accidents, or urgent needs.",
        icon: "AlertTriangle"
      },
      {
        title: "Daily Tasks",
        description: "Assistance with grocery shopping, moving items, or other daily activities.",
        icon: "ShoppingBag"
      },
      {
        title: "Elderly Support",
        description: "Helping elderly community members with technology, transportation, or companionship.",
        icon: "Users"
      },
      {
        title: "Skill Sharing",
        description: "Connect with people who can teach skills or provide professional advice.",
        icon: "BookOpen"
      }
    ]
  },

  // Team Section
  team: {
    title: "Our Team",
    subtitle: "Meet the passionate developers behind Here2help",
    members: [
      {
        name: "Alex Johnson",
        role: "Full Stack Developer",
        description: "Passionate about creating technology that makes a positive impact on communities.",
        image: "/api/placeholder/150/150"
      },
      {
        name: "Sarah Chen",
        role: "UI/UX Designer",
        description: "Focused on creating intuitive and accessible user experiences for all users.",
        image: "/api/placeholder/150/150"
      },
      {
        name: "Mike Rodriguez",
        role: "Backend Developer",
        description: "Specializes in building scalable and secure backend systems and APIs.",
        image: "/api/placeholder/150/150"
      }
    ]
  },

  // Footer
  footer: {
    description: "Here2help - Connecting communities through technology and compassion.",
    links: [
      { text: "About", href: "#about" },
      { text: "How It Works", href: "#how-it-works" },
      { text: "Technology", href: "#technology" },
      { text: "Team", href: "#team" }
    ],
    copyright: "© 2024 Here2help. University CS Project."
  }
};

// Color scheme - edit these to change the website colors
export const colorScheme = {
  primary: "#8B5CF6", // Purple
  secondary: "#F97316", // Orange
  accent: "#10B981", // Green
  background: "#F8FAFC", // Light gray
  text: "#1F2937" // Dark gray
};

