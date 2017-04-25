

'use strict';









/*This Method Queries the Database Child Cont and PID is Incremented from Child Value*/
var setPid = function (db) {
    var rootRef = db.ref();
    var bookRef = db.ref('products/books').orderByKey();
    bookRef.once("value")
        .then(function (snapshot) {
            var count = 0;
            console.log(snapshot.val());
            snapshot.forEach(function (singleData) {
                // var bookName = singleData.key;
                // console.log(bookName);
                //
                // var bName = singleData.val().productInfo;
                // var details = singleData.val().details;
                //
                // pop(details);
                //
                // var ISBN = details.bookCategory;
                //
                // console.log(ISBN);
                //
                // console.log(bName);
                count++;


            })
            pop(count);
            var mPid  = document.getElementById('pid_text');
            mPid.value = count;
            mPid.focus();
        });

};

function pop(data) {

    console.log(data);

}


/*This Method Initializees all the Variables and chekc for Empty Strings

*
*
* */


var pricing= {
    unit : 0,
    timeUnit: 0,
    price:0,
    init: function (mUnit,mTimeUnit,mPrice) {
        this.unit =  mUnit;
        this.timeUnit = mTimeUnit;
        this.price = mPrice;
    },

    getTimeUnit:function () {
        switch (this.timeUnit){
            case 0: return "day";
            case 1:return "week";
            case 2: return "month";
        }

    },

    getPrice: function () {
        if (this.price != null){

            return this.price;
        }
        else{
            alert('no Price Declared');
        }
    }

};
function insertProduct() {
    var productName = document.getElementById('pname').value;
    var pid = document.getElementById('pid');
    var pdesc = document.getElementById('');
    var authorName = document.getElementById('');
    var bookName = document.getElementById('');
    var publiserName  = document.getElementById('');
    var baseCategory;
    var SubCategory;
    var ISBN  = document.getElementById('');
    var ISBN13 = document.getElementById('');
    var DatePublsihed;
    var MRP  = document.getElementById();
    var ourPrice = document.getElementById('');
    var isBestSeller;
    var isTopRated;
    var searchTags ;
    var pricing1 = {

    }


}
/**
 * Created by nandhu on 25/4/17.
 */
// $(function(){
//
//     // empty array - square brace for array the reason for variable "DATA" we gonna ask firebase to let us know if it is any extra information or changes
//     var data=[];
//
//
//     /////////FIREBASE !!!!!!!!!!
//
//     ////CREATE FIREBASE CONNECTION
//     var ref = new Firebase('https://replay-inventory-platform.firebaseio.com/');
//     var booksRef = new Firebase('https://replay-inventory-platform.firebaseio.com/products/books');
//     console.log("page is ready");
//   /*  /// listen the data from our firebase "function(snapshot)" here our call back function, snapshot is incapsulation of our data
//     ref.on("value",function(snapshot){
//         // we get all info thanks to val from snapshot
//         console.log( snapshot.val() );
//
//
//         data=snapshot.val();
//
//     })
//
//
//
//     //// jquaery selector and .submit instead of a click because we want to submit some information
//     $('#newActivity').submit(function(event){
//
//         var $form = $(this);
//
//         // disable Submit button
//         // prop = properties of a form and one of the properties is disable
//
//         $form.find("#saveForm").prop('disabled',true);
//
//         /// getting  ( not setting the value property)the value of the title VAL
//         var titleToSend = $('#activityTitle').val();
//         // VALIDATION
//         if(titleToSend.length<1) {
//             alert("This is not valid title:" +titleToSend);
//         }
//         console.log("TITLE IS" + titleToSend);
//
//         // get the value of description
//         var descriptionToSend = $('#activityDescription').val();
//         console.log("Description is" + descriptionToSend);
//         // get value of dropdown list
//         var categoryToSend = $ ('#activityCategory').val();
//         console.log ('Category is '+categoryToSend);
//
//
//         var newActivity = {
//             "title": titleToSend,
//             "description": descriptionToSend,
//             "type":categoryToSend
//         }
//         // we put in empty array our information from form
//         data.push(newActivity);
//         console.log("DATA!!!!!!!");
//         console.log(data);
//         ref.set(data, function(err){
//             if(err){
//                 alert("Your activity was not entered, please contact admin");
//             } else {
//                 alert ("Your activity is submitted");
//                 $form.find("#saveForm").prop('disabled', false);
//                 $('#activityTitle').val('');
//                 $('#activityDescription').val('');
//             }
//         });
//
//         return false;
//     })
//
//
//
//     //////////////////// registration stuff/////////////////////
//     $('#login').submit(function(event){
//
//         /// disable register button
//         var $form = $(this);
//
//         // disable Submit button
//         // prop = properties of a form and one of the properties is disable
//
//         $form.find("#registerForm").prop('disabled', true);
//         var email = $form.find("#loginInput").val();
//         var pw = $form.find("#pwField").val();
//         register(email,pw);
//         return false;
//     });// end of register submit
//
//
//
//     $('#finallogin').submit(function(event) {
//
//         var $form = $(this);
//         $form.find('#finalloginForm').prop('disabled', true);
//
//         ////get the values for login and pasword textboxes
//         var loginEmail = $('#finalloginInput').val();
//         var pw = $('#finalpwField').val();
//
//         console.log(loginEmail, pw);
//
//         login(loginEmail,pw);
//
//         return false;
//
//     });
//
//     //// logout cick handler button
//     $('#logout').click(function(event){
//
//         console.log("going to logout!");
//         logout();
//     })
//
//
//     //////////log out from firebase registry////////
//     function logout(){
//         var reg = new Firebase ("https://firstaccount.firebaseio.com");
//
//         reg.unauth();
//     }
//     function login(email, password) {
//         console.log("Registering with"+email+"  "+password);
//         var reg = new Firebase ("https://firstaccount.firebaseio.com");
//
//         reg.authWithPassword({
//             email: email,
//             password: password
//         }, function(error, user){
//             if(error){
//                 console.log(error);
//                 if(error.code == "INVALID_USER"){
//                     alert("Not a valid login")
//                 }
//                 if(error.code == "INVALID_PASSWORD"){
//                     alert("Not a valid password");
//                 }
//                 alert(error.message);
//
//             }else{
//                 alert("Logged in with "+user.uid);
//             }
//         })
//
//     }
//
//
//
//
//     ////// register a new user in the firebase///////////////
//
//     function register(email, password){
//         console.log("In da club");
//         //  console.log(email,password);
//         var reg = new Firebase ("https://firstaccount.firebaseio.com");
//         reg.createUser ({
//             email: email,
//             password: password
//
//         }, function(error, userData) {
//             if (error) {
//                 if(error.code)
//                     alert ("some kind error");
//             } else {
//                 alert ("you registered"+ userData.uid);
//             }
//         })
//
//
//     }
//
//     /////// Detect the authication state
//     var reg = new Firebase("https://firstaccount.firebaseio.com");
//     reg.onAuth(function(authData){
//         console.log("info on authentication");
//         if(authData){
//             // you are logged in
//             console.log("you are logged in");
//             $('#left').css('margin-left', '0px');
//         }else {
//             //you are not logged in
//             console.log("you are not logged in");
//             $('#left').css('margin-left', '-500px');
//         }
//     })
//
//
//
// */
// });

function Start() {

    var db = firebase.database();
    var storage = firebase.storage();
    console.log('Print Something');
    setPid(db);
    var submitButton = document.getElementById('submit_button');
    submitButton.addEventListener('click',insertProduct);
    // initVariables();

}
window.onload = Start();