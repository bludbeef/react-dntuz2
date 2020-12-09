import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

const Navigation = () => {
  return (
    <nav class="navbar navbar-light navbar-expand-md bg-light justify-content-md-center justify-content-start">
      <a class="navbar-brand d-md-none d-inline" href="#">
        Brand
      </a>
      <button
        class="navbar-toggler ml-1"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar2">
        <span class="navbar-toggler-icon" />
      </button>
      <a class="nav-link" href="#_">
        <i class="fa fa-search mr-1" />
      </a>
      <div
        class="navbar-collapse collapse justify-content-between align-items-center w-100"
        id="collapsingNavbar2">
        <ul class="navbar-nav mx-auto text-md-center text-left">
          <li class="nav-item">
            <a class="nav-link" href="/profile">
              Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/maps">
              Kite Locations
            </a>
          </li>
          <li class="nav-item my-auto">
            <a class="nav-link navbar-brand mx-0 d-none d-md-inline" href="/">
              IKite Club
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/marketplace">
              Marketplace
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/azkites">
              A-Z Kites
            </a>
          </li>
        </ul>
        <ul class="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-facebook mr-1" />
            </a>{" "}
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-twitter" />
            </a>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
