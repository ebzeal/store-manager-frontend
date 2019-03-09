import React from 'react';
import { Grid } from 'semantic-ui-react';
import PageHeader from '../../View/Header/Header';
import DashboardRight from '../../View/DashboardRight/DashboardRight';
import AdminHeader from '../../View/Header/AdminHeader/AdminHeader';
import AdminHeaderReasponsive from '../../View/Header/AdminHeaderResponsive/AdminHeaderResponsive';

const Dashboard = () => {
  return (
    <div>
      <PageHeader>
        <AdminHeader />
        <AdminHeaderReasponsive />
      </PageHeader>
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
