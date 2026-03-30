import { NavLink } from 'react-router-dom'

const routeLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

export default function CommonNavLinks({ className, ariaLabel = 'Main navigation' }) {
  return (
    <nav className={`common-nav-links ${className || ''}`.trim()} aria-label={ariaLabel}>
      {routeLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          className={({ isActive }) => (isActive ? 'is-active' : '')}
        >
          {link.label.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  )
}
