import React from "react"
import Fpage from './first-page/Fpage'
import Spage from './sec-page/Spage'


function App() {
    return <>
        <div className="m-site">
            <Fpage />
        </div>
        <div className="m-site" style={{marginTop: "6rem"}}>
            <Spage />
        </div>
        
    </>
}

export default App;