# react-hooks

## 1- useSync

``` typescript
/*
*
* @param {string} id - String that link 2 or more react components with same id value
*
*/

useSync (initialValue: any, id: string)


```

Let's take an example:


``` javascript

import React, { useCallback } from "react"
import ReactDOM from "react-dom/client"
import { useSync } from "./packages/react_hooks/react_hooks.jsx"

function Root() {
    const [value, setValue] = useSync("value", "VALUE")
    const handleClick = useCallback(() => {
        if (value == 'value')
            var v = 'value1'
        else 
            var v = 'value'
        setValue(v)
    }, [value])
    return <div className="salut" onClick={handleClick}>{value}</div>
}

function UnRoot() {
    const [value, setValue] = useSync("value", "VALUE")
    const handleClick = useCallback(() => {
        if (value == 'value')
            var v = 'value1'
        else 
            var v = 'value'
        setValue(v)
    }, [value])
    return <div className="salut" onClick={handleClick}>{value}</div>
}
ReactDOM.createRoot(document.querySelector("#root")).render(<Root />)
ReactDOM.createRoot(document.querySelector("#unroot")).render(<UnRoot />)

```

> Root and UnRoot components have save useSync <id> so, these 2 components are sync

> ***[value, setValue]*** are the same in these 2 components

> if one of these components setValue with ***setValue()*** function, ***value*** from Root and UnRoot components changed at the same time

> ***setValue()*** set new state for Root and UnRoot components at the same time
