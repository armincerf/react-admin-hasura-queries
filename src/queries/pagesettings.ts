import gql from 'graphql-tag';

export const GET_LIST_PAGESETTINGS = gql`
  {
    settings_blob
    user_id
  }
`;
