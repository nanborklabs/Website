"use strict";

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);








//Functions of https are Endpoints/API/REST API/CONNECTION STRING
//They are product a URL which needs to be hit with certain Parameters
//The Params are defined above the Function





/* API  - HOME PAGE
 * Request params :
 *  			{
				"device" : "0", // This can be 0,1,2
				
				
				}
	Return params : 
				{
					"combos":[],
					"products":[]
				}
 *
*/

exports.homepage = functions.https.onRequest((req,res) => {

	var db = admin.database();
	var booksRef = db.ref('/products/books');
	var comboRef = db.ref('/products/combos');
	var returnJSON = [];
	booksRef.limitToFirst(10).once("value",function(snapshot){
		returnJSON.push(snapshot);
	});
	var jsonify = returnJSON.toJson;
	res.send(jsonify);
});


/* API  - BROWSING PAGE
 * Request Params:
 *      { 
 	 		"mainCateteogry": " ",
 	 		"subCateogry":""
 	 	}
 	 	Response:
 	 		{
				products:[]
 	 		}
 *
 *
 */
exports.browsingPage = functions.https.onRequest((req,res)=>{
	// Get Reqest Params
	var mainCateteogry = req.body.mainCateteogry;
	var subCateogry =  req.body.subCateogry;
	//Query the Book refs;
	//Send the Resources back
});


 			 
/* API  - PLACE ORDER
 * Request params :
 *  			{
				"uid" : "0",               
				"userName":"Mano",         
				"userTokenId":"saAs.."
				"products":[],
				"price":"",
				"isCOD":"",
				"lat":"",
				"lon":"",

				}
	Return Results : 
				{
					"status":"accepted"    // This can be accepted/prepping/dispacthed/delivered;
				}
 *
*/

exports.placeOrder  = functions.https.onRequest((req,res) => {

	//user Related Attribs
		var userId = req.body.uid;
		var uname = req.body.userName;

	//Products Related Attibs
		var totalProducts = req.body.totalProducts;
		var numOfProducts = totalProducts.length;
		var pArray = [];
		var p1Pid = totalProducts.product1.pid;
	//Price Related Attribs
	    var dateSelected = 

	//Payment Type
		var isCod = req.body.isCOD;

		//todo cosntruct an order entity
		var order = {
			orderId:'',
			orderStatus:'',
			isCOD:'',
			products:[],
			userName:'',
			orderIncomingTimeStamp:'',  // todo in later versions add dispactched , packed,moving attributes
			orderfullfilledTimeStamp:'',
			lat:'',
			lon:'',
			rideBy:'',
			riderName:'',
			riderNumber:'',
			riderCurrentLat:'',
			riderCurrentLon:'',
			deliveryStatus:'',
			partners:[
			{
				partnerId:'',
				partnerTokenId:''

			},
			{
				partnerId:'',
				partnerTokenId:''
			}]
		}

		//Push the Order Entity to Orders table
		var db = admin.database();
		var ordersRef = db.ref("orders")
            .push(order)
            .then(function (snapshot) {
            	//order Inserted Successfully	
            	console.log("Order Inserted Successfully");
            	res.send("order Executed Successfully");
            }

          //get UID,
          //get Pid Or Combos
          //generate Order ID
          //store User Prefs
          //get partnerId from PId's
          //Insert into Order Table
          //Send Fcm to All Delivery App
          //Send FCm to partner
});

/* API  - SAVE FCM TOKEN 
 * Request params :
 *  			{
				"fromWhere" : "0", // This can be 0,1,2
				"uid":45,          // uid common key afa people are concered
				"tokenId":"saAs.." // Genereated By Firebase 
				}
	Return params : 
				{
					"status":"1"    // This can be 0 or  1 , after saving the TokenId;
				}
 *
*/

exports.saveFcmToken = functions.https.onRequest((req, res) => {
  // Grab the body Jsons
		var fromWhere  = req.body.fromWhere;
  		var tokenId = req.body.tokenId;
  		var uid = req.body.uid;
  		var db = admin.database();
    	
    	//user,rider,partner
  		if (fromWhere == 0){
  			// This is Sent from a customer app
  			var userRef = db.ref("users/{userId}/uid");
  			 userRef.on("child_added", function(snapshot, prevChildKey) {
  			 	if (uid == snapshot.uid) {
  			 		//UID matches
  			 		//update existing token associated with the user
  			 		//todo: build a user Enitity
  			 	}
  			 }
		}
		else if(fromWhere == 1) {
			//This is from riders app
			var ridersRef = db.ref("riders");
			ridersRef.on("child_added",function(snapshot,prevChildKey){
				console.log(snapshot);
			})
		}
		else if (fromWhere == 2) {
			//this is From Partner app
			var partnerRef = db.ref("partners");
			partnerRef.on("child_added",function(snapshot,prevChildKey){
				console.log(snapshot);
			})
		}
		else{
			console.log("Error");
		}
});

/*DATABSE TRIGGER  - ORDER UPDATE
	After a New Order Inserted , Functions Invoked saying new order Received
	to whoeve with a token Id;
 *
 *
 */
  			 
 
 exports.sendMessageToAdmin  = functions.database.ref('/orders/{orderId}').onWrite(event =>{
 	//get the LatestOrderId - use LimittoLast() or loop through child added 
 	//get the Last Order 
 	//Send FCM Notification to Admin page/users/or Whereever

 });


/*Database Trigger - RIDER_ACCEPTED
 *	Request Params
 *
 *
 */
 	
exports.riderAcceptedOrder = functions.database.ref('/orders/{orderId}').onWrite(event => {
  //Change Order Status	
  //Send N
});
exports.sendMessagetoDrivers = functions.database.ref("/orders/{orderId}").onWrite(event => {
	// Order Has been get the Latest Order

	
});

exports.searchProduct = functions.https.onRequest((req,res) => {
	//get The Product Name;
	//Run It agains the databse and Once the values are there
	//send the Arrays of Products/Pid;
	console.log('Inside Search Funtion');
	var pToSearch = req.body.searchText;
	var db = admin.database();
    var ref = db.ref("products/books");
    ref.on("child_added", function(snapshot, prevChildKey) {
      var book = snapshot.val();
      if(book.pName.includes(pToSearch)){
      	//The Products match the Search String
      	//Add it to Responses Array
      	console.log("sending Book");
      	//This sends the first array nly
      	res.send(book)
      	

      }
      else{

      		console.log("no Match");
      }

      
      //Get The name here and if matches send it to direct it to Res
	});
});


