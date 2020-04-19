import React, { useContext } from 'react';
import './App.css';
import ListView from './ListView'
import GirdView from './GirdView'
import SettingsPopUp from './SettingsPopUp'

import { RamadanContext } from './store/context';

const App = () => {
  const state = useContext(RamadanContext)

  const settingsPopUp = () => {
    state.functions.settingsPopUp()
  }

  return (
    <div className="App">

      <div className="title" >
        <h1 onClick={settingsPopUp}>{state.settings.t.title}</h1>
        {state.others.settingsPopUp && <SettingsPopUp />}
      </div>

      {
        state.settings.layout === 'list' ?
          <ListView /> :
            state.settings.layout === 'gird' ?
              <GirdView /> :
                <ListView />
      }
    </div>
  );
}

export default App;
