

export default function NavItem({ label, href, scrolled }) {
  return (
    <li>
      <a
        href={href}
        className={` hover:border-b-2 transition-all border-b-2 border-transparent text-secondary hover:border-secondary   font-medium`}
      >
        {label}
      </a>
    </li>
  );
}
