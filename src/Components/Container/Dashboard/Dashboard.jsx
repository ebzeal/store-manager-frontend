import React from 'react';
import { Grid } from 'semantic-ui-react';
import Header from '../../View/Header/Header';
import DashboardRight from '../../View/DashboardRight/DashboardRight';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="ui" id="allPage">
        <section className="ui grid stackable container" id="dashboardSection">
          <Grid stackable textAlign="center">
            <Grid.Row verticalAlign="middle">
              <Grid.Column width={16}>
                <DashboardRight />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
