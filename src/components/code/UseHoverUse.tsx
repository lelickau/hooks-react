import React, { FC } from 'react';

const UseHoverUse: FC = () => {
    return (
        <pre>
                    <code>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">import </span>
                                {'React, '}
                                <span className="punctuation">{' { '}</span>
                                {'FC, useRef'}
                                <span className="punctuation">{' } '}</span>
                                <span className="keyword"> from </span>
                                <span className="string">'react'</span>
                            </div>
                            <div className="block">
                                <span className="keyword">import </span>
                                <span className="punctuation">{' { '}</span>
                                {'useHover'}
                                <span className="punctuation">{' } '}</span>
                                <span className="keyword"> from </span>
                                <span className="string">'hooks/useHover'</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">const </span>
                                <span className="fun">Hover: </span>
                                {'FC = '}
                                <span className="punctuation">(</span>
                                <span className="punctuation">)</span>
                                <span className="keyword">{' => '}</span>
                                <span className="punctuation">{'{'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">    const </span>
                                {'hoverRef = '}
                                <span className="fun">useRef</span>
                                {'<HTMLDivElement>'}
                                <span className="keyword">(</span>
                                <span className="boolean">null</span>
                                <span className="keyword">)</span>
                            </div>
                            <div className="block">
                                <span className="keyword">    const </span>
                                {'isHoveringRef = '}
                                <span className="fun">useHover</span>
                                {'<HTMLDivElement>'}
                                <span className="keyword">(</span>
                                <span className="boolean">hoverRef</span>
                                <span className="keyword">)</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">    return ( </span>
                            </div>
                            <div className="block">
                                <span className="bracket">{'        <'}</span>
                                <span className="dbox">{'div'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">{'            ref='}</span>
                                {'{hoverRef}'}
                            </div>
                            <div className="block">
                                <span className="keyword">{'            style='}</span>
                                {'{{'}
                                {'background: isHoveringOneRef ? '}
                                <span className="string">'red'</span>
                                {" : "}
                                <span className="string">'blue'</span>
                                {'}}'}
                            </div>
                            <div className="block">
                                <span className="bracket">{'        >'}</span>
                                <span className="bracket">{'</'}</span>
                                <span className="dbox">{'div'}</span>
                                <span className="bracket">{'>'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">    )</span>
                            </div>
                            <div className="block">
                                <span className="punctuation">{'}'}</span>
                            </div>
                        </div>
                    </code>
                </pre>
    );
};

export default UseHoverUse;