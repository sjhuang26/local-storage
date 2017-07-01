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
  
  var ITEM_HTML = '<div><input class="editor-item__key" type="text" /><input class="editor-item__value" type="text" /><button class="editor-item__remove">Remove</button></div>';
  
  function generateItem() {
    var $e = $new(ITEM_HTML);
    $e.getElementsByClassName("editor-item__remove")[0].addEventListener("click", removeItem.bind(this, $e));
    return $e;
  }
  
  function removeItem($e) {
    $e.parentNode.removeChild($e);
  }
  
  function addItem() {
    var $e = generateItem();
    $items.appendChild($e);
    
    return $e;
  }
  
  function save() {
    localStorage.clear();
    
  }
  
  function load() {
    var keys = Object.keys(localStorage);
    var ii = keys.length;
    for (var i = 0; i < ii; i++) {
      var $e = addItem();
      $e.getElementsByClassName("editor-item__key")[0].value = keys[i];
      $e.getElementsByClassName("editor-item__value")[0].value = localStorage.getItem(keys[i]);
    }
  }
  
  function main() {
    $addItem.addEventListener("click", addItem);
    
    load();
  }
}());
