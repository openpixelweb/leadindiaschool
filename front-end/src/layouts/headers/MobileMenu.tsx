
import { Link } from "react-router-dom";
import { useState } from "react";
import menu_data from "../../data/menu-data";


export default function MobileMenu() {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };



  return (
    <>
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span></span>
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            {menu_data.map((item) => (
              <li key={item.id} className={`${item.mega_menu && 'has-dropdown active menu-thumb'} ${item.has_dropdown && 'has-dropdown'}`}>
                <Link to={item?.link ? item?.link : '#'}>
                  {item.title}
                </Link>
                {item.mega_menu &&
                  <ul className="submenu has-homemenu" style={{ display: navTitle === item.title ? "block" : "none", }}>
                    <li>
                      <div className="homemenu-items">
                        {item.sub_menus?.map((sub_item) => (
                          <div className="homemenu" key={sub_item.id}>
                            <Link to={sub_item?.link ? sub_item?.link : '#'} className="homemenu-thumb d-center px-2">
                              <img src={sub_item?.demo ? sub_item?.demo : ''} alt="img" />
                              <span className="demo-button d-center py-2 px-3 p1-bg">
                                <span className="white">{sub_item?.title}</span>
                              </span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </li>
                  </ul>
                }
                {item.has_dropdown &&
                  <ul className="submenu" style={{ display: navTitle === item.title ? "block" : "none", }}>
                    {item.sub_menus?.map((sub_item) => (
                      <li key={sub_item.id}>
                        <Link to={sub_item?.link ? sub_item?.link : '#'}>
                          {sub_item?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                }
                {item.mega_menu && (
                  <a className={`mean-expand ${navTitle === item.title ? "mean-clicked" : ""}`} onClick={() => openMobileMenu(item.title)} style={{ cursor: "pointer" }}>
                    <i className="far fa-plus"></i>
                  </a>
                )}
                {item.has_dropdown && (
                  <a className={`mean-expand ${navTitle === item.title ? "mean-clicked" : ""}`} onClick={() => openMobileMenu(item.title)} style={{ cursor: "pointer" }}>
                    <i className="far fa-plus"></i>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
