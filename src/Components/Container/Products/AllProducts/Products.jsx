import React, { Component } from 'react';
import { Header, Table, Rating, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageHeader from '../../../View/Header/Header';
import AdminHeader from '../../../View/Header/AdminHeader/AdminHeader';
import * as ProductsAction from '../../../../action/getProductsAction/getProductsAction';
import AdminHeaderReasponsive from '../../../View/Header/AdminHeaderResponsive/AdminHeaderResponsive';
import * as CategoriesAction from '../../../../action/getCategoriesAction/getCategoriesAction';
import SingleProduct from '../SingleProducts/singleProducts';
import Loading from '../../../View/Loading/Loading';

class ProductsPage extends Component {
  componentDidMount() {
    const { getProducts, getCategories } = this.props;
    getProducts();
    getCategories();
  }

  categoryName = (allCategories, product) => {
    const theCatg = allCategories.filter(theCategory => {
      return theCategory.id === product.categories_id;
    });

    return theCatg[0] && theCatg[0].categoryname;
  };

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
              <Table celled padded>
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

              {productsLoading ? (<Table.Body>
                <Table.Row>
                <Table.Cell>
                <Loading />
                </Table.Cell>
                </Table.Row>
                </Table.Body>) : (
              <Table.Body>
                {allProducts.map(product => {
                  return (
                    <Table.Row key={product.id}>
                        <SingleProduct
                          triggerEl={
                            (
                              <Table.Cell id="ClickableCell">
                              <Header as="h4" image>
                                <Image src="/images/avatar/small/lena.png" rounded size="mini" />
                                <Header.Content>{product.productname}</Header.Content>
                              </Header>
                              </Table.Cell>
                            )
                         } 
                         productId = {product.id}
                         category = {this.categoryName(allCategories,product)} 
                         image={product.image} 
                         details={product.productdetails}
                         name = {product.productname}
                         spec = {product.productspec}
                         qty = {product.productquantity}
                         limit = {product.productlimit}
                         price = {product.productprice}
                         userPriviledge = {userPriviledge}
                        />
                          
                      
                    <Table.Cell singleLine> 
                    {this.categoryName(allCategories,product)}
                        </Table.Cell>
                      <Table.Cell>{product.productdetails}</Table.Cell>
                      {product.productquantity < product.productlimit ? (
                        <Table.Cell textAlign="right" className="alertText">
                          {product.productquantity}
                        </Table.Cell>
                      ) : (
                        <Table.Cell textAlign="right">{product.productquantity}</Table.Cell>
                      )}
                      <Table.Cell textAlign="right">{product.productlimit}</Table.Cell>
                      <Table.Cell textAlign="right">{product.productprice}</Table.Cell>
                      <Table.Cell>
                        <Button mini>Add to cart</Button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            
     
            ) }
            </Table>
            </section>
        </div>
      </>
    );
  }
}

ProductsPage.propTypes = {
  userPriviledge: PropTypes.string.isRequired,
  productsLoading: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired,
  allProducts: PropTypes.oneOfType(Array),
  allCategories: PropTypes.oneOfType(Array),
  getCategories: PropTypes.func.isRequired
};
ProductsPage.defaultProps = {
  allProducts: [],
  allCategories: []
};

const mapStateToProps = state => ({
  userPriviledge: state.auth.userPriviledge,
  productsLoading: state.products.isLoading,
  allProducts: state.products.products.rows,
  allCategories: state.categories.categories.rows
});

const mapDispatchToProps = {
  getProducts: ProductsAction.getProductsAction,
  getCategories: CategoriesAction.getCategoriesAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
