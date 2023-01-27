import { useEffect } from "react";

const UseTitle = (title) => {
    useEffect(() => {
        const prevTitle = title
        document.title = title

        return () => document.title = prevTitle
    }, [title])
}

export default UseTitle;
