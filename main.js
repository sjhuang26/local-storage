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
  var $save = $("editor__save");
  
  var ITEM_HTML = '<div><input type="text" /><input type="text" /><button class="editor__remove-item">Remove</button></div>';
  
  function generateItem() {
    var $e = $new(ITEM_HTML);
    $e.getElementsByClassName("editor__remove-item")[0].addEventListener("click", removeItem.bind(this, $e));
    return $e;
  }
  
  function removeItem($e) {
    $e.parentNode.removeChild($e);
  }
  
  function addItem() {
    $items.appendChild(generateItem());
  }
  
  $addItem.addEventListener("click", addItem);
}());
