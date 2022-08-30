import HeaderBottom from "./HeaderBottom";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";

function Header() {
  return (
    <header className="page-header">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
}

export default Header;
