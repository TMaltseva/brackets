module.exports = function check(str, bracketsConfig) {
  let array_str = [];
  bracketsConfig.forEach(element => {
    array_str.push(element.join(''));
  })
  let result_str = str;
  let length_array = array_str.length;
  do {
    let i = 0;
    array_str.forEach(element => {
      let index_element = result_str.indexOf(element);
      if (~index_element) result_str = result_str.slice(0,index_element) + result_str.slice(index_element+2);
      else i++;
    })
    if (i == length_array) break;
  } while (result_str);

  if (!result_str.length) return true;
  else return false;
}
