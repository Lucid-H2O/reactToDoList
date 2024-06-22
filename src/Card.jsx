import deleteImg from './Assets/trash.820x1024.png'
import editImg from './Assets/edit.1024x1024.png'
export default function Card(props){

    function updateTaskChecked(e){
         props.tasks.isChecked = e.target.checked;
    }
    console.log("card");

    return(
        <div className = 'card'>
            <input type="checkbox" className="selectBox" onChange={updateTaskChecked} />
            <input type='form' className='cardText' id={props.idx} value={props.tasks.label ? props.tasks.label : null} disabled={true}></input>
            <div className="cardButtons">
                <button className='cardButtonItem' onClick={props.editTaskFunction}>
                <img src={editImg} className='image'/>
                </button>
                <button className='cardButtonItem' onClick={props.removeTaskFunction}>
                    <img src={deleteImg} className='image'/>
                </button>
            </div>
        </div>
    )
}

