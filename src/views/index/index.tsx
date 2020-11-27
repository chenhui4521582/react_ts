import React, {useState, useEffect} from "react";
/** ========components======== **/
import BaseFooter from '@/components/BaseFooter/BaseFooter';
import BaseHeader from '@/components/BaseHeader/BaseHeader';
import ListInfo from './components/listInfo/listInfo';
/** ========style======== **/
import style from './style.module.less'
/** ========Interface======== **/
interface I_list {
  name: String,
  url: any
}
const Index = (props: any) => {
  const [list, setList] = useState<I_list[]>([])
  useEffect(() => {
    setList([
      {name: 'turntable', url: '/turntable'},
      {name: 'toast', url: '/toast'},
      {name: 'forwardRef', url: '/forwardRef'},
      {name: 'reduxConnect', url: '/reduxConnect'}
    ])
  }, [])
  return (
    <div className={style.index}>
      <BaseHeader />
      <ListInfo list={list}/>
      <BaseFooter />
    </div>
  )
}
export default Index

