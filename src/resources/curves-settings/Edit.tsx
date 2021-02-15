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

const CurvesSettingTitle = ({ record }: { record?: { title: string } }) => {
  return <span>CurvesSetting: {record ? `${record.title}` : ''}</span>;
};

const CurvesSettingEditActions = ({
  basePath,
  data,
}: {
  basePath?: string;
  data?: { id: string };
}) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} label="Back" />
  </TopToolbar>
);

export const CurvesSettingsEdit = (props: object) => (
  <Edit
    title={<CurvesSettingTitle />}
    actions={<CurvesSettingEditActions />}
    {...props}
  >
    <SimpleForm>
      <TextInput disabled source="id" label="CurvesSetting Id" />
      <ReferenceInput label="User" source="user_id" reference="users">
        <SelectInput optionText="email" />
      </ReferenceInput>
      <TextInput source="global_selector_range" label="Total Months (count)" />
    </SimpleForm>
  </Edit>
);

export default CurvesSettingsEdit;
