import {Outlet, Link} from "react-router-dom";

function Layout () {
    return(
        <main className="d-flex flex-column min-vh-100" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg)`,
          backgroundSize: 'cover'
      }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand fw-bold text-white" style={{fontFamily:'cursive', fontSize:'50px'}}  to="/">Coffee & Chill</Link>
            
  <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon" ></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item active">
      <Link className="nav-link fw-bold text-white" to="home">Home</Link>
      </li>
      <li className="nav-item active">
      <Link className="nav-link fw-bold text-white" to="about">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link fw-bold text-white" to="contact">Contact</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link fw-bold text-white" to="services">Services</Link>
      </li>
      
    </ul>
  </div>
</div>
  
</nav>

<div className="container p-5"></div>

<Outlet></Outlet>

<footer className="bg-dark p-2 text-white text-center mt-auto">
<small>© Coffee & Chill Company. All rights reserved.</small>
</footer>
       
        </main>

        
        
    )
}

export default Layout;