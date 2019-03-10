import React, { Component } from 'react';
import { Table, Card, Button, Icon, Grid, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageHeader from '../../../View/Header/Header';
import AdminHeader from '../../../View/Header/AdminHeader/AdminHeader';
import * as ProductsAction from '../../../../action/getProductsAction/getProductsAction';
import AdminHeaderReasponsive from '../../../View/Header/AdminHeaderResponsive/AdminHeaderResponsive';
import * as CategoriesAction from '../../../../action/getCategoriesAction/getCategoriesAction';
import Loading from '../../../View/Loading/Loading';
import CreateProduct from '../../Products/CreateProducts/CreateProducts';
import CreateCategory from '../CreateCategory/CreateCategory';

class CategoriesPage extends Component {
  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  render() {
    const { categoriesLoading, userPriviledge, allCategories } = this.props;
    return (
      <>
        <PageHeader>
          <AdminHeader />
          <AdminHeaderReasponsive />
        </PageHeader>
        <div className="ui" id="allPage">
          <section className="ui grid container">
            <h1 className="title">All Products Categories</h1>
            <Grid stackable>
              {userPriviledge === 'Admin' && (
                <Grid.Column width={4}>
                  <Card className="adminPanel">
                    <h2>Admin Panel</h2>

                    <CreateProduct triggerEl={<Button className="searchBtn">Add New Product</Button>} />

                    <CreateCategory triggerEl={<Button className="searchBtn">Add New Category</Button>} />
                    <Form>
                      <Form.Field>
                        <label>Search</label>
                        <input placeholder="Search Products" />
                      </Form.Field>

                      <Button type="submit">Search</Button>
                    </Form>
                  </Card>
                </Grid.Column>
              )}

              <Grid.Column width={12}>
                <Table celled padded stackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell singleLine>Category Name</Table.HeaderCell>
                      <Table.HeaderCell>Category Details</Table.HeaderCell>
                      <Table.HeaderCell />
                    </Table.Row>
                  </Table.Header>
                  {categoriesLoading ? (
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <Loading />
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ) : (
                    <Table.Body>
                      {allCategories.map(category => {
                        return (
                          <Table.Row key={category.id}>
                            <Table.Cell>{category.categoryname}</Table.Cell>
                            <Table.Cell textAlign="right">{category.categorydetails}</Table.Cell>
                            <Table.Cell textAlign="right">
                              <Icon name="edit" />
                              <Icon color="red" name="delete" />
                            </Table.Cell>
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

CategoriesPage.propTypes = {
  userPriviledge: PropTypes.string.isRequired,
  categoriesLoading: PropTypes.bool.isRequired,
  allCategories: PropTypes.oneOfType(Array),
  getCategories: PropTypes.func.isRequired
};
CategoriesPage.defaultProps = {
  allCategories: []
};

const mapStateToProps = state => ({
  userPriviledge: state.auth.userPriviledge,
  categoriesLoading: state.categories.isLoading,
  allCategories: state.categories.categories.rows
});

const mapDispatchToProps = {
  getProducts: ProductsAction.getProductsAction,
  getCategories: CategoriesAction.getCategoriesAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPage);
