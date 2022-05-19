import React, { FC, useRef } from 'react'
import useHover from '../../hooks/useHover'
import './hover.css'

const Hover: FC = () => {

    const hoverRef = useRef<HTMLDivElement>(null)
    const isHoveringTwoRef = useHover(hoverRef)

    return (
        <div className="wrapper">
            <div
                ref={hoverRef}
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