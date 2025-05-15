import { useRef } from 'react'
import { useInView, motion, Variants } from 'framer-motion'

/**
 * Animation variants for section entry (fade in and slide up)
 */
export const sectionVariants: Variants = {
	initial: {
		y: 40,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
}

/**
 * Custom hook to handle section animation on in-view
 * @returns {object} - ref and animation state
 */
export function useSectionAnimation () {
	const ref = useRef(null)
	const inView = useInView(ref, { once: true, margin: '-80px' })
	return {
		ref,
		initial: 'initial',
		animate: inView ? 'animate' : 'initial',
		variants: sectionVariants,
	}
}

export { motion } 