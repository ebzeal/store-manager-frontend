import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlaceholderFluid from '../Placeholder/Placeholder';
import * as ProductsAction from '../../../action/getProductsAction/getProductsAction';
import * as CategoriesAction from '../../../action/getCategoriesAction/getCategoriesAction';
import * as UsersAction from '../../../action/getUsersAction/getUsersAction';
import * as SalesAction from '../../../action/getSalesAction/getSalesAction';

class DashboardRight extends Component {
  componentDidMount() {
    const { getProducts, getCategories, getUsers, getSales } = this.props;
    getProducts();
    getCategories();
    getUsers();
    getSales();
  }

  render() {
    const {
      userPriviledge,
      allProducts,
      allCategories,
      allUsers,
      allSales,
      productsLoading,
      categoriesLoading,
      usersLoading,
      salesLoading
    } = this.props;
    return (
      <Card.Group stackable>
        <Card>
          {productsLoading ? (
            <PlaceholderFluid />
          ) : (
            <Card.Content>
              <Card.Header>Products</Card.Header>
              <Card.Meta>
                <i className="fas fa-gift fa-2x" />
              </Card.Meta>
              <Card.Description>
                <h3>{allProducts.length}</h3>
                <Link to="/products">
                  <Button>View All</Button>
                </Link>
              </Card.Description>
            </Card.Content>
          )}
        </Card>

        <Card>
          {categoriesLoading ? (
            <PlaceholderFluid />
          ) : (
            <Card.Content>
              <Card.Header>Categories</Card.Header>
              <Card.Meta>
                <i className="fas fa-layer-group fa-2x" />
              </Card.Meta>
              <Card.Description>
                <h3>{allCategories.length}</h3>
                <Link to="/categories">
                  <Button>View All</Button>
                </Link>
              </Card.Description>
            </Card.Content>
          )}
        </Card>
        <Card>
          {salesLoading ? (
            <PlaceholderFluid />
          ) : (
            <Card.Content>
              <Card.Header>Sales</Card.Header>
              <Card.Meta>
                <i className="fas fa-calendar-check fa-2x" />
              </Card.Meta>
              <Card.Description>
                <h3>{allSales.length}</h3>
                <Link to="/sales">
                  <Button>View All</Button>
                </Link>
              </Card.Description>
            </Card.Content>
          )}
        </Card>
        {userPriviledge === 'Admin' ? (
          <>
            <Card>
              {usersLoading ? (
                <PlaceholderFluid />
              ) : (
                <Card.Content>
                  <Card.Header>Attendants</Card.Header>
                  <Card.Meta>
                    <i className="fas fa-users fa-2x" />
                  </Card.Meta>
                  <Card.Description>
                    <h3>{allUsers.length}</h3>
                    <Link to="/users">
                      <Button>View All</Button>
                    </Link>
                  </Card.Description>
                </Card.Content>
              )}
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Incidents</Card.Header>
                <Card.Meta>
                  <i className="fas fa-microphone fa-2x" />
                </Card.Meta>
                <Card.Description>
                  <h3>Reported Incidents</h3>
                  <Button>View All</Button>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Restock</Card.Header>
                <Card.Meta>
                  <i className="fas fa-clipboard-list fa-2x" />
                </Card.Meta>
                <Card.Description>
                  <h3>Products for restock</h3>
                  <Button>View All</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </>
        ) : (
          ''
        )}
      </Card.Group>
    );
  }
}

DashboardRight.propTypes = {
  userPriviledge: PropTypes.string.isRequired,
  productsLoading: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired,
  categoriesLoading: PropTypes.bool.isRequired,
  getCategories: PropTypes.func.isRequired,
  usersLoading: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired,
  salesLoading: PropTypes.bool.isRequired,
  getSales: PropTypes.func.isRequired,
  allProducts: PropTypes.oneOfType(Array),
  allCategories: PropTypes.oneOfType(Array),
  allUsers: PropTypes.oneOfType(Array),
  allSales: PropTypes.oneOfType(Array)
};
DashboardRight.defaultProps = {
  allProducts: [],
  allCategories: [],
  allUsers: [],
  allSales: []
};
const mapStateToProps = state => ({
  userPriviledge: state.auth.userPriviledge,
  productsLoading: state.products.isLoading,
  allProducts: state.products.products.rows,
  categoriesLoading: state.categories.isLoading,
  allCategories: state.categories.categories.rows,
  usersLoading: state.users.isLoading,
  allUsers: state.users.users.rows,
  salesLoading: state.sales.isLoading,
  allSales: state.sales.sales.rows
});
const mapDispatchToProps = {
  getProducts: ProductsAction.getProductsAction,
  getCategories: CategoriesAction.getCategoriesAction,
  getUsers: UsersAction.getUsersAction,
  getSales: SalesAction.getSalesAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardRight);
