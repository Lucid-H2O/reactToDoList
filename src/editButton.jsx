import PropTypes from 'prop-types'
import saveImg from './Assets/icons8-save-50.png'
import cancelImg from './Assets/icons8-cancel-96.png'
function EditButton(props){

  console.log("edit")
  const handleChange2 = (e) => {
    props.UpdateFunction( c => ({...c , label: e.target.value}));
  };

  function handleSave(){
    //replace the object to be updated
    let tempTask = props.tasks;
    let tempUpdate = props.update;
    tempTask[tempUpdate.index] = props.update;
    props.setTask(tempTask);

    props.UpdateFunction( c => ({...c , flag: false}));

  }

  function handleCancel(){
    props.UpdateFunction( c => ({...c , flag: false}));
  }

    return(<div className='card'>
    <input type='text' id="editInput" className= "editInput" value={props.update.label} onChange={handleChange2}></input>
    <div className="cardButtons">
                <button className='cardButtonItem' onClick={handleSave}>
                <img src={saveImg} className='image'/>
                </button>
                <button className='cardButtonItem' onClick={handleCancel}>
                    <img src={cancelImg} className='image'/>
                </button>
            </div>
    </div>)
}
EditButton.propTypes={
    isChecked: PropTypes.bool,
}

export default EditButton;

