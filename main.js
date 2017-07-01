(function() {
  function $(id) {
    return document.getElementById(id);
  }
  
  function $new(s) {
    var div = document.createElement('div');
    div.innerHTML = s;
    return div.firstChild;
  }
  
  function $class(parent, cls) {
    return parent.getElementsByClassName(cls)[0];
  }
  
  var $addItem = $("editor__add-item");
  var $items = $("editor__items");
  var $save = $("editor__save");
  
  var ITEM_HTML = '<div><input class="editor-item__key" type="text" /><input class="editor-item__value" type="text" /><button class="editor-item__remove">Remove</button></div>';
  
  function generateItem() {
    var $e = $new(ITEM_HTML);
    $class($e, "editor-item__remove").addEventListener("click", removeItem.bind(this, $e));
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
    
    var items = $items.childNodes;
    
    var ii = items.length;
    for (var i = 0; i < ii; i++) {
      localStorage.setItem($class(items[i], "editor-item__key"), $class(items[i], "editor-item__value"));
    }
  }
  
  function load() {
    var keys = Object.keys(localStorage);
    var ii = keys.length;
    for (var i = 0; i < ii; i++) {
      var $e = addItem();
      $class($e, "editor-item__key").value = keys[i];
      $class($e, "editor-item__value").value = localStorage.getItem(keys[i]);
    }
  }
  
  function main() {
    $addItem.addEventListener("click", addItem);
    
    load();
  }
  
  main();
}());
