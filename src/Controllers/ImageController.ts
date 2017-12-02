import { Route, required, validate } from '../Core';
import fs = require('fs');
import path = require('path');

@Route.Controller({ service: "image" })
export default class extends Route.BaseRoute {
    doAction(action: string, method: string) {
        switch (action) {
            case "webp2base64": return this.webp2Base64;
        }
    }
    async before() {
        await this.next();
    }
    async after() {

    }

    webp2Base64(filepath: string) {
        filepath = path.resolve(__dirname, '../../public', filepath);
        console.log(filepath);
        var base64 = fs.readFileSync(filepath);

        this.ctx.body = { ok: true, data: base64 }
    }

}