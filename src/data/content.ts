import type { PersonalInfo, SkillCategory, TimelineEvent } from './types';

export const personalInfo: PersonalInfo = {
  name: 'Krzysztof Nasuta',
  alias: 'Nasus',
  role: 'Software Engineer',
  company: 'Dynatrace',
  email: 'krzysztof@nasuta.dev',
  bio: 'Computer Science student at <b>Gdańsk University of Technology</b> blending software development with DevOps practices. \
    Passionate about scalable architecture, backend engineering, managing infrastructure. \
    I especially enjoy working with Kubernetes. \
    <br/><br/> \
    Currently working at <b>Dynatrace</b> in the area of access control and identity management, with main focus on OAuth protocol implementation.',
  socials: [
    {
      name: 'Email',
      url: 'mailto:krzysztof@nasuta.dev',
      iconSlug: 'mailgun',
      displayText: 'krzysztof@nasuta.dev',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/krzysztof-nasuta',
      iconSlug: 'linkedin',
      displayText: 'in/krzysztof-nasuta',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Nasus20202',
      iconSlug: 'github',
      displayText: 'Nasus20202',
    },
    {
      name: 'Discord',
      url: 'https://discordapp.com/users/.nasus',
      iconSlug: 'discord',
      displayText: '.nasus',
    },
  ],
};

export const skills: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend & Core Engineering',
    icons: ['java', 'dotnet', 'nodedotjs', 'python', 'postgresql'],
    details: 'Java, .NET, Node.js, Python, PostgreSQL',
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud Infrastructure',
    icons: ['docker', 'kubernetes', 'terraform', 'ansible'],
    details: 'Docker, Kubernetes, Terraform, Ansible',
  },
  {
    id: 'frontend',
    name: 'Frontend Architecture',
    icons: ['typescript', 'react', 'nextdotjs'],
    details: 'TypeScript, React, Next.js',
  },
  {
    id: 'system',
    name: 'System & Version Control',
    icons: ['linux', 'git'],
    details: 'Linux, Git',
  },
  {
    id: 'ai',
    name: 'AI & Agentic Development',
    icons: ['githubcopilot', 'claudecode'],
    details: 'Agentic Workflows, LLM Integration',
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'prom2',
    type: 'commit',
    lane: 'work',
    title: 'Software Engineer II @ Dynatrace',
    date: 'Jun 2026 - Present',
    description: 'Promotion to mid-level software engineer.',
  },
  {
    id: 'start-msc',
    type: 'branch',
    lane: 'edu2',
    from: 'main',
    title: 'Start M.Sc. @ GUT',
    date: 'Oct 2025 - Present',
    description: "Started Master's degree at Gdańsk University of Technology.",
  },
  {
    id: 'merge-bsc',
    type: 'merge',
    lane: 'main',
    from: 'edu',
    title: 'Completed B.Sc. in Computer Science',
    date: 'Feb 2026',
    description:
      "Graduated with a Bachelor's degree in Computer Science from Gdańsk University of Technology.",
  },
  {
    id: 'prom1',
    type: 'commit',
    lane: 'work',
    title: 'Software Engineer I @ Dynatrace',
    date: 'Mar 2025 - May 2026',
    description: 'Promotion to full-time Software Engineer.',
  },
  {
    id: 'start-work2',
    type: 'branch',
    lane: 'work',
    from: 'main',
    title: 'SE Intern @ Dynatrace',
    date: 'Jul 2024 - Mar 2025',
    description: 'Second internship at Dynatrace.',
  },
  {
    id: 'merge-intern',
    type: 'merge',
    lane: 'main',
    from: 'intern',
    title: 'Completed the internship',
    date: 'Sep 2023',
  },
  {
    id: 'start-intern',
    type: 'branch',
    lane: 'intern',
    from: 'main',
    title: 'SE Intern @ Dynatrace',
    date: 'Jul 2023 - Sep 2023',
    description: 'First internship at Dynatrace.',
  },
  {
    id: 'start-bsc',
    type: 'branch',
    lane: 'edu',
    from: 'main',
    title: 'Start B.Sc. @ GUT',
    date: 'Oct 2021 - Feb 2025',
    description: "Started Bachelor's at Gdańsk University of Technology.",
  },
  {
    id: 'init',
    type: 'commit',
    lane: 'main',
    title: 'Initial commit',
    date: '2003',
    description: 'Hello World.',
  },
];
