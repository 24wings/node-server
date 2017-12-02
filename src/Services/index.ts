import QQAI = require('./QQAI');
import Parser = require('./Parser');
import Nmap = require('./Nmap/Nmap');
export ={
    nmap: new Nmap(),
    qqai: new QQAI("1106550426", "00WdwrKA54aXkVG6"),
    functionParser: new Parser.FunctionParser(),
    wechatJsApi: {}
} 