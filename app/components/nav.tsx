import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  '/projects': {
    name: 'Projects',
  },
  '/contact': {
    name: 'contact'
  },
}

export function Navbar() {
  return (
    <nav className="flex gap-8 border-b border-neutral-200 dark:border-neutral-800 pb-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative px-1 py-2 text-sm font-medium
                   text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100
                   before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px]
                   before:bg-blue-600 before:transition-all before:duration-300
                   hover:before:w-full"
                >
                  {name}
                </Link>
              )
            })}
        </nav>
  )
}
