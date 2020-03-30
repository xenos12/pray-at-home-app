import React, { useState } from 'react'
import {
	Select, Panel, PanelHeader, Button, Group,
	Cell, Div, Avatar, FormLayout, FormLayoutGroup, Input
} from '@vkontakte/vkui'

import { getWeekDay } from '../res/utils'

const Home = ({ id, goToServiceList }) => {
	const [toneDayData, setToneDayData] = useState({})

	const onChange = (e) => {
		const { name, value } = e.currentTarget
		setToneDayData({ ...toneDayData, [name]: value })
	}
	const onSubmit = () => {
		goToServiceList(toneDayData)
	}
	console.log({ toneDayData })
	console.log(getWeekDay(toneDayData.day))
	return (
		<Panel id={id}>
			<PanelHeader>Параметры службы</PanelHeader>
			<FormLayout>
				<Div>
				</Div>
				<FormLayoutGroup top="Выберите день недели и глас (глас можно посмотреть в календаре)" bottom="">
					<Select
						name="day"
						placeholder="День недели"
						onChange={onChange}
					>
						<option value="0">Воскресенье</option>
						<option value="1">Понедельник</option>
						<option value="2">Вторник</option>
						<option value="3">Среда</option>
						<option value="4">Четверг</option>
						<option value="5">Пятница</option>
						<option value="6">Суббота</option>
					</Select>
					<Select
						name="tone"
						placeholder="Глас"
						onChange={onChange}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
					</Select>
				</FormLayoutGroup>
			</FormLayout>
			<Group >
				<Div>
					<Button size="xl" level="2" onClick={onSubmit} data-to="service-list">
						Составить службу
				</Button>
				</Div>
			</Group>
		</Panel>)
}


export default Home
