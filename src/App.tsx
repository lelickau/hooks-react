import React from 'react'
import Debounce from './components/Debounce'
import Form from './components/form/Form'
import Hover from './components/hover/Hover'
import List from './components/listScroll/List'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'


function App() {
    return (
    <>
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/debounce" element={<Debounce />} />
            <Route path="/hover" element={<Hover />} />
            <Route path="/list" element={<List />} />
        </Routes>
    </main>
    </>
    )
}

export default App
