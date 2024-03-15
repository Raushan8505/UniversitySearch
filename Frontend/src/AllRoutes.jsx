import { Route, Routes } from "react-router";
import Fav from "./Components/Fav";
import NavbarUp from "./Components/Navbar";
import SingleCard from "./Components/SingleCard";

const AllRoutes = ({data, setData}) => {
  return (
    <>
      <Routes>
        <Route path="/fav" element={<Fav/>} />
        {/* <Route path="/" element={<NavbarUp />} /> */}
        <Route path="/" element={<SingleCard data={data} setData={setData}/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;