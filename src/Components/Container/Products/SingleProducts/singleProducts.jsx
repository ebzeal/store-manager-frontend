import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ProductForm from '../../../View/Products/ProductForm/ProductForm';
import ViewProduct from '../../../View/Products/ViewProduct/ViewProduct';
import * as deleteProductAction from '../../../../action/deleteProductAction/deleteProductAction';

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      modalOpen: false
    };
  }

  componentWillReceiveProps() {
    const { theProduct, productId } = this.props;

    const getProduct = () => {
      const theProd = theProduct.filter(product => {
        return product.id === productId;
      });
      return theProd[0].id;
    };

    getProduct();
  }

  toggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  deleteThisProduct = () => {
    if (confirm('Are you sure you want to delete this product?')) {
      const { productId, history, deleteProduct } = this.props;

      deleteProduct(productId, history);
      // this.closeModal();
    }
  };

  render() {
    const {
      triggerEl,
      productId,
      category,
      image,
      price,
      qty,
      limit,
      details,
      spec,
      name,
      userPriviledge,
      size = 'medium',
      formType = 'Edit'
    } = this.props;

    const { editing } = this.state;
    return (
      <Modal trigger={triggerEl} closeIcon id="ModalPad">
        <Modal.Content>
          {editing ? (
            <ProductForm
              productId={productId}
              category={category}
              image={image}
              price={price}
              qty={qty}
              limit={limit}
              details={details}
              spec={spec}
              name={name}
              userPriviledge={userPriviledge}
              size={size}
              formType={formType}
            />
          ) : (
            <ViewProduct
              productId={productId}
              category={category}
              image={image}
              price={price}
              qty={qty}
              limit={limit}
              details={details}
              spec={spec}
              name={name}
              userPriviledge={userPriviledge}
              size="medium"
            />
          )}
        </Modal.Content>
        {userPriviledge === 'Admin' ? (
          <Modal.Actions>
            <Button color="red" onClick={this.deleteThisProduct}>
              <Icon name="remove" />
              Delete
            </Button>
            <Button color="green" onClick={this.toggleEdit}>
              <Icon name="checkmark" />
              {editing ? 'View' : 'Edit'}
            </Button>
          </Modal.Actions>
        ) : (
          ''
        )}
      </Modal>
    );
  }
}
SingleProduct.propTypes = {
  triggerEl: PropTypes.oneOfType([PropTypes.node]),
  productId: PropTypes.number.isRequired,
  theProduct: PropTypes.oneOfType([PropTypes.array]).isRequired,
  size: PropTypes.string
};
SingleProduct.defaultProps = {
  size: ''
};

SingleProduct.defaultProps = {
  triggerEl: null
};

const mapStateToProps = state => ({
  theProduct: state.products.products.rows,
  theCategory: state.categories.categories.rows
});

const mapDispatchToProps = {
  deleteProduct: deleteProductAction.deleteProductAction
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleProduct)
);
