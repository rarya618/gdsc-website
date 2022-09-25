import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const AuthRoute = () => {
    const auth = getAuth();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        AuthCheck();
    }, [auth])

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false);
        } else {
            console.log('unauth');
        }
    })

}

export default AuthRoute;