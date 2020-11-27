import React, { useEffect } from 'react'
/** ========Components======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader';
import ToastComponent from '@/components/Toast'
/** ========style======== **/
import style from './styles/toast.module.less'
const Toast = (porps: any) => {
  const handClick = (type: any) => {
    ToastComponent[type](type, 3000 , () => {
      console.log(11111111)
    })
  }
  return (
    <div className={style.toast}>
      <BaseHeader />
      <div className={style.toast_list}>
        <div className={style.toast_item} onClick={() => handClick('info')}>info</div>
        <div className={style.toast_item} onClick={() => handClick('success')}>success</div>
        <div className={style.toast_item} onClick={() => handClick('error')}>error</div>
        <div className={style.toast_item} onClick={() => handClick('warning')}>warning</div>
        <div className={style.toast_item} onClick={() => handClick('loading')}>loading</div>
      </div>
    </div>
  )
}

export default Toast

