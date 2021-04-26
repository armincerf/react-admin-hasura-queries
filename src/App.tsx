import React, { useState, useEffect } from 'react';
import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
  ListGuesser,
} from 'react-admin';
import buildHasuraProvider from 'ra-data-hasura';
import {
  PageSettingsList,
  PageSettingsCreate,
  PageSettingsEdit,
  PageSettingsIcon,
} from './resources/page-settings';
import {
  UsersList,
  UsersShow,
  UsersIcon,
  UsersCreate,
} from './resources/users';
import { ProductsList, ProductsEdit } from './resources/products';
import customBuildFields from './custom-build-fields';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_URI = 'https://uat.hasura.app/v1/graphql';

const myClient = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret':
      'FA1juqc50AwczO6ScxdwrP7DJhZ1q4SAKhhzxI72yxvWoHQtAxdZOnr4t29SaXv5',
    // 'Authorization': `Bearer xxxx`,
  },
});

function App() {
  const [dataProvider, setDataProvider] = useState<null | Function>(null);
  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider(
        { client: myClient },
        { buildFields: customBuildFields }
      );
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="page_settings"
        icon={PageSettingsIcon}
        list={PageSettingsList}
        create={PageSettingsCreate}
        edit={PageSettingsEdit}
      />
      <Resource
        name="folio_user"
        icon={UsersIcon}
        create={UsersCreate}
        list={UsersList}
        show={UsersShow}
        edit={EditGuesser}
      />
      <Resource
        name="package"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="geographical_region"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
        create={EditGuesser}
      />
      <Resource
        name="permission"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="product_overrides"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="product_config"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="product_eod"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="eod"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="exchange"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="eod_entry"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="commodity_group"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="commodity_parent_group"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="packages"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource name="organisation" list={ListGuesser} />
      <Resource
        name="source"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />

      <Resource name="product" list={ProductsList} edit={ProductsEdit} />
    </Admin>
  );
}

export default App;
