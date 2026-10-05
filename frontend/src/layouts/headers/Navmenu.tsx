
import { Link } from "react-router-dom";
import menu_data from "../../data/menu-data";


export default function Navmenu() {
  return (
    <>
      <ul className="d-none d-xl-block">
        {menu_data.map((item) => (
          <li key={item.id} className={`${item.mega_menu && 'has-dropdown active menu-thumb'} ${item.has_dropdown && 'has-dropdown'}`}>
            <Link to={item?.link ? item?.link : '#'}>
              {item.title} {' '}
              {item.mega_menu && <i className="fas fa-angle-down"></i>}
              {item.has_dropdown && <i className="fas fa-angle-down"></i>}
            </Link>
            {item.mega_menu &&
              <ul className="submenu has-homemenu">
                <li>
                  <div className="homemenu-items">
                    {item.sub_menus?.map((sub_item) => (
                       <div className="homemenu" key={sub_item.id}>
                      <Link to={sub_item?.link ? sub_item?.link : '#'} className="homemenu-thumb d-center px-2">
                        <img src={sub_item?.demo ? sub_item?.demo : ''}  alt="img" />
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
              <ul className="submenu">
                {item.sub_menus && item.sub_menus.map((sub_item) => (
                  <li key={sub_item.id}>
                    <Link to={sub_item?.link ? sub_item?.link : '#'}>{sub_item.title}</Link>
                  </li>
                ))}
                </ul>
            }
          </li>
        ))}
      </ul>
    </>
  )
}
