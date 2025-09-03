"use client"

import { useEffect, useState, type MouseEvent } from "react"
import Image, { type StaticImageData } from "next/image"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
} from "motion/react"
import Balancer from "react-wrap-balancer"
import { cn } from "@/lib/utils"

// ✅ For images (supports string from /public or StaticImageData from import)
type ImageSource = string | StaticImageData

// ✅ Props for SkiperCard
interface SkiperCardProps {
  title: string
  description: string
  bgClass?: string
  step1img1Class?: string
  step1img2Class?: string
  step2img1Class?: string
  step2img2Class?: string
  step3imgClass?: string
  image: {
    step1dark1: ImageSource
    step1dark2: ImageSource
    step1light1: ImageSource
    step1light2: ImageSource
    step2dark1: ImageSource
    step2dark2: ImageSource
    step2light1: ImageSource
    step2light2: ImageSource
    step3dark: ImageSource
    step3light: ImageSource
    step4light: ImageSource
    alt: string
  }
}

// ✅ Wrapper style for motion
type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>
  "--y": MotionValue<string>
}

// ===================== FeatureCard Wrapper =====================
function FeatureCard({
  title,
  description,
  bgClass,
  children,
}: {
  title: string
  description: string
  bgClass?: string
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  useEffect(() => setMounted(true), [])

  return (
    <motion.div
      className="animated-cards relative w-full rounded-[16px]"
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-b from-neutral-900/90 to-stone-800 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90",
          "md:hover:border-transparent",
          bgClass
        )}
      >
        <div className="m-10 min-h-[150px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[700px] w-full">
          <div className="flex w-4/6 flex-col gap-3">
            <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
              {title}
            </h2>
            <p className="text-sm leading-5 text-neutral-300 dark:text-zinc-400 sm:text-base sm:leading-5">
              <Balancer>{description}</Balancer>
            </p>
          </div>
          {mounted ? children : null}
        </div>
      </div>
    </motion.div>
  )
}

// ===================== SkiperCard =====================
export function SkiperCard({
  title,
  description,
  bgClass,
  image,
  step1img1Class,
  step1img2Class,
  step2img1Class,
  step2img2Class,
  step3imgClass,
}: SkiperCardProps) {
  const { currentNumber: step, increment } = useNumberCycler()

  return (
    <FeatureCard title={title} description={description} bgClass={bgClass}>
      {/* step 4 big image */}
      <div
        className={cn(
          { "translate-x-0 opacity-0": step < 3 },
          "absolute left-2/4 top-1/5 flex w-full -translate-x-1/2 -translate-y-[33%] flex-col gap-12 text-center text-2xl font-bold transition-all duration-500 md:w-3/5"
        )}
      >
        <Image
          alt={image.alt}
          src={image.step4light}
          width={800}
          height={500}
          className="pointer-events-none top-[0%] w-[90%] rounded-2xl transition-all duration-500 md:left-[35px] md:top-[2%] md:w-full"
          style={{ position: "absolute", userSelect: "none", maxWidth: "unset" }}
        />
      </div>

      {/* step 1 */}
      <div
        className={cn(
          { "translate-x-0 opacity-0": step !== 0 },
          "absolute left-2/4 top-1/5 flex w-full -translate-x-1/2 -translate-y-[33%] flex-col gap-12 text-center text-2xl font-bold transition-all duration-500 md:w-3/5"
        )}
      >
        <Image
          alt={image.alt}
          src={image.step1light1}
          width={400}
          height={300}
          className={cn(step1img1Class, "pointer-events-none top-[5%] w-[90%] rounded-2xl transition-all duration-500 md:left-[35px] md:top-[2%] md:w-full")}
          style={{ position: "absolute", userSelect: "none", maxWidth: "unset" }}
        />
        <Image
          alt={image.alt}
          src={image.step1light2}
          width={400}
          height={300}
          className={cn(step1img2Class, "pointer-events-none top-[5%] w-[90%] rounded-2xl transition-all duration-500 md:left-[35px] md:top-[2%] md:w-full")}
          style={{ position: "absolute", userSelect: "none", maxWidth: "unset" }}
        />
      </div>

      {/* step 2 */}
      <div
        className={cn(
          { "translate-x-0 opacity-0": step !== 1 },
          "absolute left-2/4 top-1/5 flex w-full -translate-x-1/2 -translate-y-[33%] flex-col gap-12 text-center text-2xl font-bold transition-all duration-500 md:w-3/5"
        )}
      >
        <Image
          alt={image.alt}
          src={image.step2light1}
          width={400}
          height={300}
          className={cn(step2img1Class, "pointer-events-none top-[5%] w-[90%] rounded-2xl transition-all duration-500 md:left-[35px] md:top-[2%] md:w-full")}
          style={{ position: "absolute", userSelect: "none", maxWidth: "unset" }}
        />
        <Image
          alt={image.alt}
          src={image.step2light2}
          width={400}
          height={300}
          className={cn(step2img2Class, "pointer-events-none top-[5%] w-[90%] rounded-2xl transition-all duration-500 md:left-[35px] md:top-[2%] md:w-full")}
          style={{ position: "absolute", userSelect: "none", maxWidth: "unset" }}
        />
      </div>

      {/* step 3 */}
      <div
        className={cn(
          { "translate-x-0 opacity-0": step !== 2 },
          "absolute left-2/4 top-1/5 flex w-full -translate-x-1/2 -translate-y-[33%] flex-col gap-12 text-center text-2xl font-bold transition-all duration-500 md:w-3/5"
        )}
      >
        <Image
          alt={image.alt}
          src={image.step3light}
          width={400}
          height={300}
          className={cn(step3imgClass, "pointer-events-none top-[5%] w-[90%] rounded-2xl transition-all duration-500 md:left-[35px] md:top-[2%] md:w-full")}
          style={{ position: "absolute", userSelect: "none", maxWidth: "unset" }}
        />
      </div>

      {/* Steps navigation */}
      <div className="absolute left-48 top-5 z-50 size-full cursor-pointer md:left-0">
        <Steps current={step} onChange={() => {}} steps={steps} />
      </div>

      {/* Click to increment */}
      <div
        className="absolute right-0 top-0 z-50 size-full cursor-pointer md:left-0"
        onClick={() => increment()}
      />
    </FeatureCard>
  )
}

// ===================== Steps + Hook =====================
const steps = [
  { id: "1", name: "" },
  { id: "2", name: "" },
  { id: "3", name: "" },
]

function useNumberCycler() {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [dummy, setDummy] = useState(0)

  const increment = () => {
    setCurrentNumber((prev) => (prev + 1) % 4)
    setDummy((prev) => prev + 1)
  }

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentNumber((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(id)
  }, [dummy])

  return { currentNumber, increment }
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const userAgent = navigator.userAgent
    const isSmall = window.matchMedia("(max-width: 768px)").matches
    const mobileUA = Boolean(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.exec(userAgent)
    )
    const isDev = process.env.NODE_ENV !== "production"
    if (isDev) setIsMobile(isSmall || mobileUA)
    setIsMobile(isSmall && mobileUA)
  }, [])
  return isMobile
}

// ===================== Steps Component =====================
function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className={cn("size-4", className)} {...props}>
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

interface StepsProps {
  steps: { id: string; name: string }[]
  current: number
  onChange: (stepIdx: number) => void
}

export function Steps({ steps, current, onChange }: StepsProps) {
  return (
    <nav aria-label="Progress" className="flex justify-center px-4">
      <ol className="flex w-full flex-wrap items-start justify-start gap-2 sm:justify-center md:w-10/12" role="list">
        {steps.map((step, stepIdx) => {
          const isCompleted = current > stepIdx
          const isCurrent = current === stepIdx
          return (
            <li
              key={`${step.id}-${stepIdx}`}
              className={cn(
                "relative z-50 rounded-full px-3 py-1 transition-all duration-300 ease-in-out md:flex",
                isCompleted ? "bg-neutral-500/20" : "bg-neutral-500/10"
              )}
            >
              <div
                className={cn(
                  "group flex w-full cursor-pointer items-center focus:outline-none focus-visible:ring-2",
                  (!isCompleted && !isCurrent) || isCurrent ? "pointer-events-none" : ""
                )}
                onClick={() => onChange(stepIdx)}
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  <span
                    className={cn(
                      "flex shrink-0 items-center justify-center rounded-full duration-300",
                      isCompleted && "bg-brand-400 size-4 text-white",
                      isCurrent && "bg-brand-300/80 size-4 p-2 text-neutral-400",
                      !isCompleted && !isCurrent && "bg-brand-300/10 size-4 p-2"
                    )}
                  >
                    {isCompleted ? (
                      <IconCheck className="size-3 stroke-white stroke-[3] text-white dark:stroke-black" />
                    ) : (
                      <span className="text-xs">{stepIdx + 1}</span>
                    )}
                  </span>
                </span>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
