import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contacts",
    label: "Contacts",
  },
  {
    to: "/account",
    label: "Account",
  },
  {
    to: "/catalog",
    label: "Products",
  }
];

export const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation_menu'>
        {links.map((link) => (
          <li className='navigation_item' key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
