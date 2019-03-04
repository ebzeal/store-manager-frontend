import React, { Component } from 'react';
import { Button, Divider, Form, Grid, Segment, Header, Message } from 'semantic-ui-react';

class DividerExampleVerticalForm extends Component {
  submitForm = e => {
    e.preventDefault();

    // const { completeLoginLocal, history } = this.props;

    const userPassword = this.password.value;
    const userEmailOrUsername = this.userEmailOrUsername.value;

    completeLoginLocal({ userEmailOrUsername, userPassword }, history);
  };

  render() {
    return (
      <Segment placeholder id="landingPageContent">
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
                <Form.Field>
                  <label>Username</label>
                  <input placeholder="Username" name="userName" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input type="password" placeholder="Password" name="password" />
                </Form.Field>
                <Button type="submit">Submit</Button>
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

export default DividerExampleVerticalForm;
