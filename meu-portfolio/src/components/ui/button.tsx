import * as React from "react"

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
      {children}
    </button>
  )
}
