import React from 'react';
import { Form, Grid, Input, Button } from 'semantic-ui-react';

const ProductForm = ({
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
  formType
}) => {
  return (
    <>
      <h2>{formType === 'Edit' ? 'Edit Product' : 'Create New Product'}</h2>
      <br />
      <Form>
        <Form.Field inline>
          <Grid>
            <Grid.Column width={6}>
              <label className="productLabel">Product</label>
            </Grid.Column>

            <Grid.Column width={10}>
              <Input placeholder="First name" value={name} size={size} className="productInput" />
            </Grid.Column>
          </Grid>
        </Form.Field>
        <Form.Field inline>
          <Grid>
            <Grid.Column width={6}>
              <label className="productLabel">Product Details</label>
            </Grid.Column>

            <Grid.Column width={10}>
              <Input placeholder="First name" value={details} size={size} className="productInput" />
            </Grid.Column>
          </Grid>
        </Form.Field>
        <Form.Field inline>
          <Grid>
            <Grid.Column width={6}>
              <label className="productLabel">Product Category</label>
            </Grid.Column>

            <Grid.Column width={10}>
              <Input placeholder="First name" value={category} size={size} className="productInput" />
            </Grid.Column>
          </Grid>
        </Form.Field>
        <Form.Field inline>
          <Grid>
            <Grid.Column width={6}>
              <label className="productLabel">Product Price</label>
            </Grid.Column>

            <Grid.Column width={10}>
              <Input placeholder="First name" value={price} size={size} className="productInput" />
            </Grid.Column>
          </Grid>
        </Form.Field>

        <Form.Field inline>
          <Grid>
            <Grid.Column width={6}>
              <label className="productLabel">Product Specifications</label>
            </Grid.Column>

            <Grid.Column width={10}>
              <Input placeholder="First name" value={spec} size={size} className="productInput" />
            </Grid.Column>
          </Grid>
        </Form.Field>

        <Form.Field inline>
          <Grid>
            <Grid.Column width={6}>
              <label className="productLabel">Product Quantity</label>
            </Grid.Column>

            <Grid.Column width={10}>
              <Input placeholder="First name" value={price} size={qty} className="productInput" />
            </Grid.Column>
          </Grid>
        </Form.Field>

        <Form.Field inline>
          <Grid>
            <Grid.Column width={6}>
              <label className="productLabel">Product Quantity Limit</label>
            </Grid.Column>

            <Grid.Column width={10}>
              <Input placeholder="First name" value={limit} size={size} className="productInput" />
            </Grid.Column>
          </Grid>
        </Form.Field>
        <Form.Field>
          <Button type="submit">Update Product</Button>
        </Form.Field>
      </Form>
    </>
  );
};
export default ProductForm;
