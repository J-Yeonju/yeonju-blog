import { useState } from 'react';
import { app } from "firebaseApp";
import { getAuth } from "firebase/auth";    // 현재 firebase 사용자가 로그인 되었는지 아닌지 체크

import Router from './components/Router';

function App() {
    const auth = getAuth(app);
    console.log(auth);
    
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); 
    return <Router isAuthenticated={isAuthenticated}/>
}

export default App;
