"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale"
}

export function StaggerItem({ children, className = "", direction = "up" }: StaggerItemProps) {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
      scale: direction === "scale" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
