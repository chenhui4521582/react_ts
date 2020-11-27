import React from 'react'
import {NavLink} from "react-router-dom";
import {withRouter} from 'react-router-dom'
/** ======== Css ======== **/
import './style.less'

interface I_footer {
	name: String,
	url: any,
	class: String
}

const BaseFooter = (props: any) => {
	const footer: I_footer[] = [
		{
			name: '游戏',
			url: '/',
			class: 'index'
		},
		{
			name: '任务',
			url: '/task',
			class: 'task'
		},
		{
			name: '商城',
			url: '/mall',
			class: 'mall'
		},
		{
			name: '我的',
			url: '/my',
			class: 'my'
		}
	]
	return (
		<div className="base-footer">
			{
				footer.map((item, index) => (
					<NavLink
						exact={true}
						className={`item ${item.class}`}
						to={item.url}
						activeClassName={'active'}
						key={index}
					>
						{item.name}
					</NavLink>
				))
			}
		</div>
	)
}

export default withRouter(BaseFooter)