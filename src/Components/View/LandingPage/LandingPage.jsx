import React, { Component } from 'react';
import { Button, Divider, Form, Grid, Segment, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as authAction from '../../../action/loginAction/loginAction';

class LandingPage extends Component {
  submitForm = evt => {
    evt.preventDefault();

    const { loginAction, history } = this.props;

    const password = this.password.value;
    const userEmail = this.userEmail.value;

    loginAction({ userEmail, password, history });
  };

  render() {
    const {
      auth: { loginErrors, isLoading }
    } = this.props;

    return (
      <Segment placeholder id="landingPageContent">
        {/* {loginErrors && loginErrors.data && notifications(showLoginErrors)} */}
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column id="homeLogo">
            <img
              className="ui fluid image"
              data-test="logoImg"
              src="https://res.cloudinary.com/ebzeal/image/upload/v1551350124/Ebzeal%20Stores/logo.png"
              alt="Logo"
            />
          </Grid.Column>

          <Grid.Column verticalAlign="middle" id="homeForm">
            <div id="homeFormDiv">
              <Header as="h2" color="black" textAlign="center">
                Login to your account
              </Header>
              <Form onSubmit={this.submitForm}>
                {(() => {
                  return loginErrors && loginErrors.length ? (
                    <Message negative list={Object.values(loginErrors[0])} />
                  ) : null;
                })()}
                <Form.Field>
                  <label>UserEmail</label>
                  <input
                    placeholder="Username"
                    name="userEmail"
                    required
                    ref={userEmail => (this.userEmail = userEmail)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    ref={password => (this.password = password)}
                  />
                </Form.Field>
                {isLoading ? <Button disabled>Verifying</Button> : <Button type="submit">Submit</Button>}
              </Form>
              <Message size="tiny">Forgot your login details, please contact admin?</Message>
            </div>
          </Grid.Column>
        </Grid>

        <Divider vertical />
      </Segment>
    );
  }
}
LandingPage.propTypes = {
  loginAction: PropTypes.func.isRequired,
  auth: PropTypes.oneOfType([PropTypes.object]).isRequired,
  notifications: PropTypes.func,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired
};

LandingPage.defaultProps = {
  notifications: () => {}
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  loginAction: authAction.loginAction
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingPage)
);
