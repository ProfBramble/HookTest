import { delay } from "_redux-saga@0.16.2@redux-saga";
export default {
  namespace:'list',
  state:[
    {id:1,content:'我是第一条消息'},
    {id:2,content:'我是第二条消息'}
  ],
  reducers:{
    delete(state, { payload: id }){
      // console.log("要删除的编号"+id);
      return state.filter(item => item.id !== id);
    },
    add(state,{payload:value}){
      return [...state,{id:state.length+1,content:value}];
    }
  },
  effects:{
    *addAfterSecond({payload:value},{put,call}){
      yield call(delay,1000);
      yield put({type:'add',payload:value});
    }
  }
}
