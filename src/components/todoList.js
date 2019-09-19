import React from 'react';
import TodoItem from './todoItem';
import {connect} from 'react-redux';


const TodoList =({tabtodo})=>{
    return(
        <div >
            {tabtodo.map((el,index)=><TodoItem key={index} item={el} id={index} />)}

        </div>
    )
}

const mapStateToProps=state=>{
    return{
        tabtodo:state.TodoReducer
    }
}
const TodoListFilter=connect(mapStateToProps)(TodoList)

export default TodoListFilter;