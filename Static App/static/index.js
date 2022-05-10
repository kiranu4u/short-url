//from parameters query full URL
var shorturl = window.location.pathname.substr(1);
var baseURL = "https://dev1-sre-apim.azure-api.net/shorturl/GetFullURL?alias=";
var requestURL = baseURL.concat(shorturl);
alert(shorturl.length);
var request = new XMLHttpRequest()
request.open('GET',requestURL,false)
//define request header
//request.setRequestHeader("Ocp-Apim-Subscription-Key","<API key>")
request.send();
alert(request.responseText);
if(request.responseText.length > 0){
    window.location=request.responseText
}
else if(shorturl.length < 1){
    //if there is no parameter, route to homepage
    window.location="/home"
}
else{
    //if there is no response from url, meaning not found
    window.location="/notfound"
}
