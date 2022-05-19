import React, { FC } from 'react';

const UseInputUse: FC = () => {
    return (
        <pre>
                <code>
                    
                    <div className="block">
                        <div className="block">
                            <span className="keyword">import </span>
                            {'React, '}
                            <span className="punctuation">{' { '}</span>
                            {'FC, MouseEvent, useState'}
                            <span className="punctuation">{' } '}</span>
                            <span className="keyword"> from </span>
                            <span className="string">'react'</span>
                        </div>
                        <div className="block">
                        <span className="keyword">import </span>
                            <span className="punctuation">{' { '}</span>
                            {'useInput'}
                            <span className="punctuation">{' } '}</span>
                            <span className="keyword"> from </span>
                            <span className="string">'hooks/useInput'</span>
                        </div>
                    </div>

                        <div className="box">
                            <div className="block">
                                <span className="keyword">const </span>
                                <span className="fun">Form: </span>
                                {'FC = '}
                                <span className="punctuation">(</span>
                                <span className="punctuation">)</span>
                                <span className="keyword">{' => '}</span>
                                <span className="punctuation">{'{'}</span>
                            </div>
                        </div>

                        <div className="block">
                            <span className="keyword">    const </span>
                            {'email ='}
                            <span className="fun"> useInput</span>
                            <span className="keyword">(</span>
                            <span className="string">''</span>
                            {', '}
                            <span className="punctuation">{'{'}</span>
                            {'isEmpty: true, minLength: 7, isEmail: false'}
                            <span className="punctuation">{'}'}</span>
                            <span className="keyword">)</span>
                        </div>

                        <div className="block">
                            <span className="keyword">    const </span>
                            {'password ='}
                            <span className="fun"> useInput</span>
                            <span className="keyword">(</span>
                            <span className="string">''</span>
                            {', '}
                            <span className="punctuation">{'{'}</span>
                            {'isEmpty: true, minLength: 6'}
                            <span className="punctuation">{'}'}</span>
                            <span className="keyword">)</span>
                        </div>

                        <div className="box">
                            <div className="block">
                                <span className="keyword">    return ( </span>
                            </div>
                            <div className="block">
                                <span className="bracket">{'        <'}</span>
                                <span className="dbox">{'form'}</span>
                                <span className="bracket">{'>'}</span>
                            </div>
                            <div className="block">
                                <span className="bracket">{'            <'}</span>
                                <span className="dbox">{'input'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">{'                value='}</span>
                                {'{email.value}'}
                            </div>
                            <div className="block">
                                <span className="keyword">{'                onChange='}</span>
                                {'{'}
                                <span className="punctuation">(</span>
                                {'e: React.ChangeEvent<HTMLInputElement>'}
                                <span className="punctuation">)</span>
                                {' => email.'}
                                <span className="fun">onChange</span>
                                {'(e)}'}
                            </div>
                            <div className="block">
                                <span className="keyword">{'                onBlur='}</span>
                                {'{'}
                                <span className="punctuation">(</span>
                                {'e: React.FocusEvent<HTMLInputElement>'}
                                <span className="punctuation">)</span>
                                {' => email.'}
                                <span className="fun">onBlur</span>
                                {'(e)}'}
                            </div>
                            <div className="block">
                                <span className="keyword">{'                type='}</span>
                                <span className="string">{'"email"'}</span>
                            </div>
                            <div className="block">
                                <span className="bracket">{'            />'}</span>
                            </div>

                            {/* input pass */}
                            <div className="block">
                                <span className="bracket">{'            <'}</span>
                                <span className="dbox">{'input'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">{'                value='}</span>
                                {'{password.value}'}
                            </div>
                            <div className="block">
                                <span className="keyword">{'                onChange='}</span>
                                {'{'}
                                <span className="punctuation">(</span>
                                {'e: React.ChangeEvent<HTMLInputElement>'}
                                <span className="punctuation">)</span>
                                {' => password.'}
                                <span className="fun">onChange</span>
                                {'(e)}'}
                            </div>
                            <div className="block">
                                <span className="keyword">{'                onBlur='}</span>
                                {'{'}
                                <span className="punctuation">(</span>
                                {'e: React.FocusEvent<HTMLInputElement>'}
                                <span className="punctuation">)</span>
                                {' => password.'}
                                <span className="fun">onBlur</span>
                                {'(e)}'}
                            </div>
                            <div className="block">
                                <span className="keyword">{'                type='}</span>
                                <span className="string">{'"password"'}</span>
                            </div>
                            <div className="block">
                                <span className="bracket">{'            />'}</span>
                            </div>

                            <div className="block">
                                <span className="bracket">{'        </'}</span>
                                <span className="dbox">{'form'}</span>
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

export default UseInputUse;