import React, { Component } from 'react';
import { Header, Table, Card, Button, Image, Grid, Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageHeader from '../../../View/Header/Header';
import AdminHeader from '../../../View/Header/AdminHeader/AdminHeader';
import AdminHeaderReasponsive from '../../../View/Header/AdminHeaderResponsive/AdminHeaderResponsive';
import Loading from '../../../View/Loading/Loading';
import * as usersAction from '../../../../action/getUsersAction/getUsersAction';

class UserPage extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { allUsers, usersLoading, userPriviledge } = this.props;
    return (
      <>
        <PageHeader>
          <AdminHeader />
          <AdminHeaderReasponsive />
        </PageHeader>
        <div className="ui" id="allPage">
          <section className="ui grid container">
            <h1 className="title">All Users</h1>
            <Grid stackable>
              <Grid.Column width={4} />
              {/* {userPriviledge === 'Admin' && (
                <Grid.Column width={4}>
                  <Card className="adminPanel">
                    <h2>Admin Panel</h2>
                    <br />
                    <Form>
                      <Form.Field required>
                        <input
                          className="inputField"
                          type="text"
                          placeholder="Fullname"
                          size="mini"
                          className="productInput"
                          id="productLimit"
                          ref={fullName => (this.fullName = fullName)}
                        />
                      </Form.Field>
                      <br />
                      <Form.Field required>
                        <input
                          className="inputField"
                          type="email"
                          placeholder="Email Address"
                          size="mini"
                          className="productInput"
                          id="productLimit"
                          ref={productLimit => (this.productLimit = productLimit)}
                        />
                      </Form.Field>
                      <br />
                      <Form.Field required>
                        <input
                          className="inputField"
                          type="password"
                          placeholder="Password"
                          size="mini"
                          className="productInput"
                          id="productLimit"
                          ref={productLimit => (this.productLimit = productLimit)}
                        />
                      </Form.Field>
                      <Button type="submit" className="searchBtn">
                        Add New User
                      </Button>
                    </Form>
                  </Card>
                </Grid.Column>
              )} */}

              <Grid.Column width={12}>
                <Table celled padded stackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell singleLine>User (Name/Picture)</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>Priviledge</Table.HeaderCell>
                      <Table.HeaderCell />
                    </Table.Row>
                  </Table.Header>
                  {usersLoading ? (
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <Loading />
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ) : (
                    <Table.Body>
                      {allUsers &&
                        allUsers.map(user => {
                          return (
                            <Table.Row key={user.id}>
                              <Table.Cell singleLine>{user.username}</Table.Cell>
                              <Table.Cell textAlign="right">{user.useremail}</Table.Cell>
                              <Table.Cell>{user.userpriviledge}</Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  )}
                </Table>
              </Grid.Column>
            </Grid>
          </section>
        </div>
      </>
    );
  }
}
UserPage.propTypes = {
  getUsers: PropTypes.func.isRequired,
  userPriviledge: PropTypes.string.isRequired,
  allUsers: PropTypes.oneOfType(Array).isRequired
};

const mapStateToProps = state => ({
  userPriviledge: state.auth.userPriviledge,
  usersLoading: state.users.isLoading,
  // allProducts: state.products.products.rows,
  allUsers: state.users.users.rows
});

const mapDispatchToProps = {
  getUsers: usersAction.getUsersAction
  // getCategories: CategoriesAction.getCategoriesAction,
  // addToStoreCart: cartActions.addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
