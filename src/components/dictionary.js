import './dictionary.css';
import {useRef, useState} from 'react';
const DicWrite = ({createData}) => {
    const wordRef = useRef();
    const explainRef = useRef();
    const [state, setState] = useState({
        word : '',
        explain : '',
        category : 'react',
    });
    console.log(wordRef);
    const changeFunc = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })

    };

    const submitFunc = () => {
        if(state.word.length < 2){
            alert('단어를 확인하세요')
            wordRef.current.focus()
            return;
        }
        if(state.explain.length<10){
            alert('설명글을 확인하세요')
            explainRef.current.focus()
            return;
        }

        createData(state.word, state.explain, state.category);
        alert('저장 성공');
        setState({
            word:'',
            explain:'',
            category:'react'
        })
    }
    return (
        <div className="dicWrite">
            <h2>프론트엔드 사전</h2>
            <div>
                <dl>
                    <dt>
                        <input ref={wordRef} type="text" placeholder="단어" name="word" value={state.word} onChange={changeFunc} />
                    </dt>
                    <dd>
                        <textarea ref={explainRef} placeholder="설명" name="explain" value={state.explain} onChange={changeFunc} />
                    </dd>
                </dl>
                <div>
                    <span>분류 : </span>
                    <select name="category" value={state.category} onChange={changeFunc}>
                        <option value={'react'}>react</option>
                        <option value={'node'}>node</option>
                        <option value={'js'}>js</option>
                        <option value={'css'}>css</option>
                        <option value={'html'}>html</option>
                    </select>
                  <button onClick={submitFunc}>저장</button>
                </div>

            </div>
        </div>
    );
}

export default DicWrite;




































// import '../components/dictionary.css';
// import React from 'react'
// import { useRef, useState } from 'react'




// const Dictionary = ({createList}) => {
//     const wordInput = useRef();
//     const contentInput = useRef();

//     const [diction, setDiction] = useState({
//         word: '',
//         content: '',
//         category: '',
//     });
//     const changeState = (e) => {
//         setDiction({
//             ...diction,
//             [e.target.name]: e.target.value
//         })
//     };
//     const save = () => {
//         if (diction.word.length < 1) {
//             alert('단어를 2글자 이상 작성하시오')
//             wordInput.current.focus();
//             return;
//         }
//         if (diction.content.length < 1) {
//             alert('설명을 7자 이상 작성하시오')
//             contentInput.current.focus();
//             return;
//         }
//         // console.log(diary)
//         createList(diction.word, diction.content, diction.category)
//         setDiction({
//             word: '',
//             content: '',
//             category: '',
//         })
//     }
//     console.log(diction.word)
    


//     return ( 
//         <div className="dictionary">
//             <h2>프론트 엔드 사전</h2>
//             <input name="word" placeholder="단어" ref={wordInput} value={diction.word} onChange={changeState} />
//             <textarea name="content" placeholder="설명" ref={contentInput} value={diction.content} onChange={changeState}></textarea>
//             <div>분류 : 
//                 <select name="category" value={diction.category} onChange={changeState}>
//                     <option>선택하기</option>
//                     <option>html</option>
//                     <option>css</option>
//                     <option>javascript</option>
//                     <option>node.js</option>
//                     <option>react</option>
//                 </select>
//                 <button onClick={save}>저장하기</button>
//             </div>

//         </div>
//      );

//     }
// export default Dictionary;