import gql from 'graphql-tag';

export const GET_LIST_USERS = gql`
  {
    lastname
    id
    firstname
    email
  }
`;
