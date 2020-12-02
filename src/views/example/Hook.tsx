import React, { useReducer, createRef } from "react"
export default () => {
  const [user, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'SET_NAME':
        return {...state, name: action.name}
      case 'SET_AGE':
        return {...state, age: action.age}
    }
  }, {name: '', age: null});
  const nameRef: any = createRef();
  const ageRef: any = createRef();
  const setValue = (type: string) => {
    if(type === 'name') {
      const value = nameRef.current.value;
      dispatch({type: 'SET_NAME', name: value})
      nameRef.current.focus();
      nameRef.current.value = '';
    }
    if(type === 'age') {
      const value = ageRef.current.value;
      dispatch({type: 'SET_AGE', age: value})
      ageRef.current.focus();
      ageRef.current.value = '';
    }
  }

  return (
    <>
      <div className="use-reducer">
        <p>useReducer</p>
        <p>name: {user.name}</p>
        <p>age: {user.age}</p>
        <p>
          <input type="text" placeholder="请输入name" ref={nameRef} style={{background: '#fff', border: '1px solid #666'}}/>
          <button onClick={() => {setValue('name')}}>使用useReducer改变name</button>
        </p>
        <p>
          <input type="text" placeholder="请输入age" ref={ageRef} style={{background: '#fff', border: '1px solid #666'}}/>
          <button onClick={() => {setValue('age')}}>使用useReducer改变age</button>
        </p>
      </div>

    </>
  )
}