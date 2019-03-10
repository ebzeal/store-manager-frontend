import React, { Component } from 'react';
import Axios from 'axios';
import { Form, Grid, Input, Button, Dropdown, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as createAction from '../../../../action/createProductAction/createProductAction';

class AddProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFieldsData: {
        categories_id: 0,
        productName: '',
        productDetails: '',
        productSpec: '',
        productPrice: '0.00',
        productQuantity: 0,
        productLimit: 0
      }
    };
  }

  submitForm = async evt => {
    // const file = evt.target.files[0];
    evt.preventDefault();
    // console.log('TCL: ProductForm -> file', file);
    const { createProduct, history } = this.props;

    // console.log('TCL: ProductForm -> upload', upload.data.secure_url);
    const { inputFieldsData } = this.state;
    createProduct(inputFieldsData);
  };

  // handleImageChange = async event => {
  //   // const reader = new FileReader();
  //   const file = event.target.files[0];
  //   console.log('TCL: ProductForm -> file', file);

  //   // reader.readAsDataURL(file);
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('upload_preset', 'vdpuvsdu');
  //   const upload = await Axios({
  //     method: 'post',
  //     url: 'https://api.cloudinary.com/v1_1/ebzeal/image/upload',
  //     data: formData,
  //     config: { headers: { 'Content-Type': 'multipart/form-data' } }
  //   });

  //   console.log('TCL: ProductForm -> upload', upload.data.secure_url);
  // };

  editForm = evt => {
    evt.preventDefault();
  };

  handleFieldChange(evt) {
    evt.preventDefault();
    const { inputFieldsData } = this.state;
    inputFieldsData[evt.target.id] = evt.target.value.trim();
    this.setState({
      inputFieldsData
    });
  }

  render() {
    const {
      size = 'medium',
      categories,
      file,
      addProduct: { productErrors, isLoading }
    } = this.props;
    return (
      <>
        <h2>Create New Product</h2>
        <br />

        <Form id="signup-form" onSubmit={this.handleSubmit}>
          {(() => {
            return productErrors && productErrors.length ? (
              <Message negative list={Object.values(productErrors[0])} />
            ) : null;
          })()}
          <Form.Field>
            <input type="text" id="fullName" placeholder="Name" onChange={this.handleFieldChange} />
          </Form.Field>
          <Form.Field>
            <input type="text" id="userName" placeholder="Username" onChange={this.handleFieldChange} />
          </Form.Field>
          <Form.Field>
            <input type="email" id="email" placeholder="Email" onChange={this.handleFieldChange} />
          </Form.Field>
          <Form.Field>
            <input type="password" id="password" placeholder="Password" onChange={this.handleFieldChange} />
          </Form.Field>
          <Form.Field>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={this.handleFieldChange}
            />
          </Form.Field>
          <Button loading={isLoading} primary fluid content="Sign Up" />
        </Form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories.rows,
  addProduct: state.addProduct
});

const mapDispatchToProps = {
  createProduct: createAction.createProductAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductForm);
