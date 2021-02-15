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

const ProductsTitle = ({ record }: { record?: { title: string } }) => {
  return <span>Product: {record ? `${record.title}` : ''}</span>;
};

const ProductsEditActions = ({
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

export const ProductsEdit = (props) => (
  <Edit title={<ProductsTitle />} actions={<ProductsEditActions />} {...props}>
    <SimpleForm>
      <TextInput source="artis_type" />
      <TextInput source="commodity_group" />
      <TextInput source="external_id" />
      <TextInput source="id" />
      <JsonInput
        source="instrument_config"
        reactJsonOptions={{
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
      />
      <JsonInput
        source="instruments"
        reactJsonOptions={{
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
      />
      <TextInput source="long_name" />
      <TextInput source="maturity" />
      <TextInput source="owner" />
      <ReferenceInput source="package_id" reference="packages">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="parent_commodity" />
      <TextInput source="short_name" />
      <TextInput source="uom" />
    </SimpleForm>
  </Edit>
);

export default ProductsEdit;
