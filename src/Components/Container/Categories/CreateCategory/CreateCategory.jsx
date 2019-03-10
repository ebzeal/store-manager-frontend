import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AddCategoryForm from '../../../View/Categories/CategoriesForm/AddCategoryForm';

class CreateCategory extends Component {
  render() {
    const { triggerEl, userPriviledge, formType = 'Add' } = this.props;
    return (
      <Modal trigger={triggerEl} closeIcon id="ModalPad">
        <Modal.Content>
          <AddCategoryForm />
        </Modal.Content>
      </Modal>
    );
  }
}
CreateCategory.propTypes = {
  triggerEl: PropTypes.oneOfType([PropTypes.node])
};

CreateCategory.defaultProps = {
  triggerEl: null
};

const mapStateToProps = state => ({
  theProduct: state.products.products.rows,
  theCategory: state.categories.categories.rows
});

export default connect(mapStateToProps)(CreateCategory);
