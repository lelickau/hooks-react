import React, { FC } from 'react';

const UseScroll: FC = () => {
    return (
        <pre>
                    <code>
                        <div className="block">
                            <span className="keyword">import </span>
                            <span className="punctuation">{' { '}</span>
                            {'ChangeEvent, FocusEvent, useEffect, useState'}
                            <span className="punctuation">{' } '}</span>
                            <span className="keyword"> from </span>
                            <span className="string">'react'</span>
                        </div>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">export default function </span>
                                <span className="fun">useScroll </span>
                                <span className="punctuation">(</span>
                                {'parentRef: RefObject<HTMLDivElement>, childRef: RefObject<HTMLDivElement>, callback: () => any'}
                                <span className="punctuation">)</span>
                                <span className="keyword">{' => '}</span>
                                <span className="punctuation">{'{'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">    const </span>
                                {'observer'}
                                <span className="keyword"> = </span>
                                <span className="fun">useRef</span>
                                {'<any>'}
                                <span className="keyword">(</span>
                                <span className="boolean">null</span>
                                <span className="keyword">)</span>
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
                                    <span className="keyword">        const </span>
                                    {'options = '}
                                    <span className="keyword">{'{'}</span>
                                </div>
                                <div className="block">
                                    {'            root: parentRef.current,'}
                                </div>
                                <div className="block">
                                    {'            rootMargin: '}
                                    <span className="string">'0px'</span>
                                    {','}
                                </div>
                                <div className="block">
                                    {'            threshold: '}
                                    <span className="punctuation">0</span>
                                    {','}
                                </div>
                                <div className="block">
                                    <span className="keyword">{'        }'}</span>
                                </div>

                                <div className="box">
                                    <div className="block">
                                        {"        observer.current"}
                                        <span className="keyword"> = new </span>
                                        <span className="fun">IntersectionObserver</span>
                                        <span className="keyword">(</span>
                                        <span className="punctuation">(</span>
                                        {'[target]'}
                                        <span className="punctuation">)</span>
                                        <span className="keyword">{' => '}</span>
                                        <span className="punctuation">{'{'}</span>
                                    </div>

                                    <div className="block">
                                        <span className="keyword">            if </span>
                                        <span className="keyword">(</span>
                                        {'target.isIntersecting'}
                                        <span className="keyword">)</span>
                                        <span className="punctuation">{' {'}</span>
                                    </div>
                                    <div className="block">
                                        <span className="fun">                callback</span>
                                        <span className="keyword">(</span>
                                        <span className="keyword">)</span>
                                    </div>
                                    <div className="block">
                                        <span className="punctuation">{'            }'}</span>
                                    </div>
                                    <div className="block">
                                        <span className="punctuation">{'        }'}</span>
                                        {', options'}
                                        <span className="keyword">)</span>
                                    </div>

                                    <div className="box">
                                        <div className="block">
                                            {"        observer.current."}
                                            <span className="fun">observe</span>
                                            <span className="keyword">(</span>
                                            {"childRef.current"}
                                            <span className="keyword">)</span>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="block">
                                            <span className="keyword">        return function </span>
                                            <span className="punctuation">{'() {'}</span>
                                        </div>
                                        <div className="block">
                                            {"            observer.current."}
                                            <span className="fun">unobserve</span>
                                            <span className="keyword">(</span>
                                            {"childRef.current"}
                                            <span className="keyword">)</span>
                                        </div>
                                        <div className="block">
                                            <span className="punctuation">{'        }'}</span>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <span className="punctuation">{'    }, ['}</span>
                                        {"callback"}
                                        <span className="punctuation">{']'}</span>
                                        <span className="keyword">)</span>
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

export default UseScroll;