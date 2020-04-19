import React from 'react'

const SingleLine = props => {
  const { ramadan, date, sehar, iftar } = props
  const fajr = sehar + 10
  return (
    <tr>
      <td>{ramadan}</td>
      <td>{date}</td>
      <td>{sehar}</td>
      <td>{fajr}</td>
      <td>{iftar}</td>
    </tr>
  )
}

export default SingleLine
