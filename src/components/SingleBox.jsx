import React from 'react'

const SingleBox = props => {
  const { ramadan, date, sehar, iftar, texts } = props
  const fajr = sehar + 10
  return (
    <div className="single-box">
      <h1>{ramadan}</h1>

      <span>{texts.date}:</span>
      <span>{date}</span>

      <div className="box-time">
        <span>{texts.sehar}: </span>
        <span>{sehar}</span>

        <span>{texts.fajr}: </span>
        <span>{fajr}</span>

        <span>{texts.iftar} : </span>
        <span>{iftar}</span>
      </div>
    </div>
  )
}

export default SingleBox
