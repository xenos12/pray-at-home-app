import React from 'react'
import { Panel, Div } from '@vkontakte/vkui'
import BackPanel from '../components/BackPanel'

import getService from '../res/getService'

const Service = ({ id, go, toneData, day, serviceName }) => {
  console.log({ day, toneData })
  const { getText, title } = getService(serviceName)
  return (
    <Panel id={id}>
      <BackPanel returnTo="service-list" go={go}>
        {title}
      </BackPanel>
      <Div>
        {getText({ toneData, day })}
      </Div>
    </Panel>
  )
}

export default Service