import React from 'react';

import UserForm from './UserForm';

class NonProfitOrg extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <h2 className="header">Add Organization details</h2>
        <UserForm
          onSubmit={this.onSubmit}
          label="Enter Website link"
          upi="Enter UPI ID"
        />
      </div>
    );
  }
}

export default NonProfitOrg;
