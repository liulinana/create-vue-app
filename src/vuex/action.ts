import axios from 'axios';
const qs = require('qs');

function makeAction(store: any, data: any) {

    return new Promise((resolve, reject) => {
        let params = qs.stringify(data.params);
        // @ts-ignore
        axios({
            method: data.method,
            url: data.url,
            params,
            // headers: {...headers},
        }).then(
            res => {
                store.commit(data.mutationTypes,{data:res.data});
            }
        ).catch(
            err => {
                reject(err);
            })
    })
}

// @ts-ignore
export const sync = (store,data) => makeAction(store,data);
