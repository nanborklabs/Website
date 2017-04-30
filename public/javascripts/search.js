/**
 * Created by nandhu on 30/4/17.
 */

'use strict';



//The Main Functions which initilaizes the variables

function SearchBook() {


    this.checkSetup();
    this.isSignedIn();
    //
    // this.query = ;


    this.editbox = document.getElementById('search_editbox');
    this.searchButton = document.getElementById('search_button');
    this.searchButton.addEventListener('click',this.searchProduct.bind(this));
    // this.database() = ;
    //



}

SearchBook.prototype.isSignedIn = function () {


    pop('checking Login');
    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
            // User is signed in.

            pop('user Signed In');



        } else {
            // User is signed out.
            pop('user Signed Out');
            window.location.href = './Login.html';
            return;


        }

    });

};


SearchBook.prototype.checkSetup = function () {
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


SearchBook.prototype.searchProduct = function (data) {

    pop(data);
    this.mSearchQueryText = this.editbox.value;
    pop(this.mSearchQueryText);

    //Do Elastic Search Here
    //Get the Resuls back
    //Display Custom List
    this.database = firebase.database();
    var bookRefs = this.database.ref().child('/products/books');

    booksRef.orderByChild("productName").on("value", function(snapshot) {


        var pid = snapshot.key.pid;
        pop(pid);
        var imageURL = snapshot.key.imageURL;
        var Name =snapshot.key.productName;

        if (this.mSearchQueryText ==Name){
            pop('match');

        }
        else{
            pop('no');
        }

        // pop(dinoData);

    });



}
window.onload = function () {
    window.search = new SearchBook();
}