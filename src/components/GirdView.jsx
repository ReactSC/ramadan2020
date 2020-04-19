import React from 'react'
import SingleBox from './SingleBox'

const GirdView = props => {
  return (
    <div className="box-wrap">
      {
        props.dhaka.map((time, index) => {
          return (
              <SingleBox
                key={index}
                ramadan={index + 1}
                date={time.date}
                sehar={time.sehar}
                iftar={time.iftar}
                texts={props.settings.t}
              />
          )
        })
      }
    </div>
  )
}

export default GirdView
