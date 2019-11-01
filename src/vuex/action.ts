
function makeAction(store: any, data: any) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            store.commit(data.mutationTypes);
            return resolve()
        }, 10)
    })
}

// @ts-ignore
export const sync = (store,data) => makeAction(store,data);
