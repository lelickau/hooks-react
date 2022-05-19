import React, { useCallback, useRef, useState } from 'react';
import useScroll from '../../hooks/useScroll';

import './list.css'

interface FetchTodos {
    title: string;
    id: number;
}

const List = () => {
    const parentRef = useRef<HTMLDivElement>(null)
    const childRef = useRef<HTMLDivElement>(null)

    const [todos, setTodos]  = useState<FetchTodos[]>([])
    const [page, setPage]  = useState<number>(1)
    const limit = 7

    const callback = useCallback(() => {
        fetchTodos(page, limit)
    }, [page, limit])

    useScroll(parentRef, childRef, callback)

    function fetchTodos (page: number, limit: number) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json])
                setPage(prev => prev + 1)
            })
    }

    return (
        <div className="wrapper">
            <div className="list" ref={parentRef}>
                {
                    todos.map(todo =>
                        <div key={todo.id} className="list__item">{todo.id}. {todo.title}</div>
                    )
                }
                <div ref={childRef} className="scroll-area"> SCROLL AREA</div>
            </div>
        </div>
    )
}

export default List