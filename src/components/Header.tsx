import logo from "/src/assets/Logo.svg";
import search from "/src/assets/search.svg";
import menu from "/src/assets/menu.svg";

export default function Header() {
  return (
    <header className="main-header">
      <div className="main-header__pattern" aria-hidden="true" />
      <div className="main-header__inner">
      <img src={logo} alt="" className="logo" />

        <div className="main-header__actions">
          <button type="button" className="header-icon-button" aria-label="Otsi">
            <img src={search} alt="" className="search" />
          </button>

          <button type="button" className="header-icon-button" aria-label="Menüü">
            <img src={menu} alt="" className="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}