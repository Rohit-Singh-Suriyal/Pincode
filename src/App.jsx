import { useState, useEffect, useRef } from "react";
import Info from "./Info";
import { RxCross1 } from "react-icons/rx";
import { LuMoveLeft } from "react-icons/lu";
import image from "./assets/travel.jpg";
function App() {
  const [obj, setobj] = useState({});
  const [loading, setloading] = useState(null);
  const [message, setmessage] = useState("");
  const [cross, setcross] = useState(null);
  const [showobj, setshowobj] = useState(null);
  const [error, seterror] = useState(null);
  const input = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    if (input.current.value === "") {
      setmessage("Input is empty");
      return;
    }
    setloading(true)
    setcross(false);
    seterror(false);
    setshowobj(false);
    e.preventDefault();
    const code = Number(input.current.value);
    const fetchdata = async () => {
      try {
        const res = await fetch(`https://api.zippopotam.us/in/${code}`);
        const data = await res.json();
        console.log(data);
        if (Object.keys(data).length === 0) {
          console.log("empty");
          input.current.value === "";
          seterror(true);
          setmessage("invalid postal code");
          return;
        }
        setcross(true);
        setshowobj(true);

        const obj = {
          country: data.country,
          places: data.places,
        };

        setobj(obj);
        setloading(false);
      } catch (error) {
        setmessage(error.message);
        return;
      }
    };
    fetchdata();
  };
  const backhandler = () => {
    setshowobj(false);
    setcross(false);
    setmessage("");

    input.current.value = "";
    
  };

  return (
    <>
      <img
        className="w-[100%] absolute h-[100vh] brightness-50 "
        src={image}
      ></img>
      {!showobj &&
      <div className="absolute z-40 text-5xl top-[4%] font-mono font-bold left-[30%] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  ">
        Only Indian Postal Code
      </div>
}
      <div className="bg-gray-800  w-[100%] min-h-[100vh] p-2">
        
        {loading && !error && <p className="absolute top-[15%] z-40 text-[35px] text-white ml-[40%]">...Loading</p>}
        {cross && !error && !loading && (
          <LuMoveLeft
            onClick={backhandler}
            className="bg-black text-white text-6xl hover:bg-blue-700 rounded-full absolute left-[10px] p-4"
          />
        )}
        {!showobj && (
          <div className="w-[40%] animate-right h-48 shadow-current bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center ml-[28%] mt-[12%] rounded-2xl relative">
            {(message||error) && (
                <p className="absolute z-20 top-[120px] left-[160px] text-red-500">
                  {message}
                </p>
              )}
            <div className=" rounded-2xl p-7 bg-blue-500">
              <form onSubmit={submithandler}>
                <input
                  ref={input}
                  className="  outline-none p-2 text-[20px]"
                  placeholder="Enter the Postal Code"
                ></input>
                <button className="bg-purple-600 pt-[13px] text-white hover:bg-purple-400 pb-[10px] font-bold   pl-2 pr-2">
                  Search
                </button>
              </form>
            </div>
          </div>
        )}
        {!loading && showobj && <Info obj={obj} />}
      </div>
    </>
  );
}

export default App;
