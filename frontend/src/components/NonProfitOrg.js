import React from 'react';
import { connect } from 'react-redux';

import history from '../history';
import { nonProfitOrg } from '../actions';
import UserForm from './UserForm';

class NonProfitOrg extends React.Component {
  onSubmit = (formValues) => {
    this.props.nonProfitOrg(formValues);
  };

  renderUserForm() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ marginTop: '2rem' }}>
          <h2 className="header">Add Organization details</h2>
          <UserForm
            onSubmit={this.onSubmit}
            label1="Enter Website link"
            label2="Enter UPI ID"
          />
        </div>
      );
    } else {
      history.push('/');
    }
  }

  render() {
    return <React.Fragment>{this.renderUserForm()}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { nonProfitOrg })(NonProfitOrg);
