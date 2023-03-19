exports.getDate = function(){
    const today = new Date();
    //changing number into required format
    const options = {
        weekday:"long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
}
//since module is Object we export two functions as object
exports.getDay = function(){
    const today = new Date();
    //changing number into required format
    const options = {
        weekday:"long"
    };

    return today.toLocaleDateString("en-US", options);
}