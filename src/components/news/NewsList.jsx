import { NavLink } from "react-router-dom";

const NewsList = ({ item, key }) => {
  return (
    <li key={key}>
      <NavLink to={`/news/${item.id}`}>{item.title}</NavLink>
    </li>
  );
};

export default NewsList;
