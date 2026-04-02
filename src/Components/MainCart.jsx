import React, { use } from "react";
import AllCart from "./AllCart";

const MainCart = ({ dataPromise }) => {
  const datas = use(dataPromise);
  console.log(datas.data);
  return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  md:w-11/12 md:mx-auto">
    {datas.data.map((data) => <AllCart key={data.id} data={data} />)}
    </div>;
};

export default MainCart;
