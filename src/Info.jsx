const Info = ({ obj }) => {
  console.log(obj);
  console.log(obj.places);

  return (
    <>
      <div className="flex justify-center items-center relative max-w-[900px] min-h-[80vh]  ml-auto mr-auto mt-[5%] bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500  h-[350px]  rounded-3xl  overflow-hidden flex-wrap overflow-y-auto bg-transparent scrollbar-thumb-black scrollbar-w-[10px] scrollbar-thin scrollbar-w-[4px]  ">
        {obj.places.map((item) => (
          <div className="bg-black text-white mt-[20px] font-inter  transition-transform  hover:duration-1000 ease-in-out hover:scale-110 w-[400px]  rounded-3xl m-5 p-8">
            <div className="flex flex-wrap pt-[10px] ">
              <p className=" mr-8 w-[110px] line-clamp-1">Country</p>
              <p className="line-clamp-1"> {obj.country}</p>
            </div>
            <div className="flex  pt-[10px]">
              <p className="mr-8 w-[110px] line-clamp-1">Place Name:</p>
              <p className="line-clamp-1">{item["place name"]}</p>
            </div>
            <div className="flex pt-[10px]">
              <p className="mr-8 w-[110px]">Longitude:</p>
              <p>{item.longitude}</p>
            </div>
            <div className="flex pt-[10px]">
              <p className="mr-8  w-[110px]">Lattitude:</p>
              <p>{item.latitude}</p>
            </div>
            <div className="flex pt-[10px]">
              <p className="mr-8 w-[110px]">State:</p>
              <p>{item.state}</p>
            </div>
            <div className="flex pt-[10px]">
              <p className="mr-8  w-[110px] line-clamp-1">
                State Abbreviation:
              </p>
              <p>{item["state abbreviation"]}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Info;
