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
    var value = get("value");
    
    if (key === undefined) {
      output("\"key\" get parameter must be defined", true);
    } else if (value === undefined) {
      output("\"value\" get parameter must be defined", true);
    } else {
      localStorage.setItem(key, value);
      output("key " + key + " set to " + value);
    }
  }
  
  main();
}());
