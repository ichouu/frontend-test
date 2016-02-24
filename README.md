
# Frontend Developer Test

Please fork this repository to begin your front end developer test, then download your repository and follow the installation instructions.

# Installation
Installation requires node.js on your computer

npm install

node server.js

# Instructions
There should now be a web server running at http://localhost:8888
Follow the instructions displayed on that webpage.

The node server provides everything you need for the back end of the test. You are welcome to look at the server code, but you should not need to modify anything to make your front end work. All of your code should be placed in the public directory in this project. The node server will act as the web server for your front end application.

Please insure that your code runs properly with the node server. Test all the features and make sure that no Javascript errors are generated.

Thank you

Questions

What URL should be used to access your application?

Done locally so http://localhost:8888/ once you have started your node server. 

What libraries did you use to write your application?

Used AngularJS and Materialize

What influenced the design of your user interface?

Used Materialize for the user interface. Used materialize to make the app responsive and visually pleasing. 

What steps did you take to make your application user friendly?

With AngularJS, the application doesn't need to be refreshed for new input to be displayed on the screen. Its easily navigated with the build it partials nav bar. Also using Materialize keeps the application well spaced out and easy to read. 

What steps did you take to insure your application was secure?

Since the back-end was premade, Security was more lax. 
I built the applications front end based upon what was given to me for server side.

What could be done to the front end or back end to make it more secure?

There are many things that should have been done to make the application more secure. 
A front end implementation of cookies should have been done and each cookie should have been checked at every partial of the application to ensure that it is the same user logged in. Having a real back end (mongo for example) so that data can be saved into a db and authenticated correctly. Enabling session on server side so that there is authetication on both front and back end. Should've guarded against injection attacks and limited amount of login attempts. 
