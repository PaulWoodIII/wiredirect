#WI Redirect

WI Redirect is a simple node.js application that Walkin uses to redirect users to different URLs. Walkin wanted to track what users went to which url. However we don't have time to save these interactions to a database. So using log files we can securely save the user's access token, device information, and the app version number. Then at a later date we can insert this data up to the database, or use it for other analytical purposes.

#Token, Device, and Version

The Redirect application should strip the token, device and version information from the url. Then the redirect application will redirect the HTTP request to the url specificed in the url parameter.

#Endpoints

Clients use the "walkin://" url structure to handle messages from the webview. This redirect server helps the client start and finish the webview. Of course pages could direct the client to these URLs themselves but then we'd lose some of our logging functionality which is the purpose of this application afterall. 

Redirect is useful 

##Redirect

URL:
/redirect

The Redirect application should strip the token, device and version information from the url. Then the redirect application will redirect the HTTP request to the url specificed in the url parameter.

In the future we might change this to use the token somehow, especially if the 'url' is a Walkin hosted site of some sort. The Redirect application will have a list of known sites to do this with. The default however will always be the case above.

##Error

URL:
/error

redirects the HTTP request to: "walkin://error/message:ErrorMessageHere/errorTitle:Title/"

3rd party websites or walkin hosted pages can point to this URL to get the proper error URL redirect from the server. It will redirect the client to a generic error. If a title or message is specified then the title and message will be included.

The application should close the webview and display an alert with the specified title and message

##Finish

URL:
/finish 

redirects the user to "walkin://"

3rd party websites or walkin hosted pages can point to this URL to get the proper close URL redirect from the server, which is simply "walkin://" 

The Application should close the webview immediately

