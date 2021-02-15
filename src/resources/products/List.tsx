import React from 'react';
import {
  List,
  Filter,
  Datagrid,
  TextField,
  ReferenceField,
  ReferenceInput,
  EditButton,
  SelectInput,
} from 'react-admin';
import { JsonField } from 'react-admin-json-view';

const ProductsFilter = (props: object) => (
  <Filter {...props}>
    <ReferenceInput label="Owner" source="owner" reference="organisations">
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const ProductList = (props: object) => (
  <List filters={<ProductsFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="artis_type" />
      <TextField source="commodity_group" />
      <TextField source="id" />
      <JsonField
        source="instrument_config.formulae"
        addLabel={true}
        reactJsonOptions={{
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
      />
      <JsonField
        source="instruments"
        addLabel={true}
        reactJsonOptions={{
          name: null,
          collapsed: true,
          enableClipboard: false,
          displayDataTypes: false,
        }}
      />
      <TextField source="long_name" />
      <TextField source="maturity" />
      <TextField source="owner" />
      <ReferenceField source="package_id" reference="packages">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="parent_commodity" />
      <TextField source="short_name" />
      <TextField source="uom" />
      <EditButton />
    </Datagrid>
  </List>
);

export default ProductList;
