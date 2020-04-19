import React, { useContext, useState } from 'react'
import { RamadanContext } from './store/context'


const SettingsPopUp = () => {
  const fn = useContext(RamadanContext).functions
  const data = useContext(RamadanContext).data
  const settings = useContext(RamadanContext).settings

  const [state, setState] = useState({
    city: 'Pabna',
    lang: 'bn',
    layout: settings.layout
  })
  
  const changeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    fn.changeCity(e.target.value)
    switch (e.target.name) {
      case 'city':
        break;
        case 'lang':
          fn.changeLang(state.lang)
          break;
          case 'layout':
            fn.changeLayout(state.layout)
        break;
    
      default:
        return state
        break;
    }
  }

  return (
    <div className="s-popup">
      <label htmlFor="city">{settings.t.selectCity}</label>
      <select
        name="city"
        id="city"
        title={settings.t.selectCity}
        value={state.city}
        onChange={ changeHandler} >
        <option value="Pabna">
          {settings.userLang === 'bn' ? 'পাবনা' : 'Pabna'}
        </option>
        {
          data.districts.map((city, i) =>
            <option key={i} value={city.name.en}>
              {settings.userLang === 'bn' ? city.name.bn : city.name.en }
            </option>
          )
        }
      </select>

      <label htmlFor="lang">{settings.t.selectLang}</label>
      <select
        name="lang"
        id="lang"
        value={state.lang}
        onChange={ changeHandler} >
          <option value="en">English</option>
          <option value="bn">বাংলা</option>
      </select>

      <label htmlFor="layout">{settings.t.selectLayout}</label>
      <select
        name="layout"
        id="layout"
        value={state.layout}
        onChange={ changeHandler} >
          <option value="list">List</option>
          <option value="gird">Gird</option>
      </select>
    </div>
  )
}

export default SettingsPopUp
