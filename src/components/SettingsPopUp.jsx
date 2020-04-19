import React, { useContext } from 'react'
import { RamadanContext } from './store/context'


const SettingsPopUp = () => {
  const data = useContext(RamadanContext).data
  const settings = useContext(RamadanContext).settings
  
  return (
    <div>
      <label htmlFor="city">{settings.t.selectCity}</label>
      <select name="city" id="city">
        <option value="pabna">
          {settings.userLang === 'en' ? 'Pabna' : 'পাবনা' }
        </option>
        {
          data.districts.map((city, i) =>
            <option key={i} value={city.name.en}>
              {settings.userLang === 'en' ? city.name.en : city.name.bn}
            </option>
          )
        }
      </select>
    </div>
  )
}

export default SettingsPopUp
