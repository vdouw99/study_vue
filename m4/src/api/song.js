/**
 * Created by sf on 2017/12/5.
 */

import axios from 'axios';

import {commonParams} from './config.js';

export function getLyric(mid) {
    const url = 'api/lyric';

    const data = Object.assign({}, commonParams, {
        songmid: mid,
        pcachetime: +new Date(),
        platform: 'yqq',
        hostUin: 0,
        needNewCode: 0,
        g_tk: 1704051168,
        format: 'json'
    });

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data);
    });
}

