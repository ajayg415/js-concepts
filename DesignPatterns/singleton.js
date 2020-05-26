var mySingleton = (function () {
  var instance;
   function init() {
    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }
    var privateVariable = "Im also private";
    var privateRandomNumber = Math.random();
     return {
       // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },
      publicProperty: "I am also public",
      getRandomNumber: function() {
        return privateRandomNumber;
      }
     };
   };
   return {
     // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
       if ( !instance ) {
        instance = init();
      }
       return instance;
    }
   };
 })();

let st = new mySingleton();
st.getInstance();