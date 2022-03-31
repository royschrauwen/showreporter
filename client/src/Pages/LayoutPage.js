import { Outlet, Link } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      {/* <nav className="navigatie">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/logboek/nieuw">Nieuwe Log</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  );
};

export default LayoutPage;
