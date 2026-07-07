const S3 = 'https://jmrossi98-personal-content.s3.amazonaws.com'

export const profile = {
  name: 'Jakob Rossi',
  title: 'Senior Software Engineer',
  company: 'Capital One',
  email: 'jmrossi98@gmail.com',
  github: 'https://github.com/jmrossi98',
  linkedin: 'https://linkedin.com/in/jakob-rossi',
  steam: 'https://steamcommunity.com/profiles/76561198176095826/',
  resumeUrl: `${S3}/jakob_rossi_resume.pdf`,
  photo: `${S3}/images/me.png`,
  blackMage: `${S3}/images/black-mage.gif`,
  tagline:
    'I build reliable, high-impact software — from cloud-native backend services to polished frontend experiences.',
}

export const about = {
  paragraphs: [
    `I'm a software engineer from the Finger Lakes region of Upstate New York. I wrote my first
     line of code in 2013 and have been hooked ever since.`,
    `Today I'm a Senior Software Engineer at Capital One, where I design and ship real-time,
     cloud-native features that serve millions of small business customers. Before that, I spent
     six years building mission-critical backend services and full-stack applications for
     manufacturing and supply chain operations at Mastodon Design, a CACI company.`,
    `I graduated from the Rochester Institute of Technology with a B.S. in Software Engineering,
     with a minor in Business Administration. Outside of work you'll find me gaming or digging
     into music.`,
  ],
  skills: [
    { group: 'Languages', items: ['Python', 'TypeScript / JavaScript', 'Java', 'C++', 'SQL'] },
    { group: 'Backend', items: ['Django', 'Spring Boot', 'Flask', 'Node.js', 'PostgreSQL', 'AWS'] },
    { group: 'Frontend', items: ['Vue', 'React', 'React Native', 'Angular'] },
    { group: 'ML & Data', items: ['TensorFlow', 'Keras', 'Scikit-Learn'] },
    { group: 'DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'Nginx', 'Linux', 'Git'] },
  ],
}

export const experience = [
  {
    company: 'Capital One',
    role: 'Senior Software Engineer',
    period: 'Mar 2025 — Present',
    location: 'McLean, VA',
    bullets: [
      'Lead design and implementation of real-time data processing features in TypeScript for a multi-user message streaming platform on AWS Lambda and DynamoDB, improving alerting for millions of small business card users.',
      'Built email payload generation in a Java / Spring Boot microservice, contributing to a 30% increase in reported user satisfaction.',
      'Prototyped and launched a self-service card shipping feature in TypeScript / Angular, reducing agent servicing calls by 20%.',
    ],
    tech: ['TypeScript', 'Java', 'Spring Boot', 'Angular', 'AWS Lambda', 'DynamoDB'],
  },
  {
    company: 'Mastodon Design, a CACI Company',
    role: 'Software Engineer',
    period: 'Sept 2018 — Mar 2025',
    location: 'Rochester, NY',
    bullets: [
      'Individually maintained mission-critical backend microservices — a Python / Django REST API and PostgreSQL database powering 5+ manufacturing and supply chain systems — cutting API response time by 40%.',
      'Led feature development for a production tracking web app (TypeScript / React / Node / Docker) used daily to track millions of dollars of inventory.',
      "Designed and built the supply chain department's primary desktop application in Python, reducing task completion time by 30%.",
      'Mentored junior developers and led the team’s adoption of Scrum.',
    ],
    tech: ['Python', 'Django', 'PostgreSQL', 'TypeScript', 'React', 'Docker'],
  },
]

export const education = {
  school: 'Rochester Institute of Technology',
  degree: 'B.S. Software Engineering',
  detail: 'Minor in Business Administration',
  period: 'May 2021',
  location: 'Rochester, NY',
}

export const projects = [
  {
    title: 'Genre Detect',
    image: `${S3}/images/model_eval.png`,
    description:
      'Cloud-deployed music genre classification system powered by an LSTM recurrent neural network trained on the GTZAN dataset, reaching 81% validation accuracy.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Flask', 'AWS'],
    link: 'https://github.com/jmrossi98/genre_detect',
  },
  {
    title: 'NES Emulator',
    image: `${S3}/images/retrones.png`,
    description:
      'Emulator for the Nintendo Entertainment System that simulates the 6502 CPU cycle-for-cycle, with reverse-engineered picture and audio processing units.',
    tech: ['C++', 'OpenGL'],
    link: 'https://github.com/jmrossi98/nes_emulator',
  },
  {
    title: 'Urban Data Science',
    image: `${S3}/images/uds.png`,
    description:
      'Civic engagement platform built with RIT and the Marketview Heights Community Advisory Board — residents drop pins on a neighborhood map to surface local issues and guide public initiatives.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    link: 'https://gitlab.com/urban-data-science',
  },
  {
    title: 'Web Fuzzer',
    image: `${S3}/images/fuzzer.png`,
    description:
      'Automated security testing tool that crawls a target site, simulates user actions, and reports commonly exploited web vulnerabilities and where they live.',
    tech: ['Python'],
    link: 'https://github.com/jmrossi98/fuzzer',
  },
  {
    title: 'STM32 Embedded Projects',
    image: `${S3}/images/stm32.jpg`,
    description:
      'Series of embedded programs for the STM32L476 discovery board — PWM-driven servo control and a gyroscope-based cursor game over UART, built on FreeRTOS.',
    tech: ['C', 'FreeRTOS'],
    link: 'https://github.com/jmrossi98/swen563',
  },
]
