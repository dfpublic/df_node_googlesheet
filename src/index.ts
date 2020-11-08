import Axios from 'axios';
export class GoogleSheet {
  public script_url: string;
  constructor(script_url: string) {
    this.script_url = script_url;
  }
  async get(params: { action: string }): Promise<string> {
    let { script_url } = this;
    let { action } = params;
    let res = await Axios.get(script_url, { params: { action } });
    return JSON.stringify(res.data);
  }
}
