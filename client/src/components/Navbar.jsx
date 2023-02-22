import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar() {
  const [search,setSearch] = useState('')


    return (
        <>
        <div className="">
        <nav className="navbar bg-light sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">หน้าแรก</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BALLOON SUMMER</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              เมนูต่างๆ
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/create">ลงทะเบียนข้อมูลคิวลูกค้า</Link></li>
              <li><Link className="dropdown-item" to="/shelt/deliveryIndex">แสดงคิวสินค้าทั้งหมด</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link className="dropdown-item" to="/">Something else here</Link></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2"
          type="search"
          placeholder="ค้นหา"
          aria-label="Search"
          value={search}
          onChange ={(e)=>{setSearch(e.target.value)}}/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
        </div>
        </>
    )
}
export default Navbar;