import React, { useState } from 'react'
import Header from './Header'

const AddStud = () => {
    var[admission,setadmission]=useState("")
    var[rollno,setrollno]=useState("")
    var[name,setname]=useState("")
    var[std,setstd]=useState("")
    var[parent,setparent]=useState("")
    var[mob,setmob]=useState("")
    var[address,setaddress]=useState("")

    const newstud=()=>{
        const data={"admission":admission,"rollno":rollno,"name":name,"class":std,"parent":parent,"mob":mob,"address":address}
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
                    <label for="" className="form-label">Admission No</label>
                    <input onChange={(x)=>{setadmission(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Roll No</label>
                    <input onChange={(x)=>{setrollno(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">name</label>
                    <input onChange={(x)=>{setname(x.target.value)}} type="text" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">className</label>
                   <select onChange={(x)=>{setstd(x.target.value)}} name="" id="" className="form-control">
                       <option value="1st Standard">1st Standard</option>
                       <option value="2nd Standard">2nd Standard</option>
                       <option value="3rd Standard">3rd Standard</option>
                       <option value="4th Standard">4st Standard</option>
                       <option value="5th Standard">5st Standard</option>
                       <option value="6th Standard">6st Standard</option>
                       <option value="7th Standard">7st Standard</option>
                       <option value="8th Standard">8st Standard</option>
                       <option value="9th Standard">9st Standard</option>
                       <option value="10th Standard">10st Standard</option>
                       <option value="11th Standard">11st Standard</option>
                       <option value="12th Standard">12st Standard</option>
                   </select>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Parent Name</label>
                    <input onChange={(x)=>{setparent(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Mobile</label>
                    <input onChange={(x)=>{setmob(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" class="form-label">Address</label>
                 <textarea onChange={(x)=>{setaddress(x.target.value)}}  className="form-control"  name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={newstud} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>




        </div>
        


        

    
        
       
  )
}

export default AddStud