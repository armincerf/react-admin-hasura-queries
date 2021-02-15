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

      <TextField source="firstname" />
      <TextField source="lastname" />
      <TextField source="email" />
      <TextField source="organisation" />

      <EditButton />
    </Datagrid>
  </List>
);

export default UsersList;
