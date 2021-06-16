import React from 'react'
import LetterBob from './LetterBob'

type Props = {
	text: string
	maxBob: number
}

const TextBob: React.FC<Props> = props => {
	return (
		<div>
			{props.text.split('').map((letter, idx) => (
				<LetterBob
					key={idx}
					char={letter}
					max={props.maxBob}
					delay={idx * 0.1}
				/>
			))}
		</div>
	)
}

export default TextBob
