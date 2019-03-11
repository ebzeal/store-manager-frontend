import React, { Component } from 'react';
import Axios from 'axios';
import { Form, Grid, Input, Button, Dropdown, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as createAction from '../../../../action/createProductAction/createProductAction';
import * as editAction from '../../../../action/editProductAction/editProductAction';


class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePath: ''
    };
  }

  handleImageChange = async event => {
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append('file', file);
    formData.append('upload_preset', 'vdpuvsdu');
    const upload = await Axios({
      method: 'post',
      url: 'https://api.cloudinary.com/v1_1/ebzeal/image/upload',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    });

    this.setState({
      imagePath: upload.data.secure_url
    });
  };

  submitForm = async evt => {
    evt.preventDefault();
    const { createProduct, history} = this.props;
    const { imagePath } = this.state;
    const productImage = imagePath;
    const categories_id = this.categories_id.value;
    const productName = this.productName.value;
    const productDetails = this.productDetails.value;
    const productSpec = this.productSpec.value;
    const productPrice = this.productPrice.value;
    const productQuantity = this.productQuantity.value;
    const productLimit = this.productLimit.value;

    createProduct({
      categories_id,
      productName,
      productImage,
      productDetails,
      productSpec,
      productPrice,
      productQuantity,
      productLimit,
      history
    });
  };

  editForm = evt => {
    evt.preventDefault();
    const { editProduct, history, productId, image } = this.props;
    const { imagePath } = this.state;
    const productImage = imagePath || image;
    const categories_id = this.categories_id.value || this.categories_id.defaultValue;
    const productName = this.productName.value || this.productName.defaultValue;
    const productDetails = this.productDetails.value || this.productDetails.defaultValue;
    const productSpec = this.productSpec.value || this.productSpec.defaultValue;
    const productPrice = this.productPrice.value || this.productPrice.defaultValue;
    const productQuantity = this.productQuantity.value || this.productQuantity.defaultValue;
    const productLimit = this.productLimit.value || this.productLimit.defaultValue;

    editProduct({
      productId,
      categories_id,
      productName,
      productImage,
      productDetails,
      productSpec,
      productPrice,
      productQuantity,
      productLimit,
      history
    });
  };

  render() {
    const {
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
      formType,
      categories,
      submitForm,
      addProduct: { productErrors, isLoading },
      editProductState: {editProductErrors, editLoading}
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
          {(() => {
            return editProductErrors && editProductErrors.length ? (
              <Message negative list={Object.values(editProductErrors[0])} />
            ) : null;
          })()}
          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Form.Field required>
                  <input className="inputField"
                    type="text"
                    placeholder="Product name"
                    defaultValue={name}
                    size={size}
                    className="productInput"
                    id="productName"
                    ref={productName => (this.productName = productName)}
                    required
                  />
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Details</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Form.Field required> 
                  <input className="inputField"
                    type="text"
                    placeholder="Product Details"
                    defaultValue= {details}
                    size={size}
                    className="productInput"
                    id="productDetails"
                    ref={productDetails => (this.productDetails = productDetails)}
                    
                  />
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Image</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Form.Field required> 
                  <input className="inputField"
                    data-testid="image"
                    onChange={this.handleImageChange}
                    id="img-upload"
                    size={size}
                    type="file"
                    accept="image/*"
                    role="button"
                    className="productInput"
                    ref={imgUpload => (this.imgUpload = imgUpload)}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Category</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Form.Field required>
                  <select className="productInput" ref={categories_id => (this.categories_id = categories_id)}>
                  <option selected value="">
                     {formType === 'Edit' ? category : 'Select Category'}</option>
                    {categories.map(theCatg => {
                      return <option value={theCatg.id}> {theCatg.categoryname}</option>;
                    })}
                  </select>
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Price</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Form.Field required>
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Product Price"
                    defaultValue= {price}
                    size={size}
                    className="productInput"
                    id="productPrice"
                    ref={productPrice => (this.productPrice = productPrice)}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form.Field>

          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Specifications</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Form.Field required> 
                  <input className="inputField"
                    type="text"
                    placeholder="Product Specifications"

                    defaultValue= {spec}
                    size={size}
                    className="productInput"
                    id="productSpec"
                    ref={productSpec => (this.productSpec = productSpec)}
                    
                  />
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form.Field>

          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Quantity</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Form.Field required> 
                  <input className="inputField"
                    type="text"
                    placeholder="Product Quantity"

                    defaultValue= {qty}
                    size={size}
                    className="productInput"
                    id="productQuantity"
                    ref={productQuantity => (this.productQuantity = productQuantity)}
                    
                  />
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form.Field>

          <Form.Field inline>
            <Grid>
              <Grid.Column width={6}>
                <label className="productLabel">Product Quantity Limit</label>
              </Grid.Column>

              <Grid.Column width={10}>
                <Form.Field required>
                  <input className="inputField" 
                    type="text"
                    placeholder="Product Quantity Limit"
                    defaultValue= {limit}
                    size={size}
                    className="productInput"
                    id="productLimit"
                    ref={productLimit => (this.productLimit = productLimit)}
                    
                  />
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form.Field>
          <Form.Field required> 
            <Button type="submit" onClick={formType === 'Edit' ? this.editForm : this.submitForm}>
              {formType === 'Edit' ? 'Update Product' : 'Add New Product'}
            </Button>
          </Form.Field>
        </Form>
      </>
    );
  }
}

ProductForm.propTypes = {
  categories_id: PropTypes.number,
  productName: PropTypes.string,
  productDetails: PropTypes.string,
  productSpec: PropTypes.string,
  productPrice: PropTypes.string,
  productQuantity: PropTypes.number,
  productLimit: PropTypes.number
};

ProductForm.defaultProps = {
  categories_id: 0,
  productName: '',
  productDetails: '',
  productSpec: '',
  productPrice: '',
  productQuantity: 0,
  productLimit: 0
};

const mapStateToProps = state => ({
  categories: state.categories.categories.rows,
  addProduct: state.addProduct,
  editProductState: state.editProduct
});

const mapDispatchToProps = {
  createProduct: createAction.createProductAction,
  editProduct: editAction.editProductAction
};

export default withRouter(
  connect(
     mapStateToProps,
     mapDispatchToProps
   )(ProductForm)
);
