import React from "react";

const AuthContext = React.createContext({
    verifyCode :Number,
    mobile :Number,
  
});

export default AuthContext;