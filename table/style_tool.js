/**
 * Style Dynamic Apply Tool
 * 1. define a object named 'styleMap' before link this js file. the 'key' is the style name as you like, and the 'value'
 *    is the css file name without '.css' . ex:
 *    styleMap = {
 *      'basic': 'basicStyle',
 *      'green': 'greenStyleByJolie'
 *    }
 * 
 * 2. use the noStyle()  and applyStyle() function in a tag, or any way. The applyStyle(styleName) function
 *    need a params 'styleName', which is the key of the 'styleMap'
 */

function noStyle() {
  var styles = document.getElementsByTagName('link');
  for (var i = styles.length - 1; i >= 0; i--) {
    var style = styles[i];
    style.parentNode.removeChild(style);
  }
  console.log('Have removed all styles.');
}

function applyStyle(styleName) {
  var newStyle = document.createElement('link');
  newStyle.href = styleMap[styleName] + '.css';
  newStyle.type = 'text/css';
  newStyle.rel = 'stylesheet';
  
  noStyle();
  document.getElementsByTagName('head')[0].appendChild(newStyle);
}