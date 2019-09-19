import React, { Component } from 'react';
import { connect } from 'react-redux'



class ToDoAdd extends Component {
    state = {}
    handleChange = e => {
        this.setState({ titre: e.target.value })
    }
    addTodo = () => {
        this.props.onAdd({...this.state})
        this.setState({ titre: '' });
        
        


    }
    render() {
        return (
            <div className='todoadd'>
                <h1 className='titre-todoadd'>Daily ToDo Lists</h1>
                <div className='btn-todoadd'>
                    <input type="text" value={this.state.titre} onChange={this.handleChange} className='title-holder' />
                    <button className='btn-add' onClick={this.addTodo}>+</button>
                </div>

            </div>
        )
    }


}


const mapDispatchToProps = dispatch => {
    return {
        onAdd: ({ titre }) => {
            dispatch({
                type: 'ADDMOVIES',
                item: {
                    id: Math.round(Math.random() * 1000),
                    titre
                }
            })

        }
    }
}
const ToDoAddFilter = connect(null, mapDispatchToProps)(ToDoAdd)
export default ToDoAddFilter;