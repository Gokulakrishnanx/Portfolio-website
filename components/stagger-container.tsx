"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1, once = true }: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
