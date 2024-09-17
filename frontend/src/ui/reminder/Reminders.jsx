import React from 'react'

const Reminders = ({open=false}) => {
  return open?(
    <div>Reminders</div>
  ):null
}

export default Reminders