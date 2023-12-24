import React from "react";
import Link from "../../utils/ActiveLink";

const header = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <header className="header-area fixed-top border-bottom">
        <div className="nav-area">
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <Link href="/">
                    <a onClick={toggleNavbar} className="navbar-brand">
                      {/* <img src="/img/logo.png" alt="logo" width="280px"/>  */}
                      <h3 style={{ fontSize: "25px" }}>Logo</h3>
                    </a>
                  </Link>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav" style={{ marginRight: "auto" }}>
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            User Name 
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="#" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Account <i className="bx bx-chevron-down"></i>

                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/about" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Overview
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/about" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Invoices
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="#" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Booking <i className="bx bx-chevron-down"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/about" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Make a Booking
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/about" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                View Future Bookings
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/about" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                View Past Bookings
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/badmintonfeatures"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Membership
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/bookfeatures" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            About
                          </a>
                        </Link>
                      </li>
                    </ul>

                    <div className="others-option">
                      <div className="subscribe">
                        <Link href="/sign-in">
                          <ul
                            className="navbar-nav"
                            style={{ marginRight: "auto" }}
                          >
                            <li className="nav-item">
                              <Link href="/" activeClassName="active">
                                <a onClick={toggleNavbar} className="nav-link">
                                  <span>
                                    <i className="bx bx-log-out" style={{fontSize:'18px', fontWeight:'600', marginRight:'10px'}}></i>
                                  </span>
                                   Log Out
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default header;
