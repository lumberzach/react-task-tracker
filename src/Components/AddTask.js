import {useState} from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [description, setDescription] = useState('')
    const [owner, setOwner] = useState('')
    const [reminder, setRemindOwner] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add an item')
            return
        }
        onAdd({ text, description, owner, reminder })

        setText('')
        setDescription('')
        setOwner('')
        setRemindOwner(false)

    }

    return (
        <form className='add-form' onSubmit= {onSubmit}>
            <div className='form-control'>
                <label>Item</label>
                <input 
                type='text' 
                placeholder='Add Item'
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input 
                type='text' 
                placeholder='Details about the item i.e 4 person tent' 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            
            <div className='form-control'>
                <label>Owner</label>
                <input 
                type='text' 
                placeholder="Who's bringing this?"
                value={owner} 
                onChange={(e) => setOwner(e.target.value)}
                />
            </div>

            <div className='form-control form-control-check'>
                <label>Remind Owner</label>
                <input 
                type='checkbox'
                checked={reminder}
                value={reminder} 
                onChange={(e) => setRemindOwner(e.target.checked)}
                />   
            </div>
            <input 
            type='submit' 
            value='Submit Item' 
            className='btn btn-block' 
            
            />

        </form>
    )
}

export default AddTask
