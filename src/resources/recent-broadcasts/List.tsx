import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
} from 'react-admin';

export const RecentBroadcastList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="column_id" />
      <ReferenceField source="user_id" reference="users">
        <TextField source="email" />
      </ReferenceField>
      <DateField source="written" />
    </Datagrid>
  </List>
);

export default RecentBroadcastList;
