import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Home.css";

import Products from "../../components/products/Products";
import HomeCarousel from "../../components/slider carousel/HomeCarousel";
import SignInSignUp from "../../components/sign-in/SignInSignUp";
import { getDataFromDB } from "../../firebase/firebase.utils";
import { init, setIsLoading } from "../../slices/appSlices";

const Home = ({ currentUser }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setIsLoading());
  //   const fetchData = async () => {
  //     try {
  //       await getDataFromDB().then((res) => dispatch(init(res)));
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, [dispatch]);
  return (
    <>
      <div className="home">
        <div className="home__container">
          <HomeCarousel />
        </div>
        <Products />
        {!currentUser && <SignInSignUp />}
      </div>
    </>
  );
};

export default Home;
