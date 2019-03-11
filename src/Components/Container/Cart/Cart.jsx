import React, { Component } from 'react';
import { Header, Table, Card, Button, Image, Grid, Form, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageHeader from '../../View/Header/Header';
import AdminHeader from '../../View/Header/AdminHeader/AdminHeader';
import AdminHeaderReasponsive from '../../View/Header/AdminHeaderResponsive/AdminHeaderResponsive';

class Cart extends Component {
  render() {
    const { allProducts, productsLoading, userPriviledge, allCategories } = this.props;
    return (
      <>
        <PageHeader>
          <AdminHeader />
          <AdminHeaderReasponsive />
        </PageHeader>
        <div className="ui" id="allPage">
          <section className="ui grid container">
            <h1 className="title">All Products in store</h1>
            <Grid stackable>
              <Grid.Column width={12}>
                <Table celled padded stackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell singleLine>Product (Name/Picture)</Table.HeaderCell>
                      <Table.HeaderCell>Category</Table.HeaderCell>
                      <Table.HeaderCell>Specification</Table.HeaderCell>
                      <Table.HeaderCell>Quantity</Table.HeaderCell>
                      <Table.HeaderCell>Quantity Limit</Table.HeaderCell>
                      <Table.HeaderCell>Price (N) </Table.HeaderCell>
                      <Table.HeaderCell />
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell singleLine />
                      <Table.Cell />
                      <Table.Cell textAlign="right" className="alertText" />
                      <Table.Cell textAlign="right" />
                      <Table.Cell textAlign="right" />
                      <Table.Cell textAlign="right" />
                      <Table.Cell />
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid>
          </section>
        </div>
      </>
    );
  }
}

export default Cart;
