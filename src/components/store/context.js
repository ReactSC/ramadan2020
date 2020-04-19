import React, { createContext, useState } from 'react'
import * as db from './db.json'

export const RamadanContext = createContext()

const RamadanProvider = props => {
  const [state, setState] = useState({
    dhaka: db.dhaka,
    districts: db.districts,
    divisions: db.divisions,
    h: db.h,
    m: db.m,
    settings: {
      userDistrict: 'pabna',
      userLang: 'en',
      layout: 'gird',
      t: db.translate.bn
    },
    popup: true,
    settingsPopUp: false
  })


  const changeCity = city => {
    setState({
      ...state,
      settings: {
        ...state.settings,
        userDistrict: city
      }
    })
  }

  const changeLang = lang => {
    setState({
      ...state,
      settings: {
        ...state.settings,
        userLang: lang,
        t: lang === 'bn' ? db.translate.bn : db.translate.en
      }
    })
  }
  const changeLayout = layout => {
    setState({
      ...state,
      settings: {
        ...state.settings,
        layout: layout,
      }
    })
    console.log(layout)
  }

  const popUp = () => {
    setState({
      ...state,
      popUp: !state.popUp
    })
  }

  const settingsPopUp = () => {
    setState({
      ...state,
      settingsPopUp: !state.settingsPopUp
    })
  }


  const access = {
    data: {
      dhaka: state.dhaka,
      districts: state.districts,
      divisions: state.divisions,
    },
    settings: state.settings,
    others: {
      h: state.h,
      m: state.m,
      popup: state.popup,
      settingsPopUp: state.settingsPopUp
    },
    functions: {
      changeCity,
      changeLang,
      changeLayout,
      popUp,
      settingsPopUp
    }
  };

  return (
    <RamadanContext.Provider value={access}>
      {props.children}
    </RamadanContext.Provider>
  );
};
export default RamadanProvider;