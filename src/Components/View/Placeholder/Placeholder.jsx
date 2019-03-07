import React from 'react';
import { Placeholder } from 'semantic-ui-react';

const PlaceholderFluid = () => (
  <Placeholder fluid large>
    <Placeholder.Header image>
      <Placeholder.Line length="full" />
      <Placeholder.Line length="full" />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line length="full" />
      <Placeholder.Line length="full" />
      <Placeholder.Line length="full" />
    </Placeholder.Paragraph>
  </Placeholder>
);

export default PlaceholderFluid;
