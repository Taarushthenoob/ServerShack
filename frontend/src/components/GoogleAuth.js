import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, sendUserDetails } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '45363184738-bgh11uqo9esrukhnh2s7qhe7n5eq9b3u.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const _id = this.auth.currentUser.get().getId();
      const email = this.auth.currentUser.get().getEmail;
      const fullname = this.auth.currentUser.get().getFamilyName;
      const image = this.auth.currentUser.get().getImageUrl;
      this.props.signIn(_id);
      this.props.sendUserDetails(_id, email, fullname, image);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    _id: state.auth._id,
    email: state.auth.email,
    fullname: state.auth.fullname,
    image: state.auth.image,
  };
};

export default connect(mapStateToProps, { signIn, signOut, sendUserDetails })(
  GoogleAuth
);
