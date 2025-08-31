"use client"

import * as React from "react"
import { AnimatePresence, motion, Transition } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { useOnClickOutside } from "usehooks-ts"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Tab {
  title: string
  icon: LucideIcon
  href: string
  type?: never
}

interface Separator {
  type: "separator"
  title?: never
  icon?: never
  href?: never
}

type TabItem = Tab | Separator

interface ExpandedTabsProps {
  tabs: TabItem[]
  className?: string
  activeColor?: string
  onChange?: (index: number | null) => void
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
}

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
}

// ✅ strongly typed spring transition
const spring: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.6,
}

export function ExpandedTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
}: ExpandedTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null)
  const outsideClickRef = React.useRef<HTMLDivElement>(
    null as unknown as HTMLDivElement
  )

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null)
    onChange?.(null)
  })

  const handleSelect = (index: number) => {
    setSelected(index)
    onChange?.(index)
  }

  const Separator = () => (
    <div className="h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
  )

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex gap-2 rounded-2xl border backdrop-blur-md p-1 shadow-lg",
        "bg-white/80 dark:bg-neutral-900/80 border-gray-200 dark:border-neutral-800",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />
        }

        const Icon = tab.icon
        return (
          <Link key={tab.title} href={tab.href}>
            <motion.button
              variants={buttonVariants}
              initial={false}
              animate="animate"
              custom={selected === index}
              onClick={() => handleSelect(index)}
              transition={spring}
              className={cn(
                "relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-200",
                selected === index
                  ? cn("bg-muted", activeColor)
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon size={20} />
              <AnimatePresence initial={false}>
                {selected === index && (
                  <motion.span
                    variants={spanVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={spring}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {tab.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </Link>
        )
      })}
    </div>
  )
}
