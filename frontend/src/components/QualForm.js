import React from 'react';
import { connect } from 'react-redux';

import history from '../history';
import { sendQualDetails } from '../actions';
import UserForm from './UserForm';

class QualForm extends React.Component {
  onSubmit = (formValues) => {
    this.props.sendQualDetails(formValues);
  };

  renderUserForm() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ marginTop: '2rem' }}>
          <h2 className="header">Add Organization details</h2>
          <UserForm
            onSubmit={this.onSubmit}
            label1="Enter Qualifications"
            label2="Enter Government issued ID"
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

export default connect(mapStateToProps, { sendQualDetails })(QualForm);
