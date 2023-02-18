import { useCallback, useState } from "react"

/**
 * useSync is React hook that sync 2 or more react components by giving same id value
 * @param {any} initialvalue
 * @param {string} id 
 */
export function useSync(initialValue, id) {
    if (!id) {
        throw new Error("useSync id param:2 cannot be null")
    }
    if (!window.reactSync)
        window.reactSync = {}
    if (!window.reactSync[id])
        window.reactSync[id] = []
    window.reactSync[id].push(useState(initialValue))

    const setValues = useCallback((newValue) => {
        for (let i = 0; i < window.reactSync[id].length; i++) {
            window.reactSync[id][i][1](newValue)
        }
        window.reactSync[id] = []
    }, [])
    const reactLinkLen = window.reactSync[id].length
    console.log([window.reactSync[id][reactLinkLen - 1][0], setValues])
    return [window.reactSync[id][reactLinkLen - 1][0], setValues]
}