# Artis Admin

proof of concept, forked from https://github.com/cpv123/react-admin-hasura-queries

## Getting started

1. `yarn` to install dependencies
2. `yarn start` to run the application at `localhost:3000`
3. (Optional): toggle between branches: `custom-queries` and `extending-queries` (master is equal to `custom-queries`)

## How it works

This demo shows two ways to customise the GraphQL queries sent from your Artis Admin client to a Hasura backend:

1. Defining completely custom `gql` queries - shown by the `custom-queries` branch (same as `master` branch)
2. Extending the default Artis Admin queries - shown by the `extending-queries` branch

Each method has a `custom-build-fields.ts` file which does the same 3 things:

1. Defines an `extractFieldsFromQuery` function which can extract just the fields from a GraphQL AST generated by a `gql` query:

   ```js
   const extractFieldsFromQuery = (queryAst) => {
     return queryAst.definitions[0].selectionSet.selections;
   };
   ```

2. Imports the custom queries defined in `src/queries` directory; these custom queries are defined as `gql` template literals
3. Defines a `customBuildFields` function which applies the custom queries for the relevant resource and fetch types; this function is passed to the `buildHasuraProvider` from `ra-data-hasura-graphql`.

## Troubleshooting

Artis Admin assumes that a resouces's `GET_LIST` query will return the same fields as the corresponding `GET_ONE` query for that resource. This allows Artis Admin to using a caching system whereby if a resource has already been fetched by it's `List` view, then the corresponding `Show` view can read the record from the Redux store whilst the fetch for the individual record is loading.

Using `ra-data-hasura-graphql` in the way we demonstrate here means that it's possible for a `GET_LIST` query fields to differ from from the `GET_ONE` query fields. This could cause Artis Admin to try and read a field that does not immediately exist on a record.

For example, if a `todos` resource has the following custom queries defined:

```js
const GET_LIST_TODOS = gql`
  {
    id
    title
    is_completed
  }
`;

const GET_ONE_TODO = gql`
  {
    id
    title
    is_completed
    user_id
  }
`;
```

Loading a `List` of todos will populate Redux with records that have 3 fields: `id`, `title`, `is_completed`. Navigating to a `Show` view for a todo record will then result in Artis Admin trying to find a `user_id` field, but this will not exist until the `GET_ONE_TODO` query has resolved.

### How to avoid this problem

There are 2 ways to avoid this problem:

1. Ensure that resources have consistent fields for `GET_LIST` and `GET_ONE` queries.
2. Handle loading states for fields that might not exist until the another query has resolved, for example:

   ```jsx
   import { FunctionField } from 'react-admin';

   <FunctionField
     label="User Id"
     render={(record) => {
       if (!record.user_id) return <p>Loading...</p>;
       return record.user_id;
     }}
   />;
   ```

## Taking it further

This demo shows how to customise a query's fields, but with `ra-data-hasura-graphql` you can take complete control of the entire query including the query variables and the response format.

For example, you could customise the query variables so that soft deleted records are always filtered out. This could be done by passing a `customBuildVariables` argument which ensures that all queries include a `where: { is_deleted: { is_null: true }}` clause.
