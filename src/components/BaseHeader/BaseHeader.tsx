import React, {useState, useEffect} from 'react'
import {Link, withRouter} from "react-router-dom";
/** ======== Css ======== **/
import './style.less'

const BaseHeader = (props: any) => {
	const [backShow, setBackShow] = useState<Boolean>(true)
	useEffect(() => {
		let urlArr: String[] = ['/'];
		let pathName: String = props.match.path;
		if(urlArr.includes(pathName)){
			setBackShow(false);
		}
	}, [])
	const back = () => {
		window.history.back()
	}
	return (
		<header className="base-header">
			{
				props.url
					?
				<Link to={props.url} className={'back'}>返回</Link>
					:
				backShow&&
				<div className="back" onClick={back}>返回</div>
			}
			<div className="content">
				<img src={require('@/assets/logo192.png').default} alt=""/>
				{
					props.title ? props.title :  'REACT'
				}
			</div>
		</header>
	)
}

export default withRouter(BaseHeader);