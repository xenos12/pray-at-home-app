import React from 'react'
import { Panel, Div, Button } from '@vkontakte/vkui'
import BackPanel from '../components/BackPanel'

const ServiceList = ({ go, goToService, id }) => {
	const onClick = (e) => {
		goToService(e.currentTarget.dataset.to)

	}
	return (
		<Panel id={id}>
			<BackPanel returnTo="home" go={go}>
				Служба в понедельник, глас 8
		</BackPanel>
			<Div>
				<Div>
					<Button size="xl"
						mode="secondary"
						onClick={onClick}
						data-to="vespers">
						Вечерня
				</Button>
				</Div>
				<Div>
					<Button size="xl"
						mode="primary"
						onClick={onClick}
						data-to="small-compline">
						Малая Павечерница
				</Button>
				</Div>
			</Div>
		</Panel>
	)
}


export default ServiceList
