import React, { useContext, useEffect, useState } from "react";
import { FaEarlybirds } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
// import RestaurantContext from "../../context/RestaurantContext";

export default function Header({ id }) {
  
  const {pathname}=useLocation()
 
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // const [allItems, setallItems] = useState([]);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };
// useEffect(()=>{
//   setallItems(fetcheditems)
// },[fetcheditems])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos])
 
  // useEffect(()=>{
  //   setallItemaCopy(allItems)
  // },[])
  // useEffect(()=>{
  //   setallItemaCopy(allItems)
  // },[allItems]);
 

  // useEffect(()=>{
  //   dispatch(setFetchedItem(allItemaCopy))
  // },[allItemaCopy])
  // console.log(id)
  return (
    <>
   
      
   <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            Brand Name
            <FaEarlybirds size={32}/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={pathname==="/faq"?"nav-link ":"nav-link"} style={{color:pathname==="/faq"?"purple":""}} to="/faq">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={pathname==="/aboutus"?"nav-link ":"nav-link"} style={{color:pathname==="/aboutus"?"purple":""}} to="/aboutus">
                    About Us
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className={pathname==="/contactus"?"nav-link ":"nav-link"} style={{color:pathname==="/contactus"?"purple":""}} to="/contactus">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className={pathname==="/login"?"nav-link ":"nav-link"} style={{color:pathname==="/"?"purple":""}} to="/">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={pathname==="/signup"?"nav-link ":"nav-link"} style={{color:pathname==="/signup"?"purple":""}} to="/signup">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
     
    </>
  );
}
