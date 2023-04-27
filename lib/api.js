import axios from "axios";

export default class Api {
    constructor() {
        this.url = 'https://pipedapi.kavin.rocks'
    }

    async search(query) {
        // let resposne = await axios.post(this.url + '/search', {
            
        // }, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        let response = await fetch(this.url + '/search', {
            method: 'POST',
            headers: {
                'Host': 'pipedapi.kavin.rocks',
                'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Dest': 'document',
                'Content-Type': 'application/json; charset=utf8'
            },
            body: JSON.stringify({
                q: query
            })
        })
        console.log(response.json())
    }
}