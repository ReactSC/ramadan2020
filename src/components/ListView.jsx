import React, { useContext } from 'react'
import { RamadanContext } from './store/context'
import SingleLine from './SingleLine'

const ListView = () => {
  const time = useContext(RamadanContext).data.dhaka
  const settings = useContext(RamadanContext).settings
  const { ramadan, date, sehar, fajr, iftar } = settings.t
  
  return (
    <table>
      <thead>
        <tr>
          <th>
            {ramadan}
          </th>
          <th>
            {date}
          </th>
          <th>
            {sehar}
          </th>
          <th>
            {fajr}
          </th>
          <th>
            {iftar}
          </th>
        </tr>
      </thead>
      <tbody>
        {
          time.map((time, index) => {
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
  )
}

export default ListView
