import React, { FC } from 'react';

const UseDebounce: FC = () => {
    return (
        <pre>
                    <code>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">import </span>
                                <span className="punctuation">{' { '}</span>
                                {'useCallback, useRef'}
                                <span className="punctuation">{' } '}</span>
                                <span className="keyword"> from </span>
                                <span className="string">'react'</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">export default function </span>
                                <span className="fun">useDebounce </span>
                                <span className="punctuation">(</span>
                                {'callback: (...rest: any[]) => any, delay: number'}
                                <span className="punctuation">)</span>
                                <span className="keyword">{' => '}</span>
                                <span className="punctuation">{'{'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">    const </span>
                                {'timer'}
                                <span className="keyword"> = </span>
                                <span className="fun">useRef</span>
                                {'<any>'}
                                <span className="keyword">(</span>
                                <span className="boolean">null</span>
                                <span className="keyword">)</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">    const </span>
                                {"debouncedCallback"}
                                <span className="fun"> = useCallback</span>
                                <span className="keyword">(</span>
                                <span className="punctuation">(</span>
                                {"...rest: any[]"}
                                <span className="punctuation">)</span>
                                <span className="keyword">{' => '}</span>
                                <span className="punctuation">{'{'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">        if </span>
                                <span className="keyword">(</span>
                                {'timer.current'}
                                <span className="keyword">)</span>
                                <span className="punctuation">{' {'}</span>
                            </div>
                            <div className="block">
                                <span className="fun">            clearTimeout</span>
                                <span className="keyword">(</span>
                                {'timer.current'}
                                <span className="keyword">)</span>
                            </div>
                            <div className="block">
                                <span className="punctuation">{'        }'}</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="block">
                                {"        timer.current = "}
                                <span className="fun">setTimeout</span>
                                <span className="keyword">(</span>
                                <span className="punctuation">(</span>
                                <span className="punctuation">)</span>
                                <span className="keyword">{' => '}</span>
                                <span className="punctuation">{'{'}</span>
                            </div>
                            <div className="block">
                                <span className="fun">            callback</span>
                                <span className="punctuation">(</span>
                                {"...rest"}
                                <span className="punctuation">)</span>
                            </div>
                            <div className="box">
                                <div className="block">
                                    <span className="punctuation">{'        }'}</span>
                                    {', delay'}
                                    <span className="punctuation">)</span>
                                </div>
                            </div>
                            <div className="block">
                                <span className="punctuation">{'    }, ['}</span>
                                {"callback, delay"}
                                <span className="punctuation">{']'}</span>
                                <span className="keyword">)</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">    return </span>
                                {"debouncedCallback"}
                            </div>
                            <div className="block">
                                <span className="punctuation">{'}'}</span>
                            </div>
                        </div>
                    </code>
                </pre>
    );
};

export default UseDebounce;