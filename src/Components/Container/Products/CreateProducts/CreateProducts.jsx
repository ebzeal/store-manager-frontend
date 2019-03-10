import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AddProductForm from '../../../View/Products/ProductForm/AddProductForm';

class CreateProduct extends Component {
  render() {
    const { triggerEl, userPriviledge, formType = 'Add' } = this.props;
    return (
      <Modal trigger={triggerEl} closeIcon id="ModalPad">
        <Modal.Content>
          <AddProductForm />
        </Modal.Content>
      </Modal>
    );
  }
}
CreateProduct.propTypes = {
  triggerEl: PropTypes.oneOfType([PropTypes.node])
};

CreateProduct.defaultProps = {
  triggerEl: null
};

const mapStateToProps = state => ({
  theProduct: state.products.products.rows,
  theCategory: state.categories.categories.rows
});

export default connect(mapStateToProps)(CreateProduct);
