

'use strict';









/*This Method Queries the Database Child Cont and PID is Incremented from Child Value*/
InsertBook.prototype.setPidToEntity = function (count) {
    this.productEntitiy.pid = count;
};
InsertBook.prototype.setPid = function (db) {
    var rootRef = db.ref();
    var bookRef = db.ref('products/books').orderByKey();
    bookRef.once("value")
        .then(function (snapshot) {
            var count = 0;
            count++;

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


            });
            pop(count);
            var mPid  = document.getElementById('pid_text');
            mPid.value = count;
            // this.setPidToEntity(count);
            // mPid.focus();
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
    timeText : 'NA',
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



InsertBook.prototype.insertProduct = function (event) {

    pop(this.productEntitiy.imageURL);
    this.validateFields();

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

var mSubCat;


InsertBook.prototype.isImageUploded = false;

InsertBook.prototype.productEntitiy = {
        pid:'',
      imageURL : '',
    pName:'',
    productDescription:'',
    authorName:'',
    publisherName:'',
    MRP : '',
    isTopRated:'',
    isBestSeller:'',
    bookSummary:'',
    baseCategory:'',
    subCategory:'',
    genre:'',
    tags:{
      tag1:'fdsaf',
        tag2:'afssd',

    },
    details:{
        ISBN : '',
        ISBN13:'',
        ourPrice:''
    },
    pricing:{
        pricing1:{
            unit:'',
            timeUnit:'',
            price:''

        },  pricing2:{
            unit:'',
            timeUnit:'',
            price:''

        },
        pricing3:{
            unit:'',
            timeUnit:'',
            price:''

        }
    }


};
InsertBook.prototype.showImageUploadedToast = function () {
    var data = {
        message: 'Image Uploaded',
        timeout: 2000
    };
    this.snackBar.MaterialSnackbar.showSnackbar(data);
};

InsertBook.prototype.showEmptyText =function(text){
    var data = {
        message: text,
        timeout: 2000
    };
    this.snackBar.MaterialSnackbar.showSnackbar(data);
    return;
};

InsertBook.prototype.saveImage = function (event) {
    event.preventDefault();



    var file = event.target.files[0];
    this.imageForm.reset();
    if (!file.type.match('image.*')){
        var data  = {
            message: 'Upload Only Images',
            timeout: 2000
        };
        this.signInSnackbar.MaterialSnackbar.showSnackbar(data);
        return;

    }
    var filePath = 'productImages/books/'+file.name;
    pop(filePath);

    this.booksRef = this.stroageRef.child(filePath);
    this.booksRef.put(file)
        .then(function (snapshot) {



            this.productEntitiy.imageURL = snapshot.downloadURL;
            pop('file Inserted');
            this.showImageUploadedToast();
            this.isImageUploded = true;


            // console.log(snapshot.downloadURL);
            // pop(snapshot.fullpath.toString());
            // pop(snapshot.key);
            // var full_path = snapshot.metadata.fullpath;
            // pop(full_path);
        }.bind(this));

};
InsertBook.prototype.checkSetup = function () {
    if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
        window.alert('You have not configured and imported the Firebase SDK. ' +
            'Make sure you go through the codelab setup instructions.');
    } else if (config.storageBucket === '') {
        window.alert('Your Cloud Storage bucket has not been enabled. Sorry about that. This is ' +
            'actually a Firebase bug that occurs rarely. ' +
            'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
            'and make sure the storageBucket attribute is not empty. ' +
            'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
            'displayed there.');
    }
};

function InsertBook() {
    this.checkSetup();


    //Initialize vDOM Variables
    this.productName = document.getElementById('pname');

    this.pid = document.getElementById('pid_text');
    this.pdesc = document.getElementById('pdesc');
    this.authorName = document.getElementById('aname');
    this.bSumm = document.getElementById('bsummary');
    this.publiserName  = document.getElementById('pubname');
    this.baseCategory = document.getElementById('base_category');
    this.subCateogry  = document.getElementById('sub_category');

    this.date = $("#datepicker").datepicker();
    this.ISBN  = document.getElementById('isbn10');
    this.ISBN13 = document.getElementById('isbn13');

    this.MRP  = document.getElementById('mrp');
    this.ourPrice = document.getElementById('our_price');
    this.isBestSeller  = document.getElementById('best_seller');;
    this.isTopRated = document.getElementById('top_rate');;
    this.searchTags = document.getElementById('tags') ;

    //Image Upload Related DoM's
    this.submitImageButton = document.getElementById('submitImage');
    this.imageForm = document.getElementById('image-form');
    this.mediaCapture = document.getElementById('mediaCapture');

    this.snackBar = document.getElementById('must-signin-snackbar');

    this.insetProductutton = document.getElementById('submit_button');
    this.insetProductutton.addEventListener('click',this.insertProduct.bind(this));


    //events for Image pload
    this.submitImageButton.addEventListener('click',function (e) {
        e.preventDefault();
        this.mediaCapture.click();
    }.bind(this));

    this.mediaCapture.addEventListener('change',this.saveImage.bind(this));


    //
    this.unit1 = document.getElementById('unit_one_text');
    this.unit2 = document.getElementById('unit_two_text');
    this.unit3 = document.getElementById('unit_three_text');

    //Time Unit
    this.tm1 = document.getElementById('time_value1');
    this.tm2 = document.getElementById('time_value2');
    this.tm3 = document.getElementById('time_value13');

    //Price
    this.price1 = document.getElementById('price_one_text');
    this.price2 = document.getElementById('price_two_text');
    this.price3 = document.getElementById('price_three_text');

    this.auth = firebase.auth();
    this.database = firebase.database();
    this.storage = firebase.storage();
    this.stroageRef = this.storage.ref();
    this.setPid(this.database);




}


/*The Base Category Event Listener
* if
* Base Catgory Id = 0, alert
* else
* fill Sub catgory according to Genre
* */


function validateText(text) {
    pop(text);

    if (text =='' ){

        return false;
    }
    else {
        return true;
    }
}


function validateNumber(munit1) {
    if (munit1 == ''){
        return false;
    }
    else{
        return true;
    }
}
InsertBook.prototype.validateFields  = function (){
    pop('validating Fields');


    //Pid
    var pid = this.pid.value;
    //validating Product Name
    this.productEntitiy.pid = pid;
    var pname = this.productName.value;
        if (!validateText(pname)) {
            this.showEmptyText('Enter Product Name');
            return;
        }
        else{
            this.productEntitiy.pName = pname;
        }
    //product Desc
    var pDesc = this.pdesc.value;
        if (!validateText(pDesc)) {
            this.showEmptyText('Enter Product Description');
            return
        }
        else{
            this.productEntitiy.productDescription = pDesc;
        }
    //Author Name
    var aName = this.authorName.value;
        if (!validateText(aName)) {
            this.showEmptyText('Enter Author Name');
            return;
        }
        else{
            this.productEntitiy.authorName  = aName;
        }
    //Book Summary
    var bSumm  = this.bSumm.value;
        if (!validateText(bSumm)){
            this.showEmptyText('Enter Book Summary');
            return;
        }
        else{
            this.productEntitiy.bookSummary = bSumm;
        }


    //Publisher Name
    var pubName = this.publiserName.value;
        if (!validateText(pubName)){
            this.showEmptyText('Enter Publisher Name');
            return;
        }
        else{
            this.productEntitiy.publisherName  = pubName;
        }
    //base Cateogry
    var category = this.baseCategory.options[this.baseCategory.selectedIndex].value;
            if (category == 0){
                this.showEmptyText('Select a Category');
                return;
            }
            else{
                this.productEntitiy.baseCategory = category;
            }

    // Subcategory
    var subCategory = this.subCateogry.options[this.subCateogry.selectedIndex].value;
       if (subCategory == 0){
           this.showEmptyText('Select a SubCategory');
           return;
       }
       else{
          this.productEntitiy.subCategory = subCategory;
       }

    //ISBN 10
    var ISBN = this.ISBN.value;
        if (!validateText(ISBN)) {
            this.showEmptyText('Enter ISBN');
            return;
        }
        else{
            this.productEntitiy.details.ISBN = ISBN;
        }

    var ISBN13 = this.ISBN13.value;
        if (!validateText(ISBN13)) {
            this.showEmptyText('Enter ISBN13');
            return;
        }
        else{
            this.productEntitiy.details.ISBN13 = ISBN13;
        }

    var MRP = this.MRP.value;
    if (!validateText(MRP)) {
        this.showEmptyText('Enter MRP');
        return;
    }
    else{
        this.productEntitiy.MRP = MRP;
    }


    var ourPrice  = this.ourPrice.value;
    if (!validateText(ourPrice)) {
        this.showEmptyText('Enter Bought Price');
        return;
    }
    else{
        this.productEntitiy.details.ourPrice = ourPrice;
    }

    if(this.isImageUploded == false){
        this.showEmptyText('Upload image');

    }

    var ibs = this.isBestSeller.options[this.isBestSeller.selectedIndex].value;
        if (ibs == 0){

                this.showEmptyText('Choose Whether Best Seller or Not');
            return;
        }
        else{
            this.productEntitiy.isBestSeller = ibs;
        }

    var itr = this.isTopRated.options[this.isTopRated.selectedIndex].value;
        if (itr == 0){
            this.showEmptyText('Select IS Top Rated');
            return;
        }
        else{
            this.productEntitiy.isTopRated  = itr;
        }


    var munit1 = this.unit1.value;
            if (!validateNumber(munit1))  {
                this.showEmptyText('Enter Unit 1');
                return;
            }
            else{
                this.productEntitiy.pricing.pricing1.unit = munit1;
            }
    var munit2 = this.unit2.value;
        if (!validateNumber(munit2)){
            this.showEmptyText('Enter Unit 1');
            return;
        }

        else{
            this.productEntitiy.pricing.pricing2.unit = munit2;
        }

    var munit3 = this.unit3.value;
    if (!validateNumber(munit3)) {
        this.showEmptyText('Enter Unit 1');
        return;
    }

    else{
        this.productEntitiy.pricing.pricing3.unit = munit3;
    }


    var mTU1  =this.tm1.options[this.tm1.selectedIndex].value;
        if (mTU1 == 0){
            this.showEmptyText('Select 1st Time unit');
            return;
        }
        else{
            this.productEntitiy.pricing.pricing1.timeUnit = mTU1;
        }
    var mTU2  =this.tm2.options[this.tm2.selectedIndex].value;
        if (mTU2 == 0){
            this.showEmptyText('Select 2nd Time unit');
            return;
        }
        else{
            this.productEntitiy.pricing.pricing2.timeUnit = mTU2;
        }
    var mTU3  =this.tm3.options[this.tm3.selectedIndex].value;
         if (mTU3 == 0){
                this.showEmptyText('Select 3rd Time unit');
             return;
         }
         else{
             this.productEntitiy.pricing.pricing3.timeUnit = mTU3;
         }
    var price1 = this.price1.value;
        if (!validateNumber(price1)){
            this.showEmptyText('Enter PRice 1');
            return;
        }
        else{
            this.productEntitiy.pricing.pricing1.price = price1;
        }

    var price2 = this.price2.value;
        if (!validateNumber(price2)){
            this.showEmptyText('Enter PRice 2');
            return;
        }
        else{
            this.productEntitiy.pricing.pricing2.price = price2;
        }
    var price3 = this.price3.value;
        if (!validateNumber(price3)){
            this.showEmptyText('Enter PRice 2');
            return;
        }
        else{
            this.productEntitiy.pricing.pricing3.price = price3;
        }



        if (this.isImageUploded == false){
            return;
        }

        //Product Entity Has Been Constructed Push to Database

        var databasePath = 'products/books/'+this.productEntitiy.pid;
        pop(databasePath);
        this.database.ref(databasePath)
            .push(this.productEntitiy)
            .then(function (snapshot) {
               pop(snapshot);
            });








};


function dateSelected(date,ui) {
   pop(date);
}

function resetSubCategoriesOptions() {
    pop('clearing options');
    $('#sub_category').empty();

    // var mSubCategory = document.getElementById('sub_category');
    // for (var i = 0; i < mSubCategory.length; i++){
    //
    //    mSubCategory.remove(i);
    // }
}
function populateCompetitiveCateogires() {

    // pop('here');
    resetSubCategoriesOptions();
    var c_categories = ["Sub Category","GRE","GMAT","IELTS","APTI","TOEFL","MATHS INTRO","KPSC","TNPSC","BANKING","SSB","AFCAT","CENTRAL GOVERNTMENT"];




    var  options;
    var mSubCategory = document.getElementById('sub_category');
    for (var i =0;i < c_categories.length;i++){
        options = document.createElement("option");
        options.value = c_categories[i];
        options.text = c_categories[i];


        mSubCategory.appendChild(options);

    }
}
var populateGeneralCategories = function () {
    resetSubCategoriesOptions();
    var categories = ["Sub Category","Science Ficton","Drama","Action and Adventure","Romance","Mystery","Horror","Self help","Health",
        "Guide","Travel","Children's","Religion, Spirituality & New Age","Science","History","Math"
        ,"Poetry","Encylopedia's","Dictionaries","Comics","Art","CookBooks","Diaries","Journals","Prayer Books","Series","Triology"
        ,"Biographies","Autobiographies","Fantasy","Adult"

    ];

    var mSubCategory = document.getElementById('sub_category');

    var  options;
    for (var i =0;i < categories.length;i++){
        options = document.createElement("option");
        options.value = categories[i];
        options.text = categories[i];

           mSubCategory.appendChild(options);

    }
};
var populateStartupBooks = function () {

};
var populateCollegeBooks = function () {

};

/** This Method is Directly called from HTML
 * Which is what experts say so , who cares?
 * */
function baseCategorySelected(data){
    var vale = data.value;
    pop(data.value);
    switch (vale){
        case '0':
            popAlert('Enter a Proper Category');
            return;
        case '1':
            console.log('here');
            populateCompetitiveCateogires();
            break;
        case '2':
            populateGeneralCategories();
            break;
        case '3':
            populateStartupBooks();
            break;
        case '4':
            populateCollegeBooks();
            break;
        default:
            break;
    }





};
function fileUploaded(event){
        pop('in Function');

};


function popAlert(data) {
    alert(data);
}


window.onload = function () {
    window.insertBook = new InsertBook();
}