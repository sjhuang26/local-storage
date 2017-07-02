(function() {
  function $(id) {
    return document.getElementById(id);
  }
  
  function $new(s) {
    var div = document.createElement('div');
    div.innerHTML = s;
    return div.children[0];
  }
  
  function $u($e) {
    componentHandler.upgradeElements($e);
  }
  
  function $class(parent, cls) {
    return parent.getElementsByClassName(cls)[0];
  }
  
  var $addItem = $("editor__add-item");
  var $items = $("editor__items");
  var $save = $("editor__save");
  var $editor = $("editor");
  
  var uniqueNumber = 0;
  function getUniqueNumber() {
    uniqueNumber++;
    return uniqueNumber;
  }
  
  function removeItem($e) {
    $e.parentNode.removeChild($e);
  }
  
  function addItem() {
    var $e = $items.insertRow();
    var $cell1 = $e.insertCell();
    var $cell2 = $e.insertCell();
    var $cell3 = $e.insertCell();
    
    $e.className = "editor-item";
    $cell1.className = "mdl-data-table__cell--non-numeric";
    $cell2.className = "mdl-data-table__cell--non-numeric";
    $cell3.className = "mdl-data-table__cell--non-numeric";
    
    $cell1.innerHTML = `
      <div class="mdl-textfield mdl-js-textfield">
         <input class="editor-item__key mdl-textfield__input" type="text">
         <label class="editor-item__key-label mdl-textfield__label">Key</label>
      </div>
    `;
    
    $cell2.innerHTML = `
      <div class="mdl-textfield mdl-js-textfield">
        <textarea class="editor-item__value mdl-textfield__input" rows="1"></textarea>
        <label class="editor-item__value-label mdl-textfield__label">Value</label>
      </div>
    `;
    
    $cell3.innerHTML = `
      <button class="editor-item__remove mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">delete</i>
      </button>
    `;
    //var $e = $new('<tr class="editor-item"><td class="mdl-data-table__cell--non-numeric"><div class="mdl-textfield mdl-js-textfield"><input class="editor-item__key mdl-textfield__input" type="text"><label class="editor-item__key-label mdl-textfield__label">Key</label></div></td><td><div class="mdl-textfield mdl-js-textfield"><input class="editor-item__value mdl-textfield__input" type="text"><label class="editor-item__value-label mdl-textfield__label" rows="1">Value</label></div></td><td><button class="editor-item__remove mdl-button mdl-js-button mdl-button--icon"><i class="material-icons">delete</i></button></td></tr>');
    /*
      <tr class="editor-item">
        <td class="mdl-data-table__cell--non-numeric">
          <div class="mdl-textfield mdl-js-textfield">
            <input class="editor-item__key mdl-textfield__input" type="text">
            <label class="editor-item__key-label mdl-textfield__label">Key</label>
          </div>
        </td>
        <td class="mdl-data-table__cell--non-numeric">
          <div class="mdl-textfield mdl-js-textfield">
            <input class="editor-item__value mdl-textfield__input" type="text">
            <label class="editor-item__value-label mdl-textfield__label" rows="1">Value</label>
          </div>
        </td>
        <td class="mdl-data-table__cell--non-numeric">
           <button class="editor-item__remove mdl-button mdl-js-button mdl-button--icon">
             <i class="material-icons">delete</i>
           </button>
        </td>
      </tr>
    */
    
    var uniq1 = getUniqueNumber();
    var uniq2 = getUniqueNumber();
    
    $class($e, "editor-item__key").id = "editor-item__key-" + uniq1;
    $class($e, "editor-item__key-label").setAttribute("for", "editor-item__key-" + uniq1);
    $class($e, "editor-item__value").id = "editor-item__value-" + uniq2;
    $class($e, "editor-item__value-label").setAttribute("for", "editor-item__value-" + uniq2)
    
    $u($e);
    $class($e, "editor-item__remove").addEventListener("click", removeItem.bind(this, $e));
    
    return $e;
  }
  
  function save() {
    localStorage.clear();
    
    var items = $items.childNodes;
    
    var ii = items.length;
    for (var i = 0; i < ii; i++) {
      var key = $class(items[i], "editor-item__key").value;
      var value = $class(items[i], "editor-item__value").value;
      
      if (key !== "") {
        localStorage.setItem($class(items[i], "editor-item__key").value, $class(items[i], "editor-item__value").value);
      }
    }
  }
  
  function load() {
    var keys = Object.keys(localStorage);
    var ii = keys.length;
    for (var i = 0; i < ii; i++) {
      var $e = addItem();
      $class($e, "editor-item__key").value = keys[i];
      $class($e, "editor-item__value").value = localStorage.getItem(keys[i]);
      var $e2 = $e.getElementsByClassName("mdl-textfield");
      $e2[0].MaterialTextfield.checkDirty();
      $e2[1].MaterialTextfield.checkDirty();
    }
  }
  
  function main() {
    $addItem.addEventListener("click", addItem);
    $save.addEventListener("click", save);
    document.getElementsByTagName("body")[0].addEventListener("beforeunload", function() {
      return (function() {
        return "Do you want to leave this site? Changes you made may not be saved.";
      });
    });
    
    load();
  }
  
  main();
}());
