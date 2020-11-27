import React from "react";
import style from './style.module.less';
import {Link} from 'react-router-dom'

interface i_item {
  name: String,
  url: any
};

const ListInfo = (props: any) => {
  const { list } = props;
  return (
    <div className={style.list}>
      {
        list?.map((item: i_item, index: any) => (
          <Link to={item.url} key={index} className={style.item}>
            {item.name}
          </Link>
        ))
      }
    </div>
  )
}

export default ListInfo