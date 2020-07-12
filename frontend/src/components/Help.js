import React from 'react';
import { connect } from 'react-redux';

import { getAllOrgs } from '../actions';
import './Help.css';

class Help extends React.Component {
  componentDidMount() {
    this.props.getAllOrgs();
  }

  renderHelpers = () => {
    return this.props.orgs.map((org, index) => {
      if (!org) {
        return null;
      }
      return (
        <div className="item" key={org[index]._id}>
          <div className="image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35 35"
              style={{ width: 150, height: 150 }}
            >
              <path d={org[index].d} />
            </svg>
          </div>
          <div className="content">
            <span className="header">{org[index].fullname}</span>
            <div className="meta">
              <a href={org[index].website} rel="noopener noreferrer">
                {org[index].website}
              </a>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <h1>Provide Help</h1>
        <div className="ui items">{this.renderHelpers()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, orgs: Object.values(state.orgs) };
};

export default connect(mapStateToProps, { getAllOrgs })(Help);
