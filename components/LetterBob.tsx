import React from 'react'
import { motion } from 'framer-motion'

type Props = {
	char: string
	max: number
	delay: number
}

const LetterBob: React.FC<Props> = props => {
	if (props.char === ' ') return <span>&nbsp;</span>

	return (
		<span>
			<motion.div
				animate={{
					y: [-props.max, props.max, -props.max],
				}}
				transition={{
					duration: 2,
					ease: 'easeInOut',
					loop: Infinity,
					delay: props.delay,
				}}
			>
				{props.char}
			</motion.div>
		</span>
	)
}

export default LetterBob
