import axios from 'axios';
const qs = require('qs');

let ajax = {
    get:"",
    post:"",
    delete:"",
    put:"",
    patch:"",
    head:"",
    request:""
};

export const headers = {
    "Accept": "form-data",
    "Content-Type": "application/x-www-form-urlencoded",
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept",
    "Cache-Control" : "no-cache",
    "charset" : "utf-8"
};

// @ts-ignore
const ajaxPromise =function (method, url, data, params, cancel, show=true){
    if (params.download) {
        axios({
            url,
            method: method,
            headers: {...headers, ...params.header},
            data: JSON.stringify(data),
        }).then((res)=>{
            // return res.blob();
        }).then(
            (blob)=>{
                const aLink = document.createElement('a');
                aLink.style.display='none';
                const objectUrl = window.URL.createObjectURL(blob);
                document.body.appendChild(aLink);
                aLink.href = objectUrl;
                aLink.download = typeof data === 'string'
                    ? data
                    : params.pic
                        ?'图片'
                        :'导出.xls';
                aLink.click();
                document.body.removeChild(aLink);
                window.URL.revokeObjectURL(url);
            }
        )
    } else {
        return new Promise ( (resolve,reject) => {
            axios({
                url,
                method: method,
                headers: {...headers, ...params.header},
                data: qs.stringify(data),
                ...cancel
            }).then(
                res => {
                    resolve(res.data)
                }
            ).catch(
                err => {
                    if(show){
                        // message.error(err.message, 3);
                    }
                    reject(err);
                }
            )
        })
    }
};

/**
 * params参数详解
 * @header: 请求头部信息设置 例如：header:{Accept: "form-data"}
 * @cancel：中断请求
 * @download： 下载
 * @pic： 图片
 * @show: 是否显示错误提示，默认为true
 */
// @ts-ignore
ajax.get = function (url: any, data: any, params: any, cancel: any, show: boolean | undefined) {
    let method = "get";
    return ajaxPromise(method,url,data,params,cancel,show)
};

// @ts-ignore
ajax.post = function (url: any, data: any, params: any, cancel: any, show: boolean | undefined) {
    let method = "post";

    return ajaxPromise(method,url,data, params,cancel,show)
};

export default ajax;
