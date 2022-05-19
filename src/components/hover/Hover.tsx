import React, { FC, useRef } from 'react'
import useHover from '../../hooks/useHover'
import './hover.css'

const Hover: FC = () => {

    const refOne = useRef<HTMLDivElement>(null)
    const isHoveringOneRef = useHover(refOne)
    const refTwo = useRef<HTMLDivElement>(null)
    const isHoveringTwoRef = useHover(refTwo)

    return (
        <div className="wrapper">
            <div
                ref={refTwo}
                className={`hover__item pulse ${isHoveringTwoRef && 'hard'}`}
                style={{
                    border: `20px solid ${isHoveringTwoRef ? '#ff793f' : '#7ed6df'}`,
                    background: isHoveringTwoRef ? '#b33939' : '#22a6b3',
                }}
            >{isHoveringTwoRef ? 'Be enough!' : 'Move over me'}</div>
        </div>
    )
}

export default Hover