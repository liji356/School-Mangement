import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>



<nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">School Management</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
          <Link className="nav-link active"to={"/"}>Add Student</Link>
          <Link className="nav-link active"to={"/adsearch"}>Search By Addmission No</Link>
          <Link className="nav-link active"to={"/faculity"}>Add Faculity</Link>
          <Link className="nav-link active"to={"/namesearch"}>Search by Name</Link>
          <Link className="nav-link active"to={"/viewstudent"}>View Student</Link>
          <Link className="nav-link active"to={"/viewfaculity"}>View Faculity</Link>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header