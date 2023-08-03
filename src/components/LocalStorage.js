import React, { useState } from 'react'

function LocalStorage(key, defualtValue) {
    const storedValue = localStorage.getItem(key)
    const initial = storedValue ? JSON.parse(storedValue) : defualtValue
    const [value, setValue] = useState(initial)
    
  const updateLocalStorage = (newValue) =>{
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }
  return [value, updateLocalStorage]
  
}

export default LocalStorage