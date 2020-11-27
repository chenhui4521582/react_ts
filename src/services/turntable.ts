import { useState, useEffect } from 'react';
import Api from './api/api';
import $axios from './http/http';

interface I_response <D> {
  code: Number,
  data: D,
  message: String
}

interface I_turntableAward {
  awardsImage: String,
  awardsName: string,
  configId: Number,
  description: any,
  showName: any,
  sort: Number
}

export const useTurnTableAward = () => {
  const [turntableAward, setTurntableAward] = useState<I_turntableAward[]>([]);
  const _queryTurnTableAward = async () => {
    let res:any = await $axios.post(Api.queryTurnTableAward);
    let response: I_response<any> = res.data;
    let {code, data} = response;
    if(code === 200) {
      setTurntableAward(data.awards)
    }
  }
  useEffect(() => {
    // console.log(2222)
    _queryTurnTableAward()
  }, [])
  return [turntableAward] 
}
