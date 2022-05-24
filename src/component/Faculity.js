
import React, { useState } from 'react'
import Header from './Header'

const Faculity = () => {
    var[name,setname]=useState("")
    var[Education,setEducation]=useState("")
    var[Mobile,setmob]=useState("")
    var[Address,setaddress]=useState("")
    var[pincode,setpincode]=useState("")
    var[District,setdistrict]=useState("")

    const newfaculity=()=>{
        const data={"name":name,"Education":Education,"Mobile":Mobile,"Address":Address,"pincode":pincode,"District":District}
         console.log(data)
    }
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">name</label>
                    <input onChange={(x)=>{setname(x.target.value)}} type="text" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="forn-label">Education</label>
                     <select onChange={(x)=>{setEducation(x.target.value)}} name="" id="" className="form-control">
                       <option value="1st Standard">High School</option>
                       <option value="2nd Standard">High Secondary</option>
                       <option value="3rd Standard">Graduate</option>
                       <option value="4th Standard">Post Graduate</option>
                       </select>
                       <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Mobile No</label>
                    <input onChange={(x)=>{setmob(x.target.value)}} type="text" className="form-control"/>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Address</label>
                    <textarea onChange={(x)=>{setaddress(x.target.value)}} className="form-control" name="" id="" cols="30" rows="10"></textarea>
                    </div>




                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Pincode</label>
                    <input onChange={(x)=>{setpincode(x.target.value)}} type="number" className="form-control"/>
                </div>
                 
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="forn-label">className</label>
                   <select onChange={(x)=>{setdistrict(x.target.value)}} name="" id="" className="form-control">
                       <option value="Alappuzha">Alappuzha</option>
                       <option value="Ernakulam"> Ernakulam</option>
                       <option value="Idukki"> Idukki</option>
                       <option value="Kannur">Kannur</option>
                       <option value="Kasaragod">Kasaragod</option>
                       <option value="Kollam "> Kollam</option>
                       <option value="Kottayam">Kottayam</option>
                       <option value="Kozhikode">Kozhikode</option>
                       <option value="Malappuram"> Malappuram </option>
                       <option value="Palakkad">Palakkad</option>
                       <option value="Pathanamthitta">Pathanamthitta</option>
                       <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                       <option value="Thrissur">Thrissur</option>
                       <option value="Wayanad">Wayanad</option>
                   </select>
                   </div>
                   
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={newfaculity} className="btn btn-primary">SUBMIT</button>
                </div>
                       </div>

            </div>
            </div>
            </div>
            </div>
           </div>
        
  )
}

export default Faculity