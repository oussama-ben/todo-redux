
const tabtodo=[{titre:'Watch The God Fadher 1', id:'0'}
,{titre:'Watch The God Fadher 2', id:'1'},
 {titre:'Watch The God Fadher 3', id:'2'}]

const TodoReducer=(state=tabtodo,action)=>{
if (action.type==='ADDMOVIES'){
return state.concat(action.item)
}
if (action.type==='EDITMOVIES'){
return state.map((el,index)=>index==action.id?action.item:el)


}




if (action.type==='DELETEMOVIES'){
return state.filter((el,index)=>index!==action.id)




}
if(action.type==='THROUGHITEM'){
return state.map((el,index)=>index===action.id?{titre:el.titre, test:!el.test}:el)
}
return state
}


export default TodoReducer;