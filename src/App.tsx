import React, { useState, useEffect } from 'react';
import { Admin, Resource, EditGuesser, ShowGuesser } from 'react-admin';
import buildHasuraProvider from 'ra-data-hasura';
import {
  PageSettingsList,
  PageSettingsCreate,
  PageSettingsEdit,
  PageSettingsIcon,
} from './resources/page-settings';
import {
  CurvesSettingsList,
  CurvesSettingsCreate,
  CurvesSettingsEdit,
  CurvesSettingsIcon,
} from './resources/curves-settings';
import {
  UsersList,
  UsersShow,
  UsersIcon,
  UsersCreate,
} from './resources/users';
import customBuildFields from './custom-build-fields';

const GRAPHQL_URI = 'https://expert-pigeon-28.hasura.app/v1/graphql';

const clientOptions = { uri: GRAPHQL_URI };

function App() {
  const [dataProvider, setDataProvider] = useState<null | Function>(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider(
        { clientOptions },
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
        name="user_profile"
        icon={UsersIcon}
        create={UsersCreate}
        list={UsersList}
        show={UsersShow}
        edit={EditGuesser}
      />
      <Resource
        name="curves_preferences"
        icon={CurvesSettingsIcon}
        list={CurvesSettingsList}
        create={CurvesSettingsCreate}
        show={ShowGuesser}
        edit={CurvesSettingsEdit}
      />
    </Admin>
  );
}

export default App;
