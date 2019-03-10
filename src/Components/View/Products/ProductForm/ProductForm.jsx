import React, { Component } from 'react';
import Axios from 'axios';
import { Form, Grid, Input, Button, Dropdown, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as createAction from '../../../../action/createProductAction/createProductAction';

class ProductForm extends Component {
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
    // // const { file } = this;
    // const categories_id = 2;
    // const productName = 'Catthy Snacks';
    // const productDetails = this.productDetails.value;
    // const productSpec = this.productSpec.value;
    // const productPrice = '200.02';
    // const productQuantity = this.productQuantity.value;
    // const productLimit = this.productLimit.value;

    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('upload_preset', 'vdpuvsdu');
    // const upload = await Axios({
    //   method: 'post',
    //   url: 'https://api.cloudinary.com/v1_1/ebzeal/image/upload',
    //   data: formData,
    //   config: { headers: { 'Content-Type': 'multipart/form-data' } }
    // });

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
      formType,
      categories,
      submitForm,
      addProduct: { productErrors, isLoading }
    } = this.props;
    return (
      <>
        <h2>{formType === 'Edit' ? 'Edit Product' : 'Create New Product'}</h2>
        <br />
        <Form onSubmit={formType === 'Edit' ? this.editForm : this.submitForm}>
          {(() => {
            return productErrors && productErrors.length ? (
              <Message negative list={Object.values(productErrors[0])} />
            ) : null;
          })()}
          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Input
                  placeholder="Product name"
                  // value={name}
                  size={size}
                  className="productInput"
                  id="productName"
                  // ref={productName => (this.productName = productName)}
                  onChange={this.handleFieldChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Details</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Input
                  placeholder="Product Details"
                  // value={details}
                  size={size}
                  className="productInput"
                  id="productDetails"
                  ref={productDetails => (this.productDetails = productDetails)}
                  onChange={this.handleFieldChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Image</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <input
                  data-testid="image"
                  onChange={this.handleImageChange}
                  id="img-upload"
                  type="file"
                  accept="image/*"
                  role="button"
                  className="productInput"
                  ref={newImage => (this.imgUpload = image)}
                  onChange={this.handleFieldChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Category</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Dropdown
                  placeholder="Product Category"
                  id="categories_id"
                  // value={category}
                  className="productInput"
                  search
                  selection
                  size={size}
                  options={categories.map(theCatg => {
                    return { key: theCatg.id, value: theCatg.categoryname, text: theCatg.categoryname };
                  })}
                  // ref={categories_id => (this.categories_id = categories_id)}
                  onChange={this.handleFieldChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Price</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Input
                  placeholder="Product Price"
                  // value={price}
                  size={size}
                  className="productInput"
                  id="productPrice"
                  ref={productPrice => (this.productPrice = productPrice)}
                  onChange={this.handleFieldChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Field>

          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Specifications</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Input
                  placeholder="Product Specifications"
                  // value={spec}
                  size={size}
                  className="productInput"
                  id="productSpec"
                  ref={productSpec => (this.productSpec = productSpec)}
                  onChange={this.handleFieldChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Field>

          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Quantity</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Input
                  placeholder="Product Quantity"
                  // value={qty}
                  size={size}
                  className="productInput"
                  id="productQuantity"
                  ref={productQuantity => (this.productQuantity = productQuantity)}
                  onChange={this.handleFieldChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Field>

          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Quantity Limit</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Input
                  placeholder="Product Quantity Limit"
                  // value={limit}
                  size={size}
                  className="productInput"
                  id="productLimit"
                  ref={productLimit => (this.productLimit = productLimit)}
                  onChange={this.handleFieldChange}
                />
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field>
            <Button type="submit" onClick={formType === 'Edit' ? this.editForm : this.submitForm}>
              {formType === 'Edit' ? 'Update Product' : 'Add New Product'}
            </Button>
          </Form.Field>
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
)(ProductForm);
