import React, { useState, useEffect } from 'react';
import './App.css';
import * as db from './store/db.json'
import ListView from './ListView'
import GirdView from './GirdView'

const App = () => {
  const [state, setState] = useState({
    dhaka: db.dhaka,
    districts: db.districts,
    divisions: db.divisions,
    h: db.h,
    m: db.m,
    settings: {
      userDistrict: 'pabna',
      userLang: 'en',
      theme: 'dark',
      view: 'list',
      t: db.translate.en
    },
    popup: true
  })

  useEffect(() => {
    const tr = lang => {
      lang === 'en' && setState({ ...state, settings: { ...state.settings, t: db.translate.en } })
      lang === 'bn' && setState({ ...state, settings: { ...state.settings, t: db.translate.bn } })
    }
    tr(state.settings.userLang)

  }, [])
  

  state.settings.userLang = 'en'
  state.settings.view = 'grid'
  return (
    <div className="App">
      <h1 className="title">{state.settings.t.title}</h1>
      {
        state.settings.view === 'list' ?
          <ListView {...state} /> :
            state.settings.view === 'grid' ?
              <GirdView {...state} /> :
                <ListView {...state} />
      }
    </div>
  );
}

export default App;
