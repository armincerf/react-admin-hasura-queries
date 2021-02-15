import React from 'react';
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const CurvesSettingsCreate = (props: object) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="email" />
      </ReferenceInput>
      <TextInput source="global_selector_range" />
    </SimpleForm>
  </Create>
);

export default CurvesSettingsCreate;
