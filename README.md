# 城市三级联动

最主要的函数，将数组转换为对象数组
```javascript
 function arrToObject(arr) {
     var paramobj = {};
     arr.forEach(function(v, i) {
         paramobj[v.name] = v; //特征值，这里使用name
     })
     return paramobj
 }
 ```

 其他就是联查啦