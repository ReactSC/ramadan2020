import React from 'react'

const SingleBox = props => {
  const { ramadan, date, sehar, iftar, texts } = props
  const fajr = sehar + 10
  return (
    <div className="single-box">
      <h1>{ramadan}</h1>

      <h3>{date}</h3>

      <table className="box-time">
        <thead>
          <tr>
            <th>{texts.sehar}</th>
            <th>{texts.fajr}</th>
            <th>{texts.iftar}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{sehar}</td>
            <td>{fajr}</td>
            <td>{iftar}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SingleBox
