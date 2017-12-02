import { Route, required, validate } from '../Core';
import wechat from '../Services/Wechat';
var WechatApi = require('wechat-api');
//encoding asckey =zAC178AvIbBGTJezdrtuvHMco7nYDMa2LNn5eHEFeSM
//screa=36cc8b633770026d27440d163e2f8492
var api = new WechatApi("wx06085bff311745d8","36cc8b633770026d27440d163e2f8492");
@Route.Controller({ service: "wechat" })
export default class extends Route.BaseRoute {
    doAction(action: string, method: string) {
           return this.ticket;
        
    }
    async before(){
    await this.next();
    }
    async after (){
await this.next();
    }
    async accessToken(){
     
     //  let token = await wechat.wechatApi.getAccessToken();
       //     this.ctx.body={ok:true,data:token};
    }
    async ticket(){
        var param = {
            debug: false,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
            url: this.ctx.request.body.url
           };
    var config=         await new Promise(resolove=>{
            api.getJsConfig(param,(err,data)=>resolove(data) );
         });
         this.ctx.body={ok:true,data:config};

        // let jssdk = await wechat.wechatApi.getJSSDK({url:"http://www.carelifeca.com/"});
        console.log('jssdk:url', this.ctx.request.body.url)
        console.log('jssdk:href', this.ctx.href);

// this.ctx.body = { ok: true, data: jssdk };
    }
}