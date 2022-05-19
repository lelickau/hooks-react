import React, { FC } from 'react';

const UseScrillUse:FC = () => {
    return (
        <pre>
                    <code>
                    <div className="block">
                        <div className="block">
                            <span className="keyword">import </span>
                            {'React, '}
                            <span className="punctuation">{' { '}</span>
                            {'useCallback, useRef, useState, FC'}
                            <span className="punctuation">{' } '}</span>
                            <span className="keyword"> from </span>
                            <span className="string">'react'</span>
                        </div>
                        <div className="block">
                            <span className="keyword">import </span>
                            <span className="punctuation">{' { '}</span>
                            {'useScroll'}
                            <span className="punctuation">{' } '}</span>
                            <span className="keyword"> from </span>
                            <span className="string">'hooks/useScroll'</span>
                        </div>
                        <div className="box">
                            <span className="keyword">interface </span>
                            {'IFetchTodos'}
                            <span className="punctuation">{' { '}</span>
                            <br />{'    title:'}<span className="punctuation"> string</span>{';'}
                            <br />{'    id:'}<span className="punctuation"> number</span>{';'}
                            {';'}
                            <br /><span className="punctuation">{'} '}</span>
                        </div>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">const </span>
                                <span className="fun">Todos: </span>
                                {'FC = '}
                                <span className="punctuation">(</span>
                                <span className="punctuation">)</span>
                                <span className="keyword">{' => '}</span>
                                <span className="punctuation">{'{'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">    const </span>
                                {'parentRef = '}
                                <span className="fun">useRef</span>
                                {'<HTMLDivElement>'}
                                <span className="keyword">(</span>
                                <span className="boolean">null</span>
                                <span className="keyword">)</span>
                            </div>
                            <div className="block">
                                <span className="keyword">    const </span>
                                {'childRef = '}
                                <span className="fun">useRef</span>
                                {'<HTMLDivElement>'}
                                <span className="keyword">(</span>
                                <span className="boolean">null</span>
                                <span className="keyword">)</span>
                            </div>

                            <div className="box">
                                <div className="block">
                                    <span className="keyword">    const </span>
                                    <span className="keyword">[</span>
                                    {'todos, setTodos'}
                                    <span className="keyword">]</span>
                                    <span className="fun"> = useState</span>
                                    {"<FetchTodos[]>"}
                                    <span className="keyword">(</span>
                                    <span className="boolean">[</span>
                                    <span className="boolean">]</span>
                                    <span className="keyword">)</span>
                                </div>
                                <div className="block">
                                    <span className="keyword">    const </span>
                                    <span className="keyword">[</span>
                                    {'page, setPage'}
                                    <span className="keyword">]</span>
                                    <span className="fun"> = useState</span>
                                    {"<number>"}
                                    <span className="keyword">(</span>
                                    <span className="boolean">1</span>
                                    <span className="keyword">)</span>
                                </div>
                                <div className="block">
                                    <span className="keyword">    const </span>
                                    {'limit = '}
                                    <span className="boolean">7</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="block">
                                    <span className="keyword">    const </span>
                                    {"callback"}
                                    <span className="fun"> = useCallback</span>
                                    <span className="keyword">(</span>
                                    <span className="punctuation">()</span>
                                    <span className="keyword">{' => '}</span>
                                    <span className="punctuation">{'{'}</span>
                                </div>
                                <div className="block">
                                    <span className="fun">        fetchTodos</span>
                                    <span className="keyword">(</span>
                                    {"page, limit"}
                                    <span className="keyword">)</span>
                                </div>
                                <div className="block">
                                    <span className="punctuation">{'    }, ['}</span>
                                    {"page, limit"}
                                    <span className="punctuation">{']'}</span>
                                    <span className="keyword">)</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="block">
                                    <span className="keyword">    const </span>
                                    {'intersected = '}
                                    <span className="fun">useScroll</span>
                                    <span className="keyword">(</span>
                                    {"parentRef, childRef, callback"}
                                    <span className="keyword">)</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="block">
                                    <span className="keyword">    function </span>
                                    <span className="fun">fetchTodos</span>
                                    <span className="keyword">(</span>
                                    {"page: number, limit: number"}
                                    <span className="keyword">)</span>
                                    <span className="punctuation">{' {'}</span>
                                </div>
                                <div className="block">
                                    <span className="fun">        fetch</span>
                                    <span className="keyword">(</span>
                                    <span className="string">`https://jsonplaceholder.typicode.com/todos?_limit=</span>
                                    <span className="punctuation">{'${'}</span>
                                    {'limit'}
                                    <span className="punctuation">{'}'}</span>
                                    <span className="string">&_page=</span>
                                    <span className="punctuation">{'${'}</span>
                                    {'page'}
                                    <span className="punctuation">{'}'}</span>
                                    <span className="string">`</span>
                                    <span className="keyword">)</span>
                                </div>
                                <div className="block">
                                    <span className="fun">            .then</span>
                                    <span className="keyword">(</span>
                                    {"response => response."}
                                    <span className="fun">json</span>
                                    <span className="keyword">(</span>
                                    <span className="keyword">)</span>
                                    <span className="keyword">)</span>
                                </div>
                                <div className="block">
                                    <span className="fun">            .then</span>
                                    <span className="keyword">(</span>
                                    {"json => "}
                                    <span className="punctuation">{' {'}</span>
                                </div>
                                <div className="block">
                                    <span className="fun">                setTodos</span>
                                    <span className="keyword">(</span>
                                    {"prev => "}
                                    <span className="punctuation">[</span>
                                    {'...prev, ...json'}
                                    <span className="punctuation">]</span>
                                    <span className="keyword">)</span>
                                </div>
                                <div className="block">
                                    <span className="fun">                setPage</span>
                                    <span className="keyword">(</span>
                                    {"prev => prev + 1"}
                                    <span className="keyword">)</span>
                                </div>
                                <div className="block">
                                    <span className="punctuation">{'            }'}</span>
                                    <span className="keyword">)</span>
                                </div>
                                <div className="block">
                                    <span className="punctuation">{'    }'}</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="block">
                                    <span className="keyword">    return ( </span>
                                </div>
                                <div className="block">
                                    <span className="bracket">{'        <'}</span>
                                    <span className="dbox">{'div'}</span>
                                    <span className="keyword">{' ref='}</span>
                                    {'{parentRef}'}
                                    <span className="bracket">{'>'}</span>
                                </div>
                                <div className="block">
                                    <span className="punctuation">{'            {'}</span>
                                </div>
                                <div className="block">
                                    {"                todos."}
                                    <span className="fun">{'map'}</span>
                                    <span className="keyword">(</span>
                                    {"todo =>"}
                                </div>

                                <div className="block">
                                    <span className="bracket">{'                    <'}</span>
                                    <span className="dbox">{'div'}</span>
                                    <span className="keyword">{' key='}</span>
                                    {'{todo.id}'}
                                    <span className="bracket">{'>'}</span>
                                    {"{todo.id}. {todo.title}"}
                                    <span className="bracket">{'</'}</span>
                                    <span className="dbox">{'div'}</span>
                                    <span className="bracket">{'>'}</span>
                                </div>
                                <div className="block">
                                    <span className="keyword">                )</span>
                                </div>
                                <div className="block">
                                    <span className="punctuation">{'            }'}</span>
                                </div>

                                <div className="block">
                                    <span className="bracket">{'            <'}</span>
                                    <span className="dbox">{'div'}</span>
                                    <span className="keyword">{' ref='}</span>
                                    {'{childRef}'}
                                    <span className="bracket">{'>'}</span>
                                    {"SCROLL AREA"}
                                    <span className="bracket">{'</'}</span>
                                    <span className="dbox">{'div'}</span>
                                    <span className="bracket">{'>'}</span>
                                </div>
                                <div className="block">
                                    <span className="bracket">{'        </'}</span>
                                    <span className="dbox">{'div'}</span>
                                    <span className="bracket">{'>'}</span>
                                </div>
                                <div className="block">
                                    <span className="keyword">{'    )'}</span>
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

export default UseScrillUse;