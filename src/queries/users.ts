import gql from 'graphql-tag';

export const GET_LIST_USERS = gql`
  {
    last_name
    id
    first_name
    email
  }
`;
