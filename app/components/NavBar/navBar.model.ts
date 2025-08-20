interface INavBarItem {
  text: string
  link: string
}

export type { INavBarItem }

const NAV_ITEMS: INavBarItem[] = [
  { text: 'About me', link: '/about' },
  { text: 'Projects', link: '/projects' },
  { text: 'CV', link: '/cv' },
]

export { NAV_ITEMS }
