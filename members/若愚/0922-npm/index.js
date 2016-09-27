var easyTpl = require('easyTpl');
var tpl = 'hello my name is {{name}}. I have a {{dog.age}} year old dog. His color is {{dog.color}}.';
 
var data = {
    name: 'hunger',
    dog: {
        color: 'yellow',
        age: 2
    }
};
 
var str = easyTpl(tpl, data);
console.log(str);
exports = str;