import React from "react";
import open from "../assets/Open-Status.png";
import closed from "../assets/Closed- Status .png";
import bugIcon from "../assets/BugDroid.png";
import helpIcon from "../assets/Lifebuoy.png";

const AllCart = ({ data }) => {
  return (
    <div className="card min-h-full w-90 mx-auto md:w-96 bg-[#414558] border-t-4 shadow-sm text-white" 
         style={{ borderTopColor: data?.status === "open" ? "#22c55e" : "#ef4444" }}>
      
      <div className="card-body p-5">
      
        <div className="flex flex-row justify-between items-center">
          <img className="w-5 h-5" src={data?.status === "open" ? open : closed} alt="status" />
          <span className={`badge text-[12px] p-3 font-bold border-none 
            ${data?.priority === "high" ? "bg-red-300 text-red-800" : 
              data?.priority === "medium" ? "bg-yellow-300 text-yellow-800" : "bg-blue-300 text-blue-800"}`}>
            {data?.priority}
          </span>
        </div>

      
        <div className="my-3">
          <h2 className="text-xl font-bold">{data?.title}</h2>
          <p className="text-sm opacity-80">{data?.description}</p>
        </div>


        <div className="flex flex-wrap gap-2 my-2">
          {data?.labels?.map((label, index) => {
            
            const isBug = label.toLowerCase() === "bug";
            const isHelp = label.toLowerCase() === "help" || label.toLowerCase() === "question";

            return (
              <div 
                key={index} 
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-bold text-black
                  ${isBug ? "bg-red-400" : isHelp ? "bg-blue-400" : "bg-gray-300"}`}
              >
                {isBug && <img src={bugIcon} className="w-4 h-4" alt="bug" />}
                {isHelp && <img src={helpIcon} className="w-4 h-4" alt="help" />}
                <span className="uppercase">{label}</span>
              </div>
            );
          })}
        </div>

        <div className="divider opacity-20"></div>

      
        <div className="text-xs opacity-60">
          <p>#1 by {data?.author}</p>
          <p>{data?.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default AllCart;