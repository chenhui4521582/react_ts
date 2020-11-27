import React, {useEffect, useRef} from "react"
/** ========Hook======== **/
import { useTurnTableAward } from '@/services/turntable'
import style from './style.module.less'
interface I_turntableParams {
  index: Number,
  provA: Number,
  oneA: Number,
  lock: Boolean,
}
const Turntable = (props: any) => {
  let defaultParams: I_turntableParams = {index: 0, provA: 0, oneA: 0, lock: false};
  const [turntableAward] = useTurnTableAward();
  const list_item: any = useRef();
  useEffect(() => {
    setItemAngle()
  })
  /** 设置转盘元素的角度 **/
  const setItemAngle = () => {
    const children: any[] = list_item.current.children;
    const len: Number = children.length;
    const oneA: Number = 360 / Number(len);
    for(let i = 0; i < len; i++) {
      const item = children[i];
      item.style.transform = `rotate(-${Math.round(Number(oneA) * (i+.5))}deg)`
    }
    defaultParams = {...defaultParams, oneA}
  }

  /** 转动转动转动转动转动转动转动转动 **/
  const run = (index: Number, callback?: any): void =>  {
    console.log(defaultParams)
    if(defaultParams.lock) return;
    defaultParams.lock = true
    /** 默认旋转角度 **/
    const defaultAngle: Number = 1800;
    /** 旋转的元素 **/
    const wrap: any = list_item.current;
    /** 奖品所在的角度 **/
    const stopA: Number = Number(index) * Number(defaultParams.oneA) - ( Number(defaultParams.oneA)*.5);
    /** 当前转动的次数 **/
    const tIndex = Number(defaultParams.index) + 1 ;
    /** 上一次停留的位置 **/
    const provA = Number(defaultAngle) * tIndex;
    /** 当前旋转的角度 **/
    const countA: Number = Number(provA) + Number(stopA);
    /** 设置state **/
    wrap.style.transform = `rotate(${-countA}deg)`;
    wrap.style.transition = `all 3s ease-in-out`;
    defaultParams = {...defaultParams, provA, index: tIndex}
    setTimeout(() => {
      defaultParams.lock = false
      callback && callback.call(this)
    }, 3000)
  }
  /** handClick **/
  const handClick = () => {
    run(3, () => {
      /** 回调 **/
      console.log(111111)
    })
  }
  
  return (
    <div className={style['turntable']}>
      <div className={style['turntable-wrap']} ref={list_item}>
        {
          turntableAward?.map((item, index) => (
            <div className={style['list-item']} key={index} >
              {item.awardsName}
            </div>
          ))
        }
      </div>
      <div className={style['turntable-btn']} onClick={()=> handClick()}></div>
    </div>
  )
}


export default Turntable;