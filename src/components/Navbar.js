import React from 'react'
import propTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
   {/* <Link className="navbar-brand" to="/">{props.tit}</Link> After clicking on TextUtiles on the webpage it wont get reload after placinhg a == a and href as to*/}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {/*  <Link  className="navbar-brand" aria-current="page" to="/">Home</Link>   Before a we had a and before to we had href */}
        </li>
        <li className="nav-item">
      {/*  <Link className="navbar-brand" aria-current="page" to="/about">About</Link>    Before a we had a and before to we had href*/}
        </li>  
        
      </ul>

      <div className="d-flex">
  <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
  <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
  <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
  <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
  
      </div>

      {/*<form className="d-flex" role="search">
        <input className=
        "form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
  </form>*/}
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick = {()=>{props.toggleMode(null)}} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
    Enable Toggle Mode
  </label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {tit: propTypes.string.isRequired, // Navbar.smallletter only at the starting if import PropTypes from 'prop-types'
abo: propTypes.string
}

Navbar.defaultProps = {
    tit:"Set the title",
    abo:"Home"
};