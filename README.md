# livetheworld
------------------------------------------------------------------------------------
Setup

1. Clone repo to your personal computer.
2. Open it in any Text Editor of your preference.
3. Run command "npm install" in terminal to install dependencies.
4. Go to /pages/GoogleMaps/GoogleMaps.js and edit "bootstrapURLKeys" with your google map keys to use google map.
4. Run command "npm start" to launch the application in browser. 
------------------------------------------------------------------------------------
Assumptions

1. All of the apis except Login will always resolve with status 200.

------------------------------------------------------------------------------------
Development Notes

1. Folder Structure:
	"/api/" folder contains generic configuration for axios to consume apis.
	"/components/Common/" contains all of the components that are reused in multiple parts of the application e.g "Favorite Component".
	"/pages/" contains all of the container pages that are composed of multiple reusable components. e.g "Activity Page".
	"/redux/actionCreators" contains relevant action creators to be consumed by pages and/or components.
	"/redux/actionTypes" contains relevant mapped keys to prevent errors while dispatching redux events from action creators or receiving events in reducers.
	"/redux/reducers" contains reducers for redux store and a root reducer to setup store.
	"/services/" contains methods for api calls to be reused all over the application.

2. Eact componet or page has its own folder to club its Page (container), css file, and components that are only used in this Page/Component to utilize React's 	   components based architecture efficiently.

3. Most of the css is implemented using inline styles inside components because of relevantly smaller scale of the application.

4. Design pattern used is "Atomic design".
