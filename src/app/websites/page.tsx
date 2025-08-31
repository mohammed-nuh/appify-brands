"use client"

import { useState } from "react"
import PortfolioDetail from "../my_components/PortfolioDetail"
import AgencyDetail from "../my_components/AgencyDetail"
import LMSDetail from "../my_components/LMSDetail"

const options = [
  {
    title: "Portfolio Website",
    src: "hover_images/1.jpg",
    component: () => <PortfolioDetail />,
  },
  {
    title: "Agency Website",
    src: "hover_images/2.jpg",
    component: () => <AgencyDetail />,
  },
  {
    title: "LMS Website",
    src: "hover_images/3.jpg",
    component: () => <LMSDetail />,
  },
]

export default function WebsitesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="p-6 py-16 bg-white dark:bg-black">
      <h1 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
        Choose Your Website
      </h1>

      {/* Website Options */}
      <div className="flex flex-wrap justify-center gap-6">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer border rounded-lg shadow-md p-4 w-72 transition-colors duration-300
              ${
                activeIndex === index
                  ? "border-blue-600 ring-2 ring-blue-400 dark:border-blue-400 dark:ring-blue-500"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-800 hover:shadow-lg`}
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
      <div className="mt-10 text-center">
        {activeIndex !== null ? (
          <div className="text-black dark:text-white">
            {options[activeIndex].component()}
          </div>
        ) : (
          <p className="text-black dark:text-white">
            Click on a website type to see details...
          </p>
        )}
      </div>
    </section>
  )
}
