(function() {
  // https://stackoverflow.com/questions/831030/how-to-get-get-request-parameters-in-javascript
  function get(name){
     if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
  }
  
  function output(s) {
    document.getElementById("output").textContent = s;
  }
  
  function main() {
    var key = get("key");
    
    if (key === undefined) {
      output("\"key\" get parameter must be defined");
    } else {
      output(localStorage.getItem(key));
    }
  }
  
  main();
}());
