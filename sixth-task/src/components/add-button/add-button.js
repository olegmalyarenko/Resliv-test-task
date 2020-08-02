import React  from 'react'; 

const AddButton = ({submit, change, value}) => {
    
   
        
        return (
            <form 
            onSubmit={submit}>
            <input type="text" 
                   onChange={change}
                   placeholder="Новое имя"
                   value={value}
                   onChange={change}
                   />     

            <button
            className='btn btn-outline-secondary' 
            >Добавить</button>
            </form>
        )
    
}
export default AddButton;