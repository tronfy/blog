import React from 'react'

type Props = {
	title: string
	subtitle: string
}

const Header: React.FC<Props> = props => {
	return (
		<header className="header">
			<h1>{props.title}</h1>
			<p>{props.subtitle}</p>
		</header>
	)
}

export default Header
