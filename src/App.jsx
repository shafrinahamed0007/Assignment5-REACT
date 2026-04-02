import MainCart from "./Components/MainCart";
import Navbar from "./Components/Navbar";

const allData = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  return res.json();
};

const dataPromise = allData();
console.log(dataPromise);

function App() {
  return (
    <div>
      <Navbar />
      <MainCart dataPromise={dataPromise} />
    </div>
  );
}

export default App;
