import React from 'react';
import {
  TextField,
  Show,
  TabbedShowLayout,
  Tab,
  TopToolbar,
  ListButton,
} from 'react-admin';

const RecentBroadcastTitle = ({ record }: { record?: { name: string } }) => {
  return <span>RecentBroadcast: {record ? `${record.name}` : ''}</span>;
};

const RecentBroadcastShowActions = ({
  basePath,
  data,
}: {
  basePath?: string;
  data?: object;
}) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} label="Back" />
  </TopToolbar>
);

export const RecentBroadcastShow = (props: object) => (
  <Show
    title={<RecentBroadcastTitle />}
    actions={<RecentBroadcastShowActions />}
    {...props}
  >
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField source="id" />
        <TextField source="firstname" />
        <TextField source="lastnname" />
        <TextField source="email" />
      </Tab>
    </TabbedShowLayout>
  </Show>
);

export default RecentBroadcastShow;
