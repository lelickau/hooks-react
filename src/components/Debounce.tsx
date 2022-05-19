import React, { ChangeEvent, FC, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const Debounce: FC = () => {

    const [value, setValue] = useState('')

    const debouncedSearch = useDebounce(search, 500)

    function search (query: string) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
            .then(response => response.json())
            .then(json => console.log(json))
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChange} />
        </div>
    )
}

export default Debounce