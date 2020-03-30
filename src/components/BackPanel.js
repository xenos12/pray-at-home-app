import React from 'react'
import { platform, IOS, PanelHeader, PanelHeaderButton } from '@vkontakte/vkui'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back'
import Icon24Back from '@vkontakte/icons/dist/24/back'
const osName = platform()

const BackPanel = ({ go, returnTo, children }) => {
  return (
    <PanelHeader
      left={<PanelHeaderButton onClick={go} data-to={returnTo}>
        {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
      </PanelHeaderButton>}
    >
      {children}
    </PanelHeader>
  )
}

export default BackPanel
