import React from 'react'
/** ========Components======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader';
import TurntableComponent from './components/turntable/turntable'
/** ========style======== **/
import style from './styles/turntable.module.less'

const Turntable = (porps: any) => {
  return (
    <div className={style.turntable}>
      <BaseHeader />
      <TurntableComponent />
    </div>
  )
}

export default Turntable

