//from parameters query full URL
var shorturl = window.location.pathname.substr(1);
var baseURL = "https://dev1-sre-apim.azure-api.net/shorturl/GetFullURL?alias=";
//var baseURL = "https://shorturlpoc.azurewebsites.net/api/GetFullURL?alias=";
var requestURL = baseURL.concat(shorturl);
var request = new XMLHttpRequest()
request.open('GET',requestURL,false)
//define request header
//request.setRequestHeader("Ocp-Apim-Subscription-Key","<API key>")
request.setRequestHeader("Access-Control-Allow-Origin","https://dev1-sre-apim.developer.azure-api.net")
request.setRequestHeader('Access-Control-Allow-Methods','GET')
request.send();

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
