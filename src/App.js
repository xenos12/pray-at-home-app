import React, { useState, useEffect } from 'react'
import bridge from '@vkontakte/vk-bridge'
import { View, ScreenSpinner } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import './index.css'
import Home from './panels/Home'
import ServiceList from './panels/ServiceList'
import Service from './panels/Service'
import { getToneData } from './res/utils'

const App = () => {
	const [activePanel, setActivePanel] = useState('home')
	const [toneDayData, setToneDayData] = useState({})
	const [activeService, setActiveService] = useState()
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />)

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			// setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);


	const go = e => {
		setActivePanel(e.currentTarget.dataset.to)
	};

	const goToServiceList = data => {
		setToneDayData(data)
		setActivePanel('service-list')
	}

	const goToService = serviceName => {
		setActiveService(serviceName)
		setActivePanel('service')
	};
	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' goToServiceList={goToServiceList} />
			<ServiceList
				id='service-list'
				go={go}
				goToService={goToService} />
			<Service
				id='service'
				serviceName={activeService}
				toneData={getToneData(toneDayData.tone)}
				day={toneDayData.day}
				go={go}
			/>
		</View>
	);
}

export default App

