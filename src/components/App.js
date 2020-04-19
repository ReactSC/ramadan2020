import React, { useState } from 'react';
import './App.css';
import * as db from './store/db.json'
import SingleLine from './SingleLine'

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
      theme: 'dark'
    }
  })
  
  localStorage.setItem('ramadan2020', JSON.stringify(state))

  return (
    <div className="App">
      <h1>RAMADAN TIME</h1>
      <table>
        <thead>
          <tr>
            <th>
              Ramadan
            </th>
            <th>
              Date
            </th>
            <th>
              Sehar
            </th>
            <th>
              Fajr
            </th>
            <th>
              Iftar
            </th>
          </tr>
        </thead>
        <tbody>
          {
            state.dhaka.map((time, index) => {
              return (
                <SingleLine
                  key={index}
                  ramadan={index + 1}
                  date={time.date}
                  sehar={time.sehar}
                  iftar={time.iftar}
                />
              )
            })
          }
        </tbody>
      </table>
      
      
    </div>
  );
}

export default App;
