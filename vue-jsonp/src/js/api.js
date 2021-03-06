
import jsonp from './jsonp';
import { commonParams , options } from './const';

export function getRecommend(){
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({},commonParams,{ 
        uin: 0,
        platform: 'h5',
        needNewCode: 1
    })

    return jsonp(url,data,options)
}