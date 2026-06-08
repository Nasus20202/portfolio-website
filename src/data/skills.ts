import type { SkillCategory } from './types';

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
