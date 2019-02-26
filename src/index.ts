import * as Request from 'request';
export class GoogleSheet {
    public script_url: string;
    constructor(script_url: string) {
        this.script_url = script_url;
    }
    async get(params: {action: string}) {
        return new Promise((resolve, reject) => {
            let {script_url} = this;
            let {action} = params;
            let url = `${script_url}?action=${action}`
            Request.get(url, {}, (err, data) => {
                console.log(data.body);
                err ? reject(err) : resolve(data.body);
            });
        })
    }
}