import React from 'react';
import { Link } from 'react-router-dom';

export class Sidebar extends React.Component {


  render() {
    return (
      <aside className="pf-l-page__sidebar">
        <nav className="pf-c-nav" id="primary-nav" aria-label="Primary Nav Default Example">
          <ul className="pf-c-nav__list">
            <li className="pf-c-nav__item">
              <a href="#" className="pf-c-nav__link pf-m-current" aria-current="page">
                Home
                <Link to="/dashboard">Dashboard</Link>
              </a>
            </li>
            <li className="pf-c-nav__item">
              <a href="#" className="pf-c-nav__link">
                Integrations
                {/* <Link to="/dashboard">Dashboard</Link> */}
              </a>
            </li>
            <li className="pf-c-nav__item">
              <a href="#" className="pf-c-nav__link">
                Connections
              </a>
            </li>
            <li className="pf-c-nav__item">
              <a href="#" className="pf-c-nav__link">
                Customizations
              </a>
            </li>
            <li className="pf-c-nav__item">
              <a href="#" className="pf-c-nav__link">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}


// export function Brand() {
//   return (
//     <div className="pf-l-page__header-brand">
//       <div className="pf-l-page__header-brand-toggle">

//         <button className="pf-c-button pf-m-plain" id="nav-toggle" aria-label="Toggle primary navigation">
//           <i className="fas fa-bars" aria-hidden="true"></i>
//         </button>


//       </div>
//     </div>
//   );
// }






