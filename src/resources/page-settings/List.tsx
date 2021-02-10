import React from 'react';
import { JsonField } from 'react-admin-json-view';
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

const PageSettingFilter = (props: object) => (
  <Filter {...props}>
    <ReferenceInput label="User" source="user_id" reference="user_profile">
      <SelectInput optionText="email" />
    </ReferenceInput>
  </Filter>
);

const PageSettingList = (props: object) => (
  <List filters={<PageSettingFilter />} {...props}>
    <Datagrid>
      <JsonField
        source="settings_blob"
        addLabel={true}
        jsonString={true}
        reactJsonOptions={{
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
      />
      <ReferenceField source="user_id" reference="user_profile">
        <TextField source="email" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

export default PageSettingList;
