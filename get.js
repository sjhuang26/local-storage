(function() {
  // https://stackoverflow.com/questions/831030/how-to-get-get-request-parameters-in-javascript
  function get(name){
     if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
  }
  
  function output(s, isError) {
    document.getElementById("output").textContent = s;
    document.getElementById("error").style.display = isError ? "block" : "none";
  }
  
  function main() {
    var key = get("key");
    
    if (key === undefined) {
      output("GET parameter \"key\" is undefined", true);
    } else {
      var value = localStorage.getItem(key);
      
      if (value === null) {
        output("Key does not exist in storage", true);
      } else {
        output(value, false);
      }
    }
  }
  
  main();
}());
