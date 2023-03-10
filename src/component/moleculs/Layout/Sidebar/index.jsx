import React from "react";
// import "../../../../assets/style/global.css"
import { Home, File, ShoppingCart, User, Users, BarChart2, Layers, PlusCircle, FileText } from 'react-feather';

export default function Sidebar() {
  return <div style={{ padding:0}} id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
  <div class="position-sticky sidebar-sticky">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
        <Home  size="24" /> 
          {/* <span data-feather="home" class="align-text-bottom"></span> */}
          Dashboard
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <File/>
          {/* <span data-feather="file" class="align-text-bottom"></span> */}
          Orders
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <ShoppingCart/>
          {/* <span data-feather="shopping-cart" class="align-text-bottom"></span> */}
          Products
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <Users/>
          {/* <span data-feather="users" class="align-text-bottom"></span> */}
          Customers
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <BarChart2/>
          {/* <span data-feather="bar-chart-2" class="align-text-bottom"></span> */}
          Reports
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <Layers/>
          {/* <span data-feather="layers" class="align-text-bottom"></span> */}
          Integrations
        </a>
      </li>
    </ul>

    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
      <span>Saved reports</span>
      <a class="link-secondary" href="#" aria-label="Add a new report">
        <PlusCircle/>
        {/* <span data-feather="plus-circle" class="align-text-bottom"></span> */}
      </a>
    </h6>
    <ul class="nav flex-column mb-2">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <FileText/>
          {/* <span data-feather="file-text" class="align-text-bottom"></span> */}
          Current month
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
        <FileText/>
          {/* <span data-feather="file-text" class="align-text-bottom"></span> */}
          Last quarter
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
        <FileText/>
          {/* <span data-feather="file-text" class="align-text-bottom"></span> */}
          Social engagement
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
        <FileText/>
          {/* <span data-feather="file-text" class="align-text-bottom"></span> */}
          Year-end sale
        </a>
      </li>
    </ul>
  </div>
</div>;
}
