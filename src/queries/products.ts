import gql from 'graphql-tag';

export const GET_LIST_PACKAGES = gql`
  {
    product {
      artis_type
      code
      commodity_group
      external_id
      geographical_region
      id
      instrument_config
      instruments
      kt_kb_conversion
      logical_code
      long_name
      maturity
      owner
      organisation {
        name
      }
      field_name
      panel
      source
      package {
        name
        source {
          name
        }
      }
      product_type
      short_name
      uom
    }
  }
`;
