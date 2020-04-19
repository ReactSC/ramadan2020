import React from 'react'
import SingleLine from './SingleLine'

const ListView = props => {
  const { ramadan, date, sehar, fajr, iftar } = props.settings.t
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
          props.dhaka.map((time, index) => {
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
