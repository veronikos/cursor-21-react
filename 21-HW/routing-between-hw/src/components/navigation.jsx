import { Link } from "react-router-dom";

export const Navigation = ({ links }) => {
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
