import React, { useState } from 'react'

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !desc.trim()) {
      alert('Both Title and Description are required!')
      return
    }
    const newTodo = { id: Date.now(), title, desc, isChecked: false }
    onAddTodo(newTodo)
    setTitle('')
    setDesc('')
  }

  return (
    <div style={{border:'3px solid black',background:'linear-gradient(135deg,#f8f8f8,#e3e3e3)',borderRadius:'12px',boxShadow:'0px 4px 6px rgba(0,0,0,0.2)',marginTop:'30px',width:'750px',padding:'15px 0 25px 0',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'14px',width:'100%'}}>
        
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'85%'}}>
          <label style={{fontWeight:'bold',fontSize:'18px',marginRight:'8px'}}>Title:</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter todo title" 
            style={{flex:1,height:'42px',borderRadius:'10px',border:'2px solid #444',paddingLeft:'12px',fontSize:'18px',boxShadow:'inset 0px 2px 4px rgba(0,0,0,0.1)',marginLeft:'10px'}} />
        </div>

        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',width:'85%'}}>
          <label style={{fontWeight:'bold',fontSize:'18px',marginRight:'8px'}}>Description:</label>
          <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Enter todo description" 
            style={{flex:1,minHeight:'90px',borderRadius:'10px',border:'2px solid #444',padding:'10px',fontSize:'18px',boxShadow:'inset 0px 2px 4px rgba(0,0,0,0.1)',marginLeft:'10px'}}></textarea>
        </div>

        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'15px',marginTop:'15px',background:'linear-gradient(135deg,#2a27cc,#4a47ff)'}}>
          <button type="submit" 
            style={{width:'120px',height:'42px',borderRadius:'10px',border:'none',background:'linear-gradient(135deg,#4a47ff,#2a27cc)',color:'white',fontWeight:'bold',letterSpacing:'1px',fontSize:'18px',cursor:'pointer',transition:'0.3s ease',boxShadow:'0px 3px 5px rgba(0,0,0,0.2)'}}>
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo
