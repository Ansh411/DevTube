import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-w-0 min-h-screen bg-gray-50">
        <MainContainer />
      </main>
    </div>
  );
};

export default Body;
