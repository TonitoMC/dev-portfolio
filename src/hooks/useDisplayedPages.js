import { useState, useCallback } from "react"

/**
 * useDisplayedPages
 * @param {string[]} initialPages - Array of page keys to show initially
 * @returns [displayedPages, openPage, closePage, togglePage, setDisplayedPages]
 */
export default function useDisplayedPages(initialPages = []) {
  const [displayedPages, setDisplayedPages] = useState(initialPages)

  const closePage = useCallback(
    (page) => {
      setDisplayedPages((prev) => prev.filter((p) => p !== page))
    },
    [setDisplayedPages]
  )

  const togglePage = useCallback(
    (page) => {
      setDisplayedPages((prev) => (prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]))
    },
    [setDisplayedPages]
  )

  return [displayedPages, closePage, togglePage, setDisplayedPages]
}
