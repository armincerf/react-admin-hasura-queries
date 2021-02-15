import gql from 'graphql-tag';

export const GET_LIST_PACKAGES = gql`
  {
    packages {
      name
      source {
        name
      }
      products {
        artis_type
        commodity_group
        instrument_config
        instruments
        long_name
        maturity
        parent_commodity
        short_name
        uom
        geographical_region
        id
        organisation {
          name
          id
        }
        code
        external_id
        kt_kb_conversion
        logical_code
        owner
        package_id
        product_type
      }
    }
  }
`;
