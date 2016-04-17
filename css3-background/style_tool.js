/**
 * Style Dynamic Apply Tool
 * 1. define a object named 'styleMap' before link this js file. the 'key' is the style name as you like, and the 'value'
 *    is the css file name without '.css' . ex:
 *    styleMap = {
 *      'basic': 'basicStyle',
 *      'green': 'greenStyleByJolie'
 *    }
 * 
 * 2. use the noSpecialStyle()  and applyStyle() function in a tag, or any way. The applyStyle(styleName) function
 *    need a params 'styleName', which is the key of the 'styleMap'
 *    
 * Note: You can link a style which filename is start width 'basic-' to apply all the time. the noSpecialStyle() will
 * not remove a style file which filename is start width 'basic-'
 */

/**
 * remove all special style file. When a style file's filename is 
 * start width 'basic-', that's not a special style file.
 */
function noSpecialStyle() {
  var styles = Array.from(document.getElementsByTagName('link'));
  var specialStyles = styles.filter(function (styleElement) {
    return styleElement.href.match(/(basic-[^\/]+)(?=\.\w+$)/) == null;
  });
  
  for (var i = specialStyles.length - 1; i >= 0; i--) {
    var specialStyles = specialStyles[i];
    specialStyles.parentNode.removeChild(specialStyles);
  }
  console.log('Have removed all styles.');
}

function applyStyle(styleName) {
  var newStyle = document.createElement('link');
  newStyle.href = styleMap[styleName] + '.css';
  newStyle.type = 'text/css';
  newStyle.rel = 'stylesheet';
  
  noSpecialStyle();
  document.getElementsByTagName('head')[0].appendChild(newStyle);
}
