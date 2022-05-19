import React, { FC } from 'react';

const UseDebounceUse: FC = () => {
    return (
        <pre>
                    <code>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">import </span>
                                {'React, '}
                                <span className="punctuation">{' { '}</span>
                                {'ChangeEvent, FC, useState'}
                                <span className="punctuation">{' } '}</span>
                                <span className="keyword"> from </span>
                                <span className="string">'react'</span>
                            </div>
                            <div className="block">
                                <span className="keyword">import </span>
                                <span className="punctuation">{' { '}</span>
                                {'useDebounce'}
                                <span className="punctuation">{' } '}</span>
                                <span className="keyword"> from </span>
                                <span className="string">'hooks/useDebounce'</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">const </span>
                                <span className="fun">Debounce: </span>
                                {'FC = '}
                                <span className="punctuation">(</span>
                                <span className="punctuation">)</span>
                                <span className="keyword">{' => '}</span>
                                <span className="punctuation">{'{'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">    const </span>
                                <span className="keyword">[</span>
                                {'value, setValue'}
                                <span className="keyword">]</span>
                                <span className="fun"> = useState</span>
                                <span className="keyword">(</span>
                                <span className="string">""</span>
                                <span className="keyword">)</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">    const </span>
                                {'debouncedSearch = '}
                                <span className="fun">useDebounce</span>
                                <span className="keyword">(</span>
                                {"search, "}
                                <span className="boolean">500</span>
                                <span className="keyword">)</span>
                            </div>
                            <div className="box">
                                <div className="block">
                                    <span className="keyword">    function </span>
                                    <span className="fun">search</span>
                                    <span className="keyword">(</span>
                                    {"query: string"}
                                    <span className="keyword">)</span>
                                    <span className="punctuation">{' {'}</span>
                                </div>
                                <div className="block">
                                    <span className="fun">        fetch</span>
                                    <span className="keyword">(</span>
                                    <span className="string">`https://jsonplaceholder.typicode.com/todos?query=</span>
                                    <span className="punctuation">{'${'}</span>
                                    {'query'}
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
                                    {"json => console.log(json)"}
                                </div>
                                <div className="block">
                                    <span className="punctuation">{'    }'}</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="block">
                                    <span className="keyword">    const </span>
                                    {"onChange = "}
                                    <span className="keyword">(</span>
                                    {"e: ChangeEvent<HTMLInputElement>"}
                                    <span className="keyword">)</span>
                                    <span className="keyword">{' => '}</span>
                                    <span className="punctuation">{'{'}</span>
                                </div>
                                <div className="block">
                                    <span className="fun">        setValue</span>
                                    <span className="keyword">(</span>
                                    {"e.target.value"}
                                    <span className="keyword">)</span>
                                </div>
                                <div className="block">
                                    <span className="fun">        debouncedSearch</span>
                                    <span className="keyword">(</span>
                                    {"e.target.value"}
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
                                    <span className="dbox">{'input'}</span>
                                    <span className="keyword">{' type='}</span>
                                    {'"text" '}
                                    <span className="keyword">{' value='}</span>
                                    {'{value} '}
                                    <span className="keyword">{' onChange='}</span>
                                    {'{onChange} '}
                                    <span className="bracket">{'/>'}</span>
                                </div>
                                <div className="block">
                                    <span className="keyword">{'    )'}</span>
                                </div>
                                <div className="block">
                                    <span className="punctuation">{'}'}</span>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
    );
};

export default UseDebounceUse;