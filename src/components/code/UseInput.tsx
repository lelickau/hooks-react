import React, { FC } from 'react';

const UseInput: FC = () => {
    return (
        <div>
            <pre>
                <code>
                    <span className="keyword">import </span>
                    <span className="punctuation">{' { '}</span>
                    {'RefObject, useEffect, useRef'}
                    <span className="punctuation">{' } '}</span>
                    <span className="keyword"> from </span>
                    <span className="string">'react'</span>
                    <div className="box">
                        <span className="keyword">interface </span>
                        {'IValidation'}
                        <span className="punctuation">{' { '}</span>
                        <br />{'    minLength:'}<span className="punctuation"> number</span>{';'}
                        <br />{'    isEmpty:'}<span className="punctuation"> boolean</span>{';'}
                        <br />{'    isEmail?:'}<span className="punctuation"> boolean</span>{';'}
                        <br /><span className="punctuation">{'} '}</span>
                    </div>
                    {/* useValidation */}
                    <div className="box">
                        <div className="block">
                            <span className="keyword">const </span>
                            <span className="fun">useValidationForm = </span>
                            <span className="punctuation">(</span>
                            {'value: any, validations: IValidation'}
                            <span className="punctuation">)</span>
                            <span className="keyword">{' => '}</span>
                            <span className="punctuation">{'{'}</span>
                        </div>
                        <div className="block">
                            <span className="keyword">    const [ </span>
                            {'isEmpty, setEmpty'}
                            <span className="keyword"> ] </span>
                            <span className="fun">= useState</span>
                            <span className="keyword">(</span>
                            <span className="boolean">true</span>
                            <span className="keyword">)</span>
                        </div>
                        <div className="block">
                            <span className="keyword">    const [ </span>
                            {'minLengthErr, setMinLengthErr'}
                            <span className="keyword"> ] </span>
                            <span className="fun">= useState</span>
                            <span className="keyword">(</span>
                            <span className="boolean">false</span>
                            <span className="keyword">)</span>
                        </div>
                        <div className="block">
                            <span className="keyword">    const [ </span>
                            {'emailErr, setEmailErr'}
                            <span className="keyword"> ] </span>
                            <span className="fun">= useState</span>
                            <span className="keyword">(</span>
                            <span className="boolean">false</span>
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
                                <span className="keyword">        for</span>
                                <span className="punctuation"> (</span>
                                <span className="keyword">const </span>
                                {'validation '}
                                <span className="fun">in</span>
                                {' validations'}
                                <span className="punctuation">)</span>
                                <span className="punctuation">{' {'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">            switch (</span>
                                {'validation'}
                                <span className="keyword">)</span>
                                <span className="keyword">{' {'}</span>
                            </div>
                            <div className="block">
                                <span className="keyword">                case </span>
                                <span className="string">'minLength'</span>
                                {':'}
                            </div>

                            <div className="block">
                                {'                    value.length'}
                                <span className="keyword">{' < '}</span>
                                {'validations'}
                                <span className="keyword">[</span>
                                {'validation'}
                                <span className="keyword">]</span>
                                <span className="keyword"> ? </span>
                                <span className="fun">setMinLengthErr</span>
                                <span className="keyword">(</span>
                                <span className="boolean">true</span>
                                <span className="keyword">)</span>
                                <span className="keyword"> : </span>
                                <span className="fun">setMinLengthErr</span>
                                <span className="keyword">(</span>
                                <span className="boolean">false</span>
                                <span className="keyword">)</span>
                            </div>
                            <div className="block">
                                <span className="keyword">                    break;</span>
                            </div>

                            <div className="block">
                                <span className="keyword">                case</span>
                                <span className="string">'isEmpty'</span>
                                {':'}
                            </div>
                            <div className="block">
                                {'                    value'}
                                <span className="keyword"> ? </span>
                                <span className="fun">setEmpty</span>
                                <span className="keyword">(</span>
                                <span className="boolean">false</span>
                                <span className="keyword">)</span>
                                <span className="keyword"> : </span>
                                <span className="fun">setEmpty</span>
                                <span className="keyword">(</span>
                                <span className="boolean">true</span>
                                <span className="keyword">)</span>
                            </div>
                            <div className="block">
                                <span className="keyword">                    break;</span>
                            </div>

                            <div className="block">
                                <span className="keyword">                case</span>
                                <span className="string">'isEmail'</span>
                                {':'}
                            </div>

                            <div className="block">
                                <span className="keyword">                    const </span>
                                {'re'}
                                <span className="keyword"> = {'/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/    '}</span>
                            </div>
                            <div className="block">
                                {'                    re'}
                                <span className="keyword">.test(String</span>
                                <span className="punctuation">(</span>
                                {'value'}
                                <span className="punctuation">)</span>
                                <span className="keyword">.toLowerCase</span>
                                <span className="punctuation">(</span>
                                <span className="punctuation">)</span>
                                <span className="keyword">)</span>
                                <span className="keyword"> ? </span>
                                <span className="fun">setEmailErr</span>
                                <span className="keyword">(</span>
                                <span className="boolean">false</span>
                                <span className="keyword">)</span>
                                <span className="keyword"> : </span>
                                <span className="fun">setEmailErr</span>
                                <span className="keyword">(</span>
                                <span className="boolean">true</span>
                                <span className="keyword">)</span>
                            </div>
                            <div className="block">
                                <span className="keyword">                    break;</span>
                            </div>
                            <div className="block">
                                <span className="keyword">{'            }'}</span>
                            </div>
                            <div className="block">
                                <span className="punctuation">{'        }'}</span>
                            </div>
                            <div className="block">
                                <span className="punctuation">{'    }'}</span>
                                <span className="keyword">, [</span>
                                {'value'}
                                <span className="keyword">{']'}</span>
                                <span className="keyword">)</span>
                            </div>

                        </div>

                        <div className="box">
                            <div className="block">
                                <span className="keyword">{'    return {'}</span>
                            </div>
                            <div className="block">
                                {'        isEmpty,'}
                                <br />{'        minLengthErr,'}
                                <br />{'        emailErr,'}
                            </div>
                            <div className="block">
                                <span className="keyword">{'    }'}</span>
                            </div>
                        </div>
                        <div className="block">
                            <span className="punctuation">{'}'}</span>
                        </div>
                    </div>

                    {/* useInput */}
                    <div className="box">
                        <div className="block">
                            <span className="keyword">export const </span>
                            <span className="fun">useInput = </span>
                            <span className="punctuation">(</span>
                            {'initialValue: string, validations: IValidation'}
                            <span className="punctuation">)</span>
                            <span className="keyword">{' => '}</span>
                            <span className="punctuation">{'{'}</span>
                        </div>
                        <div className="block">
                            <span className="keyword">    const [ </span>
                            {'isDirty, setDirty'}
                            <span className="keyword"> ] </span>
                            <span className="fun">= useState</span>
                            <span className="keyword">(</span>
                            <span className="boolean">false</span>
                            <span className="keyword">)</span>
                        </div>
                        <div className="block">
                            <span className="keyword">    const [ </span>
                            {'value, setValue'}
                            <span className="keyword"> ] </span>
                            <span className="fun">= useState</span>
                            <span className="keyword">(</span>
                            {'initialValue'}
                            <span className="keyword">)</span>
                        </div>
                        <div className="block">
                            <span className="keyword">    const </span>
                            {'valid'}
                            <span className="fun"> = useValidationForm</span>
                            <span className="keyword">(</span>
                            {'value, validations'}
                            <span className="keyword">)</span>
                        </div>
                        <div className="box">
                            <div className="block">
                                <span className="keyword">    const </span>
                                <span className="fun">onChange = </span>
                                <span className="punctuation">(</span>
                                {'e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>'}
                                <span className="punctuation">)</span>
                                <span className="keyword">{' => '}</span>
                                <span className="punctuation">{'{'}</span>
                            </div>
                            <div className="block">
                                <span className="fun">{'        setValue'}</span>
                                <span className="keyword">(</span>
                                {'e.target.value'}
                                <span className="keyword">)</span>
                            </div>
                            <div className="block">
                                <span className="punctuation">{'    }'}</span>
                            </div>
                        </div>

                        <div className="box">
                            <div className="block">
                                <span className="keyword">    const </span>
                                <span className="fun">onBlur = </span>
                                <span className="punctuation">(</span>
                                {'e: FocusEvent<HTMLInputElement>'}
                                <span className="punctuation">)</span>
                                <span className="keyword">{' => '}</span>
                                <span className="punctuation">{'{'}</span>
                            </div>
                            <div className="block">
                                <span className="fun">{'        setDirty'}</span>
                                <span className="keyword">(</span>
                                <span className="boolean">true</span>
                                <span className="keyword">)</span>
                            </div>
                            <div className="block">
                                <span className="punctuation">{'    }'}</span>
                            </div>
                        </div>

                        <div className="box">
                            <div className="block">
                                <span className="keyword">    const </span>
                                <span className="fun">resetValue = </span>
                                <span className="punctuation">(</span>
                                <span className="punctuation">)</span>
                                <span className="keyword">{' => '}</span>
                                <span className="punctuation">{'{'}</span>
                            </div>
                            <div className="block">
                                <span className="fun">{'        setValue'}</span>
                                <span className="keyword">(</span>
                                {'initialValue'}
                                <span className="keyword">)</span>
                            </div>
                            <div className="block">
                                <span className="punctuation">{'    }'}</span>
                            </div>
                        </div>

                        <div className="box">
                            <div className="block">
                                <span className="keyword">{'    return {'}</span>
                            </div>
                            <div className="block">
                                {'        value,'}
                                <br />{'        onChange,'}
                                <br />{'        onBlur,'}
                                <br />{'        isDirty,'}
                                <br />{'        resetValue,'}
                                <br />{'        ...valid'}
                            </div>
                            <div className="block">
                                <span className="keyword">{'    }'}</span>
                            </div>
                        </div>
                        <div className="block">
                            <span className="punctuation">{'}'}</span>
                        </div>
                    </div>
                </code>
            </pre>
        </div>
    );
};

export default UseInput;