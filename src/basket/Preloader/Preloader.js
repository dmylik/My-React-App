import preloader from "../../assets/svg/spinning-circles.svg";
import pr from './preloader.module.css'
import React from "react";

const Preloader = () =>{
    return <div className={pr.Preloader}><img src={preloader}/></div>
}

export default Preloader