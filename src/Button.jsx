
import PropTypes from 'prop-types'

function Button(props){
    console.log("button")

    function HandlerAddTask(e){
        const NewTask = document.getElementById("textInput").value;
        document.getElementById("textInput").value = "";
        props.setTask(f => [...f,{index: props.idx,label:`${NewTask}`,isChecked:false}]);
    }

    function HandlerDeleteTask(){
        const elements = document.getElementsByClassName("selectBox");
        for (let i = 0; i < elements.length; i++) {
            elements[i].checked = false;
        }
        props.setTask(props.tasks.filter(task => (task.isChecked !== true)))
    }

    return(<div className='inputButtons'>
    <input type='text' id="textInput" className= "textInput" placeholder='add new task'></input>
    <button className='button' onClick={HandlerAddTask}>Add Task</button>
    <button className='button' onClick={HandlerDeleteTask}>Delete Task</button>
    </div>)
}
Button.propTypes={
    isChecked: PropTypes.bool,
}

export default Button;

