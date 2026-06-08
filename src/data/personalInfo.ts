import type { PersonalInfo } from './types';

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
      iconSlug: 'at-sign',
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
