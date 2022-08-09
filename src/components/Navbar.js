import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-dark bg-dark">
    <div className='container-fluid'>
      <h2 className="navbar-brand" style={{ color: "white" }}>
      <img src="/public/images/01.jpg" alt="" width="30" height="30" className="d-inline-block align-text-top"></img>
        Central de Perícias
      </h2>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/serv">Nossos Serviços</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contato">Contato</Link>
        </li>
      </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;

// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Navbar() {
//   return (
//         <nav className="navbar navbar-expand-lg bg-light">
//             <div className="container-fluid">
//                 <Link className="navbar-brand">Central de Pericias Brasil</Link>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                         <Link className="nav-link active" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                         <Link className="nav-link" to="/">Nossos Serviços</Link>
//                         </li>
//                         <li className="nav-item">
//                         <Link className="nav-link" to="/">Contato</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
// )
// }

// export default Navbar;