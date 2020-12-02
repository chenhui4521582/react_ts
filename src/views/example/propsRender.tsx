import React, {useState} from "react"

const Cat = (props: any) => {
  const {x, y} = props.position;
  return (
  <div className="cat">x: {x}, y: {y}</div>
  )
}

const MouseWith = (props: any) => {
  const [position, setPosition] = useState<i_position>({x: 0, y: 0})
  const handMouse = (e: any) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }
  return (
    <div className="mouse" style={{height: '100vh'}} onMouseMove={handMouse}>
      {props.children(position)}
    </div>
  )
}

interface i_position {
  x: Number,
  y: Number
}

export default (props: any) => {
  return (
/*     <MouseWith 
      render={(position: i_position) => <Cat position={position}/>}
    >
    </MouseWith> */
    <MouseWith>
      {(position: i_position) => <Cat position={position}/>}
    </MouseWith>
  )
}