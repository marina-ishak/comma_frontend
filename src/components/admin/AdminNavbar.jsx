import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <>
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-warning sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <div className="sidebar-brand d-flex align-items-center justify-content-center">
            Comma
          </div>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <Link className="nav-link" to="/admin/dashboard">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <li className="nav-item">
            <Link className="nav-link" to="/admin/users">
              <i className="fa-solid fa-users"></i>
              <span>Users</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/packages">
              <i className="fa-solid fa-cube"></i>
              <span>Packages</span>
            </Link>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i className="fa-solid fa-building"></i>
              <span> Branches</span>
            </a>
            <div
              id="collapsePages"
              className="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <Link className="collapse-item" to="/admin/add_branch">
                  + Add
                </Link>
                <h6 className="collapse-header">current branches:</h6>
                <Link className="collapse-item" to="">
                  Nasr city
                </Link>
                <Link className="collapse-item" to="">
                  Obour
                </Link>
                <Link className="collapse-item" to="">
                  New Cairo
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Charts</span>
            </Link>
          </li>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Admin Admin
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="../../img/undraw_profile.svg"
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="container-fluid">
              <Outlet />
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>
                  Copyright &copy; Comma Co-Working Space{" "}
                  {new Date().getFullYear()}
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}