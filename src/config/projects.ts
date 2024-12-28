// projects
export const projectHeadLine = "Check out my latest work"
export const projectIntro = "I've worked on a variety of projects, from simple websites to complex web applications.Here are a few of my favorites."

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string,
  category?: string[],
  tags?: string[],
  image?: string,
  techStack?: string[],
  gitStars?: number,
  gitForks?: number,
  videoLink?: string  // Added a new property for the video link
}

// Updated projects list
export const projects: Array<ProjectItemType> = [
  {
    name: 'CryptCrud',
    description: 'A social media web app that connects people and allows them to interact, share content, and build communities.',
    link: { href: 'cryptcrud.vercel.app/', label: 'CryptCrud' },
    logo: '/social-media (2).png',  // Placeholder icon, replace it with the appropriate one
    category: ['Web App'],
    techStack: ['React', 'Node.js', 'MongoDB'],
    tags: ['Social Media', 'Web Application', 'Community Building'],
    videoLink: 'https://link-to-your-video.com/cryptcrud'  // Replace with actual video link
  },
  {
    name: 'Redefined',
    description: 'A 3D animated website showcasing a modern approach to web design with stunning animations.',
    link: { href: 'redefined-peach.vercel.app/', label: 'Redefined' },
    logo: '/dimensions.png',  // Placeholder icon, replace it with the appropriate one
    category: ['Web Design'],
    techStack: ['Three.js', 'React', 'CSS'],
    tags: ['3D Animation', 'Web Design', 'Interactive'],
    videoLink: 'https://link-to-your-video.com/redefined'  // Replace with actual video link
  },
  {
    name: 'Pipeline Builder',
    description: 'A tool to help users build pipeline structures for continuous integration and deployment.',
    link: { href: 'pipeline-frontend-beige.vercel.app/', label: 'Pipeline Builder' },
    logo: '/data-pipeline.png',  // Placeholder icon, replace it with the appropriate one
    category: ['DevOps', 'Tool'],
    techStack: ['React', 'Node.js', 'AWS'],
    tags: ['CI/CD', 'DevOps', 'Pipeline Management'],
    videoLink: 'https://link-to-your-video.com/pipelinebuilder'  // Replace with actual video link
  },
  {
    name: 'Image Generator',
    description: 'Generate images from text prompts using AI, creating realistic visuals based on your descriptions.',
    link: { href: 'nextjs-image-generation.vercel.app/', label: 'Image Generator' },
    logo: '/artificial-intelligence.png',  // Placeholder icon, replace it with the appropriate one
    category: ['AI', 'Web App'],
    techStack: ['Next.js', 'OpenAI API', 'TailwindCSS'],
    tags: ['AI', 'Image Generation', 'Web Application'],
    videoLink: 'https://link-to-your-video.com/imagegenerator'  // Replace with actual video link
  },
  {
    name: 'Medium Blog Clone',
    description: 'A blog posting application that replicates the Medium platform, allowing users to write and publish articles.',
    link: { href: 'medium-project-delta.vercel.app/signup', label: 'Medium Blog Clone' },
    logo: '/medium.png',  // Placeholder icon, replace it with the appropriate one
    category: ['Web App'],
    techStack: ['React', 'Node.js', 'MongoDB'],
    tags: ['Blogging', 'Web Application', 'Content Management'],
    videoLink: 'https://link-to-your-video.com/mediumblogclone'  // Replace with actual video link
  },
  {
    name: 'Github Repository Finder',
    description: 'Find GitHub users and explore their repositories with ease.',
    link: { href: 'githubrepofinder.com', label: 'Github Repository Finder' },
    logo: '/github-sign.png',  // Placeholder icon, replace it with the appropriate one
    category: ['Web App'],
    techStack: ['React', 'GitHub API', 'TailwindCSS'],
    tags: ['GitHub', 'Repository Finder', 'Web Application'],
    videoLink: 'https://link-to-your-video.com/githubrepofinder'  // Replace with actual video link
  }
]

export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'CryptCrud',
    description: 'Open-source Social Media web app',
    link: { href: 'github.com/Boss-Lord-Sean-Gangster/CryptCrud', label: 'CryptCrud' },
    gitStars: 120,  // Random number
    gitForks: 45     // Random number
  },
  {
    name: 'Pipeline-Backend',
    description: 'Open-source pipeline structure builder',
    link: { href: 'github.com/Boss-Lord-Sean-Gangster/Pipeline-Builder', label: 'Pipeline-Builder' },
    gitStars: 98,   // Random number
    gitForks: 35     // Random number
  },
  {
    name: 'Redefined',
    description: 'Open-source 3D website',
    link: { href: 'github.com/Boss-Lord-Sean-Gangster/Redefined', label: 'Redefined' },
    gitStars: 56,   // Random number
    gitForks: 22     // Random number
  },
  {
    name: 'Rocket.Chat',
    description: 'Learning this open-source repo',
    link: { href: 'github.com/Boss-Lord-Sean-Gangster/Rocket.Chat', label: 'Rocket.Chat' },
    gitStars: 102,  // Random number
    gitForks: 50     // Random number
  },
  {
    name: 'ChitChat',
    description: 'Open-source chatting application',
    link: { href: 'github.com/Boss-Lord-Sean-Gangster/ChitChat-frontend', label: 'ChitChat' },
    gitStars: 75,   // Random number
    gitForks: 29     // Random number
  },
  {
    name: 'Supply Order Management',
    description: 'Open-source Supplier tracking app',
    link: { href: 'github.com/Boss-Lord-Sean-Gangster/Supplier-Order-Management', label: 'Supply Order Management' },
    gitStars: 150,  // Random number
    gitForks: 60     // Random number
  }
]

