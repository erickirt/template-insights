"use client"

import { Button } from "@/components/Button"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/components/RadioCardGroup"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const employeeCounts = [
  { value: "1", label: "1" },
  { value: "2-5", label: "2 – 5" },
  { value: "6-20", label: "6 – 20" },
  { value: "21-100", label: "21 – 100" },
  { value: "101-500", label: "101 – 500" },
  { value: "501+", label: "501+" },
]

export default function Employees() {
  const [selectedEmployeeCount, setSelectedEmployeeCount] = useState("")
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      console.log("Form submitted with employee count:", selectedEmployeeCount)
      router.push("/onboarding/employees")
    }, 800)
  }
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-xl font-semibold text-gray-900">
        How many employees does your company have?
      </h1>
      <p className="mt-6 text-gray-700 sm:text-sm">
        This will help us customize the experience to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-4">
        <RadioCardGroup
          value={selectedEmployeeCount}
          onValueChange={(value) => setSelectedEmployeeCount(value)}
          required
        >
          {employeeCounts.map((count) => (
            <RadioCardItem
              className="active:scale-[99%]"
              key={count.value}
              value={count.value}
            >
              <div className="flex items-start gap-3">
                <RadioCardIndicator className="mt-1" />
                <div>
                  <span className="sm:text-sm">{count.label}</span>
                </div>
              </div>
            </RadioCardItem>
          ))}
        </RadioCardGroup>
        <div className="mt-6 flex justify-between">
          <Button type="button" variant="ghost">
            Back
          </Button>
          <Button
            type="submit"
            disabled={!selectedEmployeeCount || loading}
            isLoading={loading}
          >
            Continue
          </Button>
        </div>
      </form>
    </main>
  )
}
