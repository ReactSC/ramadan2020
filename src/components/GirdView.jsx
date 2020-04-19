import React, {useContext} from 'react'
import SingleBox from './SingleBox'
import { RamadanContext } from './store/context'



const GirdView = () => {
  const time = useContext(RamadanContext).data.dhaka
  const settings = useContext(RamadanContext).settings
  return (
    <div className="box-wrap">
      {
        time.map((time, index) => {
          return (
              <SingleBox
                key={index}
                ramadan={index + 1}
                date={time.date}
                sehar={time.sehar}
                iftar={time.iftar}
                texts={settings.t}
              />
          )
        })
      }
    </div>
  )
}

export default GirdView
