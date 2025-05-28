"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ParallaxHeroProps {
  children: ReactNode
  className?: string
  offset?: number
}

export function ParallaxHero({ children, className = "", offset = 50 }: ParallaxHeroProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, offset])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  )
}
