import { createContext, useState } from "react"

export const AppContext = createContext();


function Context({children}) {
    const [appState, setAppState] = useState(0)
  return (
    <AppContext.Provider value={appState}>
        {children}
    </AppContext.Provider>
  )
}

export default Context