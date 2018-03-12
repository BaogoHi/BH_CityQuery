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

// 获取三个options的DOM对象
var province = document.getElementById('province')
var city = document.getElementById('city')
var area = document.getElementById('area')
// 以省为key的对象
let provinceObj = arrToObject(provinceList,'name')
// 取出所有的省 放入数组
let provinceArr = pushToArr(provinceList,'name')
// 将所有省的信息推送到选项
pushToOption(province, provinceArr)


/**
 * 通过所选省份，查找市区和县
 * @param {Object} option 选项对象
 */
let cityobj = {}
const provinceSelect = (option) => {
  //清除缓存
  city.length = 0
  area.length = 0
  //市辖区和县的选择
  let cityArr = []
  provinceObj[option].cityList.map((v,i)=>{
    cityArr.push(v.name)
  })
  pushToOption(city, cityArr)
  cityobj = arrToObject(provinceObj[option].cityList,'name')
}

/**
 * 通过所选市辖区/县，查询 
 * @param {Object} option 
 */
const citySelect = (option) => {
  area.length = 0
  pushToOption(area, cityobj[option].areaList)
}