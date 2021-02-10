import React from 'react';
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const PageSettingsCreate = (props: object) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="user_id" reference="user_profile">
        <SelectInput optionText="email" />
      </ReferenceInput>
      <TextInput source="settings_blob" />
    </SimpleForm>
  </Create>
);

export default PageSettingsCreate;
