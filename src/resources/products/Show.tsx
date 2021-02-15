import React from 'react';
import {
  TextField,
  Show,
  TabbedShowLayout,
  Tab,
  TopToolbar,
  ListButton,
} from 'react-admin';

const UserTitle = ({ record }: { record?: { name: string } }) => {
  return <span>User: {record ? `${record.name}` : ''}</span>;
};

const UserShowActions = ({
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

export const UsersShow = (props: object) => (
  <Show title={<UserTitle />} actions={<UserShowActions />} {...props}>
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

export default UsersShow;
