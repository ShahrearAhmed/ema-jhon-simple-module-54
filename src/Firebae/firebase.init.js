import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/*
steps for authentication
--------------------------

Step-1:Initial Setup
1.firebase: create project
2.create web app
3.get configuration
4.Initialize firebase
5.Enable auth method


----------------
Step-2: Setup component
1.Create Login Component
2.Create Register Component
1.Create Route for Login and Register

----------------

Step-3:set auth system
1.setup sign in method
2.setup sign out method
3.user state
4.special observer
5.retturn necessary methods and states from useFirebase
-------------------

stpe-4:create auth context hook (useAuth)
1.create a auth context
2.create context provider
3.set context provider context value
4.use auth provider
5.create useAuth Hook
-------------------------

Step 5:create private route
1.Create private route
2.set private route
--------------------------

Step-6: Redirect after login
1.after login redirect user to their desired destination
*/