
import NavBar from "./NavBar"; // Import your existing NavBar component
import cityImage from "../assets/city-image.svg"
import MaxWidth from "./MaxWidth";
const Billboard = () => {
  return (
    <div
      className="relative h-[860px] w-ful bg-cover   bg-left-bottom bg-top"
      style={{ backgroundImage: `url(${cityImage})` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute "></div>

      {/* NavBar placed inside the billboard */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <NavBar />
      </div>


      {/* Billboard Text Content */}
      <MaxWidth>
        <div className="absolute inset-y-0 left-[10%] sm:left-[15%] flex items-center justify-start sm:px-16 md:px-10 z-0">
          <div className="text-white max-w-lg">
            <h1 className=" font-regular font-phudu text-[80px]">
              Sheger city
            </h1>
            <h1 className="font-regular font-phudu text-[80px]">
            Administration
            </h1>
  
          </div>
        </div>
      </MaxWidth>

    </div>
  );
};

export default Billboard;
