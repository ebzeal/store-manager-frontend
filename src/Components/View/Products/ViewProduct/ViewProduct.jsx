import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

const viewProduct = ({ category, image, price, qty, limit, details, spec, name }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Image src={image} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Card.Header>
                <h1>{name}</h1>
              </Card.Header>
              <Card.Meta>
                <span className="date"> Category</span>:
<span className="detail">{category}</span>
                <span className="rightDetail">
                  <span className="price">N
{price}
</span>
                </span>
              </Card.Meta>
              <Card.Description>
                <span className="date"> Product Details</span>:
<span className="detail">{details}</span>
                <br />
                <span className="date"> Product Spec</span>:
<span className="detail">{spec}</span>
              </Card.Description>
              <Card.Content extra>
                <span className="date"> Store Quantity</span>:
<span className="detail">{qty}</span>
                <br />
                <span className="date"> Store Limit</span>:
<span className="detail">{limit}</span>
              </Card.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default viewProduct;
