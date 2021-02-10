import React from 'react';
import {
  List,
  Filter,
  Datagrid,
  TextInput,
  TextField,
  EditButton,
} from 'react-admin';

const UserFilter = (props: object) => (
  <Filter {...props}>
    <TextInput label="Search by Email" source="email" alwaysOn />
  </Filter>
);

export const UsersList = (props: object) => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

export default UsersList;
