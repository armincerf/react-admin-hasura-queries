import React from 'react';
import {
  Filter,
  List,
  Datagrid,
  EditButton,
  TextField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

const CurvesSettingFilter = (props: object) => (
  <Filter {...props}>
    <ReferenceInput label="User" source="user_id" reference="users">
      <SelectInput optionText="email" />
    </ReferenceInput>
  </Filter>
);

const CurvesSettingList = (props: object) => (
  <List filters={<CurvesSettingFilter />} {...props}>
    <Datagrid>
      <ReferenceField source="user_id" reference="users">
        <TextField source="email" />
      </ReferenceField>
      <TextField source="global_selector_range" />
      <EditButton />
    </Datagrid>
  </List>
);

export default CurvesSettingList;
