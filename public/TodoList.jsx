import React, { useState } from 'react'

const TodoList = (props) => {
  const [button, setButton] = useState(false)

  const buttonClicked = () => {
    setButton(!button)
  }

  return (
    <div
      style={{
        width: '65vw',
        margin: '15px auto',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        backgroundColor: props.isChecked ? '#f0fdf4' : '#ffffff',
        border: props.isChecked ? '2px solid #34d66fff' : '2px solid #e5e7eb',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 20px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <input
            type="checkbox"
            checked={props.isChecked}
            onChange={props.onToggle}
            style={{
              width: '20px',
              height: '20px',
              cursor: 'pointer',
              accentColor: '#2563eb',
            }}
          />
          <h3
            style={{margin: 0,fontSize: '18px',fontWeight: '600',color: props.isChecked ? '#6b7280' : '#111827',textDecoration: props.isChecked ? 'line-through' : 'none',transition: 'color 0.3s ease',
            }}
          >{props.title}</h3>
        </div>
        <div onClick={buttonClicked} style={{cursor: 'pointer',padding: '6px',borderRadius: '50%',transition: 'background 0.2s ease',}}
        >{!button ? (
            <img src="./public/Down.svg" style={{ width: '20px', height: '20px' }} />
          ) : (
            <img src="./public/Up.svg" style={{ width: '20px', height: '20px' }} />
          )}
        </div>
      </div>

      {button && (
        <div
          style={{
            fontSize: '16px',
            padding: '12px 20px',
            borderTop: '1px solid #e5e7eb',
            borderRadius: '0px 0px 12px 12px',
            backgroundColor: '#f9fafb',
            color: '#374151',
          }}
        >
          <strong style={{ marginRight: '6px', color: '#111827' }}>
            Description:
          </strong>
          {props.desc}
        </div>
      )}
    </div>
  )
}

export default TodoList
