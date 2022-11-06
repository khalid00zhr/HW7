import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Details from './Details'
import GetAPI from './GetAPI'


function Routers() {

  return (
    <div>
     
                <Routes>
                  {/* <Route exact path='/' element={<Create/>} /> */}
                  <Route exact path='/' element={<GetAPI/>} />
                  <Route path='/deta/:Id' element={<Details/>}/>
                 </Routes>
    </div>
  )
}

export default Routers