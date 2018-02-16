Beer Container Monitor Board
============================

This is a simple full-stack solution using reactjs/expressjs, built on my own created framework (EasyWeb).  
Pleare refer to [https://github.com/guoding83128/EasyWeb] for the details of EasyWeb.  

## Usage
1. install node.js
2. install yarn
3. git clone 
4. go to project folder, run "yarn install && yarn develop"
5. go to http://localhost:3000 to see the beer-container monitor board 

## Unit Test
yarn test  

## Key highlights
* using Razzle to handle the whole js project's compiling/building with little configuration.
* using React Server-side rendering.
* using Redux to control the model, React compoent is pure view function, clear MVC solution.
* using Redux-thunk to handle the asynchronous logic (like ajax).
* using long-polling to monitor the beer-container's temperature in real-time. (give more details below)

## Long polling
One important point required deep consideration in the project is how to get the beer-containers' status in real-time. A simple thought is to get the status from server continuously; apparantly is's a bad idea, the infinite polling is time and resouce consuming with lots of unnecessary traffic.
With javascript event-based programming, I used push technology to resolve this. The idea is that the server will only push event when it detects any beer-container's status change.
* An event bus will be set up during server initialization.
* Every client will get the current beer-container data via httpGet from server, after that, it will enter the long-polling status. The clinet send httpGet request to server again with different endpoint. It won't get resonse untile a status-updating event pushed by server, after that or request timeout, the clinet send the request again to wait for the next status-updating event.
* When handling the request from clinet for getting status-updating event, the server will listen to the event bus. It will return response with updated beer-containers' data when new status-updating event fired off. 
* No beer-container's status chaning, no event fired off, no traffic between client and server.

Refer to src/server/continer-data/data-manager.js for detail logic.

## Better solution in version 2.0
The websocket connection should be the best solution for this scenario. We can use some third-party library to do that (like https://github.com/websockets/ws). 

