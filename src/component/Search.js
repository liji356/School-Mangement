import React, { useState } from 'react'
import Header from './Header'

const Search = () => {

var [admission,setadmission]=useState("")

const newsearch=()=>{
    const data={"admission":admission}
    console.log(data)
}

  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Admission No</label>
                    <input onChange={(x)=>{setadmission(x.target.value)}} type="text" className="form-control"/>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={newsearch} className="btn btn-primary">SEARCH</button>
                </div>
                    





                    </div>
                    </div>
                    </div>
                
                </div>
    </div>
  )
}

export default Search