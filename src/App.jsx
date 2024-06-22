import Card from "./Card";
import {useState} from "react";
import Button from "./Button";
import EditButton from "./editButton";

function App() {

  console.log("app")
  
  const [Tasks, setTasks] = useState([{index: 0, label:"homework", isChecked:null},
                                      {index: 1, label:"project", isChecked:null},
                                      {index: 2, label:"lecture", isChecked:null}])

  const [Update, setUpdate] = useState({index:-1,label:'',flag:false})

  function HandlerRemoveTask(index){
    setTasks(Tasks.filter((_,i)=>i !== index));
  }

  function HandlerEditTask(idx){
    var UpdateTasks = [...Tasks];
    setUpdate({index:idx, label: UpdateTasks[idx].label, flag : true});
  }
  
  return (
  <div>
    <h1>To Do List</h1>
    <ul >
        {Tasks.map((taskLabels,index)=> <Card id="listElements" key={index} tasks={taskLabels} idx={index} editTaskFunction={()=>HandlerEditTask(index)} removeTaskFunction={()=> HandlerRemoveTask(index)}></Card>)}
    </ul>
    {Update.flag ? <EditButton update={Update} UpdateFunction={setUpdate} tasks={Tasks} setTask={setTasks}/>:<Button setTask={setTasks} tasks={Tasks}/> }  
  </div>
  );


}

export default App;
