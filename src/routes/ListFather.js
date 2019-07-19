import React from 'react';
import {connect} from 'dva';
import List from '../components/List';

// const Lists=({dispatch,list})=>{
//   function addList(value){
//     dispatch({
//       type:'list/addAfterSecond',
//       payload:value,
//     })
//   }
//   function delList(id){
//     dispatch({
//       type:'list/delete',
//       payload:id
//     })
//   }
//   return(
//     <div>
//       <h2>List of Product</h2>
//       <List  lists={list} delList={delList}  addList={addList}></List>
//     </div>
//   )
// }
function Lists({dispatch,list}) {

  function delList(id){
    dispatch({
      type:'list/delete',
      payload:id
    })
  }
  function addList(value){
    dispatch({
      type:'list/addAfterSecond',
      payload:value,
    })
  }
    return(
      <div>
      <h2>List of Product</h2>
      <List  lists={list} delList={delList}  addList={addList}></List>
    </div>
    )
}
export default connect(({list})=>{
  return ({ list });
})(Lists)
