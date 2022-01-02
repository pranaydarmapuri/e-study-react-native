import * as React from 'react'

let initialValue: any = {}
const AuthContext = React.createContext(initialValue)

const AuthContext1 = ({ children }: any) => {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext }
export default AuthContext1
