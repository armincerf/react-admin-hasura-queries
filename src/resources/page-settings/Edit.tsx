import React from 'react';
import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  TopToolbar,
  ListButton,
} from 'react-admin';
import { JsonInput } from 'react-admin-json-view';

const PageSettingTitle = ({ record }: { record?: { title: string } }) => {
  return <span>PageSetting: {record ? `${record.title}` : ''}</span>;
};

const PageSettingEditActions = ({
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

export const PageSettingsEdit = (props: object) => (
  <Edit
    title={<PageSettingTitle />}
    actions={<PageSettingEditActions />}
    {...props}
  >
    <SimpleForm>
      <TextInput disabled source="id" label="PageSetting Id" />
      <ReferenceInput label="User" source="user_id" reference="users">
        <SelectInput optionText="email" />
      </ReferenceInput>
      <JsonInput
        source="settings_blob"
        jsonString={true}
        reactJsonOptions={{
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
      />
    </SimpleForm>
  </Edit>
);

export default PageSettingsEdit;
