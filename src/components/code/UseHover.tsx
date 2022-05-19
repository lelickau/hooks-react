import React, { FC } from 'react';

const UseHover: FC = () => {
    return (
        <pre>
                    <code>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">import </span>
                                <span className="punctuation">{' { '}</span>
                                {'useEffect, useState'}
                                <span className="punctuation">{' } '}</span>
                                <span className="keyword"> from </span>
                                <span className="string">'react'</span>
                            </div>
                            <div className="box">
                                <div className="block">
                                    <span className="keyword">export default function </span>
                                    <span className="fun">useHover </span>
                                    <span className="punctuation">(</span>
                                    {'ref: React.RefObject<HTMLDivElement>'}
                                    <span className="punctuation">)</span>
                                    <span className="keyword">{' => '}</span>
                                    <span className="punctuation">{'{'}</span>
                                </div>
                                <div className="block">
                                    <span className="keyword">    const [ </span>
                                    {'isHovering, setHovering'}
                                    <span className="keyword"> ] </span>
                                    <span className="fun">= useState</span>
                                    <span className="keyword">(</span>
                                    <span className="boolean">false</span>
                                    <span className="keyword">)</span>
                                </div>
                                <div className="box">
                                    <div className="block">
                                        <span className="keyword">    const </span>
                                        <span className="fun">on = </span>
                                        <span className="keyword">(</span>
                                        <span className="keyword">)</span>
                                        <span className="keyword">{' => '}</span>
                                        <span className="fun">setHovering</span>
                                        <span className="keyword">(</span>
                                        <span className="boolean">true</span>
                                        <span className="keyword">)</span>
                                    </div>
                                    <div className="block">
                                        <span className="keyword">    const </span>
                                        <span className="fun">off = </span>
                                        <span className="keyword">(</span>
                                        <span className="keyword">)</span>
                                        <span className="keyword">{' => '}</span>
                                        <span className="fun">setHovering</span>
                                        <span className="keyword">(</span>
                                        <span className="boolean">false</span>
                                        <span className="keyword">)</span>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="block">
                                        <span className="fun">    useEffect</span>
                                        <span className="keyword">(</span>
                                        <span className="punctuation">()</span>
                                        <span className="keyword">{' => '}</span>
                                        <span className="punctuation">{'{'}</span>
                                    </div>
                                    <div className="block">
                                            <span className="keyword">        if </span>
                                            <span className="keyword">(</span>
                                            {'!ref.current'}
                                            <span className="keyword">)</span>
                                            <span className="punctuation">{' {'}</span>
                                    </div>
                                    <div className="block">
                                        <span className="keyword">            return</span>
                                    </div>
                                    <div className="block">
                                        <span className="punctuation">{'        }'}</span>
                                    </div>
                                    <div className="block">
                                        <span className="keyword">        const </span>
                                        {'node = ref.current'}
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="block">
                                        {'        node.'}
                                        <span className="fun">addEventListener</span>
                                        <span className="keyword">(</span>
                                        <span className="string">'mouseenter'</span>
                                            {', on'}
                                        <span className="keyword">)</span>
                                    </div>
                                    <div className="block">
                                        {'        node.'}
                                        <span className="fun">addEventListener</span>
                                        <span className="keyword">(</span>
                                        <span className="string">'mousemove'</span>
                                            {', on'}
                                        <span className="keyword">)</span>
                                    </div>
                                    <div className="block">
                                        {'        node.'}
                                        <span className="fun">addEventListener</span>
                                        <span className="keyword">(</span>
                                        <span className="string">'mouseleave'</span>
                                            {', off'}
                                        <span className="keyword">)</span>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="block">
                                        <span className="keyword">        return function </span>
                                        <span className="punctuation">{'() {'}</span>
                                    </div>
                                    <div className="block">
                                        {'            node.'}
                                        <span className="fun">removeEventListener</span>
                                        <span className="keyword">(</span>
                                        <span className="string">'mouseenter'</span>
                                            {', on'}
                                        <span className="keyword">)</span>
                                    </div>
                                    <div className="block">
                                        {'            node.'}
                                        <span className="fun">removeEventListener</span>
                                        <span className="keyword">(</span>
                                        <span className="string">'mousemove'</span>
                                            {', on'}
                                        <span className="keyword">)</span>
                                    </div>
                                    <div className="block">
                                        {'            node.'}
                                        <span className="fun">removeEventListener</span>
                                        <span className="keyword">(</span>
                                        <span className="string">'mouseleave'</span>
                                            {', off'}
                                        <span className="keyword">)</span>
                                    </div>
                                    <div className="block">
                                        <span className="punctuation">{'        }'}</span>
                                    </div>
                                    <div className="block">
                                        <span className="punctuation">{'    }, ['}</span>
                                        <span className="punctuation">{']'}</span>
                                        <span className="keyword">)</span>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="block">
                                        <span className="keyword">    return </span>
                                        {"isHovering"}
                                    </div>
                                    <div className="block">
                                        <span className="punctuation">{'}'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
    );
};

export default UseHover;