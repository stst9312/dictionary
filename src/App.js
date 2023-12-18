import './App.css';
import {useState,useRef} from 'react';
import DicWrite from './components/dictionary'
import DicList from './components/wordlist'
import DicSearch from './components/dicsearch'

function App(){
  const[data, setData] = useState([]);
  const [result , setResult] = useState([]);
  const dataId = useRef(0)
  
  const createData = (word, explain, category)=>{
    const createDate = new Date().getTime();
    console.log(createDate)

    const newData = {
      word, explain, category,createDate,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newData, ...data]);
  }
  const removeData =(targetId)=>{
    data.map((dataItem)=>{
      dataItem.filter()
    })
    const resetData = data.filter((dataItem)=>dataItem.id !== targetId )
    setData(resetData);
  }
  const editData=(targetId, editExplain)=>{
   setData( data.map((dataItem)=>dataItem.id === targetId ? {...dataItem, explain : editExplain} : dataItem )) 
   
  }
  const searchData = (searchInput) => {
    const newDic = data.filter((dataItem)=>{return(
      dataItem.word.toLowerCase().includes(searchInput.toLowerCase()) ||
      dataItem.explain.toLowerCase().includes(searchInput.toLowerCase())
    )})
    setResult(newDic)
  }
  return(
    <div className="App">
      <DicWrite createData={createData} />
      <DicSearch searchData={searchData} />
      <DicList title="검색 결과" data={result} removeData={removeData} editData={editData} />
      <DicList title="리스트" data={data} removeData={removeData} editData={editData }/>
    </div>
  )
}

export default App;





































// import './App.css';
// import {useRef, useState} from 'react';
// import WordList from './components/wordlist'
// import Dictionary from './components/dictionary';

// function App() {
//   const [lists, setLists] = useState([])
//   const id = useRef(0);
//   function createList(word, content, category) {
//     let createDate = new Date().getTime();
//     const list = {
//       word,content,category,id : id.current, createDate
//     };
//     id.current += 1;
//     console.log(lists);
//     setLists([list, ...lists]);
//   }
//   const removeList=(targetId)=>{
//     const newLists = lists.filter((list)=>list.id !== targetId)
//     setLists(newLists)
//   }
  
//   const updateList=(targetId, contentVal)=>{
//     setLists(
//       lists.map((list)=> list.id == targetId ? {...list, content : contentVal} : list)
//     )
//   }

// return (
//   <div className="App">
//     <Dictionary createList={createList}/>
//     <WordList lists={lists} removeList={removeList} updateList={updateList} />
//   </div>
// );
// }

// export default App;