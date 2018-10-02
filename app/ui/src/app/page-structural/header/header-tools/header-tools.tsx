import React from 'react';

export class HeaderTools extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div className="pf-l-page__header-tools">
        <div className="pf-l-toolbar">

        {/* the bell */}
        <div className="pf-l-toolbar__group pf-u-sr-only pf-u-visible-on-lg">
          <div className="pf-l-toolbar__item">
            <button className="pf-c-button pf-m-plain" aria-label="Overflow actions">
              <i className="fas fa-bell" aria-hidden="true"></i>
            </button>
          </div>

        {/* the cogwheel */}
        <div className="pf-l-toolbar__item">
          <button className="pf-c-button pf-m-plain" aria-label="Overflow actions">
            <i className="fas fa-cog" aria-hidden="true"></i>
          </button>
        </div>

        {/* the dropdown */}
        <div className="pf-l-toolbar__group">

          <div className="pf-l-toolbar__item pf-u-hidden-on-lg pf-u-mr-0">
            <button className="pf-c-button pf-m-plain" aria-label="Overflow actions">
              <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
          </div>

          <div className="pf-l-toolbar__item pf-u-sr-only pf-u-visible-on-md">

            <div className="pf-c-dropdown pf-m-plain">
              <button className="pf-c-dropdown__toggle" id="dropdown-example-collapsed" aria-haspopup="true" aria-expanded="false">
                Citizen Integrator
                <i className="fas fa-caret-down pf-c-dropdown__toggle-icon" aria-hidden="true"></i>
              </button>
            </div>
          </div>

        </div>


        </div>

        </div>
      </div>
    );
  }
}
