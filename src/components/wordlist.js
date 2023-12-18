import './wordlist.css'
import DicItem from "./dictionitem";
const DicList = ({title, data, removeData, editData}) => {
    return ( 
        <div className="diclist">
            <h2>{title}</h2>
            <h4>{data.length}개의 리스트가 있습니다.</h4>
            <div>
                {data.map((dataItem)=>(
                    // dataItem.word
                    <DicItem key={dataItem.id} {...dataItem} removeData={removeData} editData={editData}/>
                ))}
            </div>
        </div>
     );
}
 
export default DicList;




































// import '../components/wordlist.css';
// import DictionItem from './dictionitem';


// const WordList = ({lists, removeList, updateList}) => {
//     return ( 
//         <div className="wordList">
//             <h2>단어 리스트</h2>
//             <h5>{lists.length}개의 단어가 있습니다.</h5>
//             {lists.map((list)=>(
//                 <DictionItem key={list.id} {...list} removeList={removeList} updateList={updateList} />
//             ))}
//         </div>
//      );
// }
 
// export default WordList;

