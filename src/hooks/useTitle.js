import { useEffect } from "react"

export default function useTitle(title) {
    useEffect(() => {
        // console.log(title)

        document.title = title

    }, [title])
}