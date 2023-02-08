import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Price = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const[total,setTotal]= useState(0);
    const [price, setPrice] = useState([]);
    // var price1 = 0;
    useEffect(() => {
        let temp=[]
      for(let i=0;i<details.length;i++){
        temp.push(0)
      }
      setPrice(temp);
    }, []);
    
    const calculatePoints = (temp) => {
      let sum=0;

      temp.map((member, i) => {
        sum += parseInt(member);
        console.log("Line 19 "+member)
      });
        setTotal(sum);

      
    };

    // var temp=0, prev=0;
    // var marathon= new Array();
    // for(let i=0; i<details.length();i++){
    //     marathon[i]=0;
    // }
    // var marathon=[0,0,0]
  const details = [
    {
      name: "Marathon 1",
      img: "https://img.freepik.com/free-vector/marathon-race_52683-10624.jpg?w=2000",
      price: 500,
    },
    {
      name: "Marathon 2",
      img: "https://img.freepik.com/free-vector/marathon-race_52683-10624.jpg?w=2000",
      price: 600,
    },
    {
      name: "Marathon 3",
      img: "https://img.freepik.com/free-vector/marathon-race_52683-10624.jpg?w=2000",
      price: 700,
    },
  ];
  
  return (
    <div className="">
      <h1 className="sticky201 text-cyan-500 text-3xl   text-center mt-8 font-mono z-50">
        Buy the tickets:
        {/* {pointsLeft} */}
      </h1>
      {errorMessage && (
        <h1 className="sticky201  text-center px-20 z-50 py-5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium   mx-auto text-xl inline-block  ">
          {errorMessage}
        </h1>
      )}
      <div className="container px-8 ">
        <form>
          <div className=" flex justify-evenly flex-wrap  w-full  xl:mx-auto pt-12 mb-32">
            {details.map((member, i) => (
              <div
                key={`member${i}`}
                className="card text-center h-[450px] w-[450px] ml-2 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
              >
                <div className="card-img  text-center">
                  <img
                    src={member.img}
                    alt="cricketer"
                    className="text-cenetr"
                  />
                </div>
                <div className="card-content">
                  <p className="fontname text-gray-700  font-semibold ">
                    {member.name}
                  </p>
                  {/* <p className="card-post mt-2">{member.role}</p> */}
                  <p className="text-bold text-xl text-center text-cyan-600">Enter number of tickets of ₹{member.price}</p>
                  <input
                    type="number"
                    required
                    name={member.name}
                    min="0"
                    max="100"
                    step="1"
                    // value={member.rating}
                    placeholder="Enter the value"
                    className="pl-2 border-solid border-2 border-cyan-500 font-semibold mt-4 mb-4  text-amber-700 w-[200px] text-center py-1 border-opacity-75   rounded-md"
                    onChange={(e) => {
                      //   if (e.target.value >= 10) e.target.value = 10;
                      //   if (e.target.value <= 0) e.target.value = 0;

                      let temp = [...price];
                      //   temp[i] = e.target.value*member.price;
                      // temp.push(e.target.value * member.price);
                      temp[i] = e.target.value * member.price;
                      console.log("Line 96 " + e.target.value * member.price);
                      //   marathon=temp;
                      //   for(let i=0; i<3;i++){
                      //     price1+=marathon[i]
                      //   }
                      console.log("Line 104 " + e.target.value);
                      console.log("Line 105 " + member.price);

                      console.log("Line 107 " + e.target.value * member.price);

                      setPrice(temp);
                      calculatePoints(temp);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="  mb-24 text-center rounded-lg text-white bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium  px-5 py-2.5  mx-auto text-lg inline-block"
            >
              Pay ₹ {total}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Price;
