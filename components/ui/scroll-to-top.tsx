'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export function ScrollToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 hover:opacity-80 bg-primary text-background p-3 rounded-full shadow-lg transition-all duration-300 z-50 cursor-pointer"
            aria-label="Scroll to top"
        >
            <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
    )
}