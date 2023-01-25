import React from "react";
import "./CategoryPage.css";
import { useNavigate } from "react-router-dom";
function CategoryPage() {
  const navigate = useNavigate();
  const handleFood = (e) => {
    e.preventDefault();
    console.log("food");
  };
  const handleMusic = (e) => {
    e.preventDefault();
    console.log("music");
  };
  const handleMuseums = (e) => {
    e.preventDefault();
    console.log("museums");
  };
  const handleOutDoors = (e) => {
    e.preventDefault();
    console.log("outDoors");
  };
  const handleNext = (e) => {
    e.preventDefault();
    console.log("next");
    navigate("/chooseEvent");
  };
  return (
    <div className="categoryPage">
      <form onSubmit={handleNext}>
        <div className="categoryPageButtons">
          <button onClick={handleFood} className="btn btn-1 btn-sep icon-info">
            <div className="categoryBox">
            <svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

<g id="a"/>

<g id="b">

<path d="M25,15H7c0-4.42,3.58-8,8-8h2c4.42,0,8,3.58,8,8Z" style="fill:#cfb1fc;"/>

<path d="M30,14h-4.059c-.4842-4.3558-4.0892-7.7736-8.5226-7.9788-.2018-.5902-.7552-1.0173-1.4135-1.0173h-.0098c-.6582,0-1.2085,.4269-1.4091,1.0171-4.4355,.2033-8.0426,3.6218-8.527,7.979H2c-.5527,0-1,.4478-1,1s.4473,1,1,1h1.2797l.316,.9487c.4092,1.2271,1.5527,2.0513,2.8457,2.0513h3.0853l1.8824,2.4648c.1309,.1714,.3135,.2959,.5205,.355,.126,.0356,3.0498,.8574,7.3936,1.1006l2.3049,2.1502-.1653,.0949c-.4785,.2749-.6445,.8862-.3691,1.3652,.1846,.3218,.5215,.502,.8682,.502,.1689,0,.3398-.0425,.4971-.1328l6.3457-3.644c.4785-.2749,.6445-.8862,.3691-1.3652-.2754-.4785-.8857-.645-1.3652-.3691l-.1553,.0892c-.4365-.932-1.0585-1.8801-1.6201-2.6483,1.0916-.1739,2.0128-.9393,2.3711-2.0141l.316-.9482h1.2797c.5527,0,1-.4478,1-1s-.4473-1-1-1Zm-15-6h2c3.519,0,6.4323,2.6134,6.9202,6H8.0799c.4879-3.3866,3.4011-6,6.9201-6Zm8.4432,16.0283l-3.0214-2.8188c-.1738-.1616-.3984-.2568-.6357-.2681-3.5-.1655-6.125-.749-6.9961-.9644l-.7463-.9771h11.4841c.6821,.8267,1.8297,2.3546,2.3835,3.611l-2.4681,1.4174Zm3.0646-7.7124c-.1367,.4092-.5186,.6841-.9492,.6841H6.4414c-.4307,0-.8125-.2749-.9492-.6836l-.1054-.3164H26.6131l-.1053,.3159Z" style="fill:#96c;"/>

</g>

</svg>
            </div>
            Food
          </button>
          <button onClick={handleMusic} className="btn btn-2 btn-sep icon-cart">
            <div className="categoryBox">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8894 5.1786V16.4786C20.8894 18.4586 19.2794 20.0686 17.2994 20.0686C15.3294 20.0686 13.7094 18.4586 13.7094 16.4786C13.7094 14.5086 15.3294 12.8986 17.2994 12.8986C18.1394 12.8986 18.8894 13.1886 19.4994 13.6686V7.7186L10.2894 10.3386V18.4086C10.2894 20.3886 8.66937 21.9986 6.69937 21.9986C4.71937 21.9986 3.10938 20.3886 3.10938 18.4086C3.10938 16.4386 4.71937 14.8286 6.69937 14.8286C7.52938 14.8286 8.27938 15.1186 8.88938 15.5886V6.7486C8.88938 5.2786 9.77938 4.1386 11.1894 3.7586L16.9694 2.1786C18.1394 1.8586 19.1294 1.9686 19.8294 2.5086C20.5394 3.0386 20.8894 3.9386 20.8894 5.1786Z"
                fill="#292D32"
              />
            </svg>
            </div>
            <div className="categoryBox">Music</div>
            
          </button>
          <button
            onClick={handleMuseums}
            className="btn btn-3 btn-sep icon-heart"
          >
            Museums
          </button>
          <button
            onClick={handleOutDoors}
            className="btn btn-4 btn-sep icon-send"
          >
            Outdoors
          </button>
        </div>
        <button>Next</button>
      </form>
    </div>
  );
}

export default CategoryPage;
