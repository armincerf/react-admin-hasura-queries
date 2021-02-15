import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const UsersCreate = (props: object) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
    </SimpleForm>
  </Create>
);

export default UsersCreate;
