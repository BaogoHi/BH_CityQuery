# 城市三级联动


### 主要的知识有

 - map的使用，遍历数组
 - 如何将对象数组转变为数组对象，方便查询

### 主要代码
```javascript
/**
 * 数组转对象
 * @param {Array} arr  数组
 * @param {String} id  特征值
 * @returns {Object} obj 数组转成的对象，key为数组中取出的特征值
 */
const arrToObject = (arr,id) => {
  let obj = {}
  arr.map((v, i) => {
      obj[v[id]] = v //特征值，这里使用name
  })
  return obj
}

/**
 * 从对象数组中通过key取出value，并放入数组
 * @param {Array} arr 
 * @param {String} id
 * @returns {Array} targetArr 
 */
const pushToArr = (arr,id) => {
  let targetArr = []
  arr.map((v,i) => {
    targetArr.push(v[id])
  })
  return targetArr
}

/**
 * 显示到下拉列表
 * @param {Object} myOption options的DOM对象
 * @param {Array} arr 传入的数组
 */
const pushToOption = (myOption, arr) => {
  arr.map((v,i) => {
    myOption.options[i] = new Option(v,v)
  })
}
```

<p data-height="265" data-theme-id="dark" data-slug-hash="RMPYWd" data-default-tab="js,result" data-user="klren0312" data-embed-version="2" data-pen-title="城市联动" class="codepen">See the Pen <a href="https://codepen.io/klren0312/pen/RMPYWd/">城市联动</a> by ZZES小白菜 (<a href="https://codepen.io/klren0312">@klren0312</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>