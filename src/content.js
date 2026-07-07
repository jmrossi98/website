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
    `I graduated from the Rochester Institute of Technology with a B.S. in Software Engineering.
     Outside of work you'll find me gaming or digging into music.`,
  ],
  skills: [
    { group: 'Languages', items: ['Python', 'TypeScript / JavaScript', 'Java', 'C++', 'SQL', 'HTML / CSS'] },
    { group: 'Backend', items: ['Django', 'Spring Boot', 'Flask', 'Node.js', 'PostgreSQL', 'AWS', 'Snowflake'] },
    { group: 'Frontend', items: ['Vue', 'React', 'React Native', 'Angular', 'Webpack'] },
    { group: 'ML & Data', items: ['TensorFlow', 'Keras', 'Scikit-Learn'] },
    { group: 'DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'Nginx', 'Linux', 'Git', 'Gradle', 'Protobuf'] },
  ],
}

export const experience = [
  {
    company: 'Capital One',
    role: 'Senior Software Engineer',
    period: 'Mar 2025 — Present',
    location: 'McLean, VA',
    bullets: [
      'Designed and implemented real-time data processing features in TypeScript for a multi-user message streaming platform on AWS Lambda and DynamoDB, enhancing onboarding alerting and improving the experience for millions of users.',
      'Built and deployed an email payload-generation service in a Java / Spring Boot microservice, contributing to a 30% increase in reported user satisfaction.',
      'Shipped a self-service feature on the enterprise TypeScript / Angular interface used by millions of customers, reducing agent servicing calls by 20%.',
      'Collaborated with partner engineering, design, and infrastructure teams to deliver roadmap initiatives across front-end and platform systems.',
    ],
    tech: ['TypeScript', 'Java', 'Spring Boot', 'Angular', 'AWS Lambda', 'DynamoDB'],
  },
  {
    company: 'Mastodon Design LLC, a CACI Company',
    role: 'Software Engineer',
    period: 'Aug 2019 — Mar 2025',
    location: 'Rochester, NY',
    bullets: [
      'Owned mission-critical backend microservices — Python / Django REST APIs and PostgreSQL databases — supporting 5+ manufacturing and supply chain applications where downtime would halt production, cutting API response times by 40% through query optimization and caching.',
      'Led feature development for a production tracking web app (TypeScript / React / Node / Docker) enabling real-time verification of test completion and yield metrics, used daily by manufacturing teams managing millions in inventory.',
      "Built the supply chain department's primary desktop application in Python for serial tracking and supplier reporting, reducing task completion time by 30%.",
      'Developed a Java-based API wrapper integrating legacy MATLAB factory systems with modern data pipelines.',
      'Mentored junior developers and drove the team’s adoption of Scrum.',
      'Partnered with multiple departments to define requirements, plan tests, and deliver full-stack functionality.',
    ],
    tech: ['Python', 'Django', 'PostgreSQL', 'TypeScript', 'React', 'Node', 'Docker', 'Java', 'MATLAB'],
  },
  {
    company: 'Mastodon Design LLC, a CACI Company',
    role: 'Software Engineer Intern',
    period: 'Sept 2018 — Aug 2019',
    location: 'Rochester, NY',
    bullets: [
      'Developed full-stack improvements for a multi-threaded customer desktop application in C++ / Qt.',
    ],
    tech: ['C++', 'Qt'],
  },
]

export const education = {
  school: 'Rochester Institute of Technology',
  degree: 'B.S. Software Engineering',
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
