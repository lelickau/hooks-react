import { useCallback, useRef } from "react";

export default function useDebounce(callback: (...rest: any[]) => any, delay: number) {
    const timer = useRef<any>(null)

    const debouncedCallback = useCallback((...rest: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback(...rest)
        }, delay)

    }, [callback, delay])

    return debouncedCallback
}