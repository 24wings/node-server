# ng-node scanner

angular client => koa middlweare server =>system nmap,sqlmap


一: client


ng-client => request first Link



# Link  datastruct 
```typescript
interface Link{
    url:string,
    status:string,
    header:string,
    html:html,
    ext:html,
    downloaded:boolean ,
    gziped:boolean,
    watsed:boolean,
    createdDt:Date,

}

```