(function() {
  function $(id) {
    return document.getElementById(id);
  }
  
  function $new(s) {
    var div = document.createElement('div');
    div.innerHTML = s;
    return div.firstChild;
  }
  
  var $addItem = $("editor__add-item");
  var $items = $("editor__items");
  var $removeItem = $("editor__remove-item");
  var $save = $("editor__save");
  
  var ITEM_HTML = '<div><input type="text" /><input type="text" /></div>';
  
  function addItem() {
    $save.appendChild($new(ITEM_HTML));
  }
  
  $addItem.addEventListener("click", addItem);
}());
