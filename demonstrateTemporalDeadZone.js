function demonstrateTDZ(){
    console.log("Before Assignment:")
    console.log(myFavSong);
    // ReferenceError: Cannot access 'myFavSong' before initialization

    console.log("After Assignment:")
    let myFavSong = "Shoorveer 3"
    console.log(myFavSong);
}

demonstrateTDZ();