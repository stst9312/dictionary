import './dictionitem.css'
import {useState,useRef} from "react"


const DicItem = ({ word, explain, category, createDate, id, removeData, editData }) => {
    const [editExplain, setEditExplain] = useState(explain);
    const [isEdit, setIsEdit] = useState(false);
    const textEdit = useRef();
    const changeFunc = (e)=>{
        setEditExplain(e.target.value)
    }

    const editFunc=()=>{
        setIsEdit(!isEdit)
        // textEdit.current.focus();
    }
    const removeFunc=()=>{
        if(window.confirm(`${word}를 삭제 하시겠습니까?`)){
            removeData(id);

        }

    }
    const saveFunc=()=>{
        if(editExplain.length < 5){
            alert('자세히 설명글을 작성하세요')
            textEdit.current.focus();

        }
        editData(id, editExplain);
        editFunc();
    }
    const cancleFunc=()=>{
        if(window.confirm('취소 하시겠습니까?')){
            setIsEdit(!isEdit);
            setEditExplain(explain);
        }
        
    }

    return (
        <div className="dicItem">
            <div>
                <dl>
                    <dt>
                        <span className="title">{word}</span> <span className="cate">({category})</span>
                    </dt>
                    <dd>
                        {isEdit ? <textarea value={editExplain} onChange={changeFunc} ref={textEdit} /> : explain}
                        
                    </dd>
                </dl>
                <div>
                    {isEdit ? 
                    (<div>
                        <button onClick={saveFunc}>저장</button>
                        <button onClick={cancleFunc}>취소</button>
                    </div>) : (<div>
                        <button onClick={editFunc}>수정</button>
                        <button onClick={removeFunc}>삭제</button>
                    </div>)
                    }
                    
                    
                </div>
            </div>

        </div>
    );
}

export default DicItem;








































// import '../components/dictionitem.css'
// import { useRef, useState } from 'react';

// const DictionItem = ({ id, word, category, content, createDate, removeList, updateList }) => {

//     const [contentVal, setContentVal] = useState()
//     const [edits, setEdits] = useState(false);
//     const contentRef = useRef();
//     const onChange = (e) => {
//         setContentVal(e.target.value)
//     }

//     const editFunc = () => {
//         setEdits(!edits)
//     }
//     const deleteFunc = () => {
//         if (window.confirm(`${id}번째 단어를 삭제하시겠습니까?`)) {
//             removeList(id);
//         }
//     }
//     const updateFunc = () => {
//         if (contentVal.length < 7) {
//             contentRef.current.focus();
//             return;
//         }
//         if (window.confirm(`${id}번째 단어를 수정하시겠습니까?`)) {
//             updateList(id, contentVal)
//             editFunc()
//         }
//     }

//     const cancleFunc = () => {
//         editFunc()
//         setContentVal(content)
//     }
//     return (
//         <div className="dictionItem">
//             <div key={id}>단어 : {word} | 분류 : {category}</div>
//             <div>
//                 {edits ? <textarea ref={contentRef} value={contentVal} onChange={onChange}></textarea> : content}
//             </div>
//             <div>작성일 : {new Date(createDate).toLocaleString()}</div>
//             {edits ? (
//                 <div>
//                     <button onClick={updateFunc}>수정 완료</button>
//                     <button onClick={cancleFunc}>수정 취소</button>
//                 </div>) : (
//                 <div>
//                     <button onClick={deleteFunc}>삭제하기</button>
//                     <button onClick={editFunc}>수정하기</button>
//                 </div>)
//             }

//         </div>
//     );
// }

// export default DictionItem;
