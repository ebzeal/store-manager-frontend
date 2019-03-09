import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal, Card, Grid, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SingleProduct extends Component {
  componentWillReceiveProps() {
    const { theProduct, productId } = this.props;

    const getProduct = () => {
      const theProd = theProduct.filter(product => {
        return product.id === productId;
      });

      console.log('TCL: SingleProduct -> getProduct -> theProd', theProd[0].id);
      return theProd[0].id;
    };

    getProduct();
  }

  render() {
    const { triggerEl, productId, theProduct } = this.props;
    return (
      <Modal trigger={triggerEl} closeIcon>
        <Modal.Content>
          <Card fluid>
            <Card.Content>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Image src="/images/wireframe/paragraph.png" />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Card
                      image="/images/avatar/large/elliot.jpg"
                      header="Elliot Baker"
                      meta="Friend"
                      description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
                      id={productId}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red">
            <Icon name="remove" />
            No
          </Button>
          <Button color="green">
            <Icon name="checkmark" />
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
SingleProduct.propTypes = {
  triggerEl: PropTypes.oneOfType([PropTypes.node]),
  productId: PropTypes.number.isRequired,
  theProduct: PropTypes.oneOfType([PropTypes.object]).isRequired
};

SingleProduct.defaultProps = {
  triggerEl: null
};

const mapStateToProps = state => ({
  theProduct: state.products.products.rows,
  theCategory: state.categories.categories.rows
});

export default connect(mapStateToProps)(SingleProduct);
