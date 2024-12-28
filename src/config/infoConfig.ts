export * from './projects'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Nikhil Sharma '
export const headline = ' Full-Stack web developer and Software engineer.'
export const introduction = 'I’m Nikhil, a web developer from India. I like coding, and building interesting things'
export const email = 'nicks14368@gmail.com'
export const githubUsername = 'Boss-Lord-Sean-Gangster'

// about page
export const aboutMeHeadline = "I'm Nikhil Sharma, a software engineer based in India."
export const aboutParagraphs = [
  "I got into coding when I was 16, and I've been learning ever since. I've worked on a variety of projects, from simple websites to complex web applications.",
  "I have a lot of hobbies, such as gaming, travelling, singing and so on.",
  "I'm working as a fullstack developer engineer in India now. And I'm building a lot of side projects in my spare time.",
  "I have ambition to learn Web3 and LLM models."
]


// blog
export const blogHeadLine = "Here are some of my thoughts."
export const blogIntro = "I've written something about programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/CodeCrypt_'
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/Boss-Lord-Sean-Gangster'
  },
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
];



