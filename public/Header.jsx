import React, { useState } from 'react'

const Header = ({ todos, setFilteredTodos }) => {
  const [button, setButton] = useState(false)
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState("All")

  const buttonClicked = () => {
    setButton(!button)
  }

  const handleFilter = (type) => {
    setFilterType(type)
    setButton(false)

    let filtered = todos

    if (type === "Completed") {
      filtered = todos.filter((todo) => todo.isChecked)
    } else if (type === "Pending") {
      filtered = todos.filter((todo) => !todo.isChecked)
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    setFilteredTodos(filtered)
  }

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)

    let filtered = todos

    if (filterType === "Completed") {
      filtered = todos.filter((todo) => todo.isChecked)
    } else if (filterType === "Pending") {
      filtered = todos.filter((todo) => !todo.isChecked)
    }

    if (value.trim() !== "") {
      filtered = filtered.filter((todo) =>
        todo.title.toLowerCase().includes(value.toLowerCase())
      )
    }

    setFilteredTodos(filtered)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            left: '15vw',
            position: 'relative',
            gap: '10px',
            marginTop: '10px',
            alignItems: 'center',
            border: '2px solid black',
            paddingLeft: '5px',
            width: '40vw',
            height: '40px',
            borderRadius: '10px',
            boxShadow: '1px 1px 1px grey',
            backgroundColor: 'whitesmoke'
          }}>
          <img src='./public/searchlogo.svg' style={{ width: '30px', height: "30px", backgroundColor: 'whitesmoke' }} />
          <input
            type='text'
            placeholder='Search your todo'
            value={search}
            onChange={handleSearch}
            style={{
              width: '100%',
              padding: '5px',
              borderLeft: '1px solid black',
              fontSize: '20px',
              borderTop: '0px',
              borderBottom: '0px',
              borderRight: '0px',
              height: '100%',
              borderRadius: '0px 10px 10px 0px'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', position: 'relative', left: '15vw', marginTop: '10px' }}>
          <div
            onClick={buttonClicked}
            style={{
              width: '120px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: '#6057fdff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '30px',
              fontSize: '18px',
              color: 'whitesmoke',
              padding: '5px',
              cursor: 'pointer'
            }}>
            {filterType}
            <hr style={{ backgroundColor: 'transparent', height: '14px', marginLeft: '10px', marginRight: '5px' }} />
            {!button? <img src='./public/Down.svg' style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
              : <img src='./public/Up.svg' style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />}
          </div>

          {button && (
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '10px',
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '5px',
                boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
                width: '120px',
                zIndex: 10,
              }}
            >
              <div style={{ padding: '8px', cursor: 'pointer' }} onClick={() => handleFilter("All")}>All</div>
              <div style={{ padding: '8px', cursor: 'pointer' }} onClick={() => handleFilter("Completed")}>Completed</div>
              <div style={{ padding: '8px', cursor: 'pointer' }} onClick={() => handleFilter("Pending")}>Pending</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
