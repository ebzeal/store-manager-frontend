import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as createCategoryAction from '../../../../action/createCategoryAction/createCategoryAction';

class AddCategoryForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const { createCategory } = this.props;
    const categoryDetails = this.categoryDetails.value;
    const categoryName = this.categoryName.value;

    // const { inputFieldsData } = this.state;
    createCategory({ categoryName, categoryDetails });
  };

  render() {
    const {
      addcategory: { categoryErrors, isLoading }
    } = this.props;
    return (
      <>
        <h2>Create New Category</h2>
        <br />

        <Form id="signup-form" onSubmit={this.handleSubmit}>
          {(() => {
            return categoryErrors && categoryErrors.length ? (
              <Message negative list={Object.values(categoryErrors[0])} />
            ) : null;
          })()}
          <Form.Field>
            <input
              type="text"
              id="categoryName"
              placeholder="Category Name"
              isRequired
              onChange={this.handleFieldChange}
              ref={categoryName => (this.categoryName = categoryName)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              id="categoryDetails"
              placeholder="Category Details"
              onChange={this.handleFieldChange}
              ref={categoryDetails => (this.categoryDetails = categoryDetails)}
            />
          </Form.Field>
          <Button default loading={isLoading} fluid content="Add Category" />
        </Form>
      </>
    );
  }
}

AddCategoryForm.propTypes = {
  createCategory: PropTypes.func.isRequired,
  addcategory: PropTypes.oneOfType(PropTypes.object)
};

AddCategoryForm.defaultProps = {
  addcategory: {}
};

const mapStateToProps = state => ({
  categories: state.categories.categories.rows,
  addcategory: state.addCategory
});

const mapDispatchToProps = {
  createCategory: createCategoryAction.createCategoryAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategoryForm);
