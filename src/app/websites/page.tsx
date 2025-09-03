"use client"

import { useState, useEffect, useRef } from "react"
import PortfolioDetail from "../my_components/PortfolioDetail"
import AgencyDetail from "../my_components/AgencyDetail"
import LMSDetail from "../my_components/LMSDetail"

const options = [
  {
    title: "Portfolio Website",
    src: "hover_images/1.jpg",
    component: ({ onPlanSelect }: { onPlanSelect: (plan: string) => void }) => <PortfolioDetail onPlanSelect={onPlanSelect} />,
  },
  {
    title: "Agency Website",
    src: "hover_images/2.jpg",
    component: ({ onPlanSelect }: { onPlanSelect: (plan: string) => void }) => <AgencyDetail onPlanSelect={onPlanSelect} />,
  },
  {
    title: "LMS Website",
    src: "hover_images/3.jpg",
    component: ({ onPlanSelect }: { onPlanSelect: (plan: string) => void }) => <LMSDetail onPlanSelect={onPlanSelect} />,
  },
]

export default function WebsitesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [message, setMessage] = useState<string>("")
  const [customMessage, setCustomMessage] = useState<string>("")
  const messageBoxRef = useRef<HTMLDivElement>(null)
  const messageTitleRef = useRef<HTMLHeadingElement>(null)

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan)
    if (activeIndex !== null) {
      const websiteType = options[activeIndex].title.toLowerCase()
      setMessage(`I want ${websiteType} of ${plan} plan. `)
    }
  }

  useEffect(() => {
    setSelectedPlan(null)
    setMessage("")
    setCustomMessage("")
  }, [activeIndex])

  useEffect(() => {
    if (message && messageTitleRef.current) {
      messageTitleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [message])

  const fullMessage = message + (customMessage ? ` ${customMessage}` : "")

  const handleGmail = () => {
    const subject = "Website Development Request"
    const body = encodeURIComponent(fullMessage)
    window.open(`mailto:appifybrands@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`)
  }

  const handleTwitter = () => {
    const text = encodeURIComponent(`${fullMessage} @AppifyBrands`)
    window.open(`https://twitter.com/intent/tweet?text=${text}`)
  }

  return (
    <section className="p-6 py-16 bg-background">
      <h1 className="text-3xl font-bold text-center mb-8 text-black dark:text-white animate-fadeIn">
        Choose Your Website
      </h1>

      {/* Website Options */}
      <div className="flex flex-wrap justify-center gap-6">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer border rounded-lg shadow-md p-4 w-72 transition-all duration-300 transform 
              ${activeIndex === index
                ? "border-blue-600 ring-2 ring-blue-400 dark:border-blue-400 dark:ring-blue-500 scale-105"
                : "border-gray-300 dark:border-gray-700 scale-100"
              } bg-white dark:bg-gray-800 hover:scale-105 hover:shadow-xl animate-slideUp`}
          >
            <img
              src={option.src}
              alt={option.title}
              className="rounded-md h-35 w-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-gray-100">
              {option.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Selected Component */}
      <div className="mt-10 text-center animate-fadeIn">
        {activeIndex !== null ? (
          <div className="text-black dark:text-white">
            {options[activeIndex].component({ onPlanSelect: handlePlanSelect })}
          </div>
        ) : (
          <p className="text-black dark:text-white">
            Click on a website type to see details...
          </p>
        )}
      </div>

      {/* Message Box */}
      {message && (
        <section className="mb-12 max-w-3xl mx-auto animate-slideUp">
          <h1 ref={messageTitleRef} className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
            Message Us Now!
          </h1>
          <div ref={messageBoxRef} className="p-4 bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-lg text-black dark:text-white">
            <p className="mb-4">{message}</p>
            <textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Add custom message..."
              className="w-full p-2 mb-4 border rounded bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
            <div className="flex justify-center gap-4">
              <button
                onClick={handleGmail}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Send via Gmail
              </button>
              <button
                onClick={handleTwitter}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Share on X
              </button>
            </div>
          </div>
        </section>
      )}
    </section>
  )
}
