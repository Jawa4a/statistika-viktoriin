export default function TopHeader() {
    return (
      <div className="top-header">
        <div className="top-header__inner">
          <div className="top-header__brand">Statistikaamet</div>
  
          <div className="top-header__right">
            <button type="button" className="top-header__lang top-header__lang--active">
              EST
            </button>
  
            <span className="top-header__divider" />
  
            <button type="button" className="top-header__lang top-header__lang--inactive">
              ENG
            </button>
          </div>
        </div>
      </div>
    );
  }