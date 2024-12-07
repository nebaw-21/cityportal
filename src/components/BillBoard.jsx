
import NavBar from "./NavBar"; // Import your existing NavBar component
import cityImage from "../assets/pedro-lastra-Nyvq2juw4_o-unsplash.jpg"
const Billboard = () => {
  return (
    <div
      className="relative h-[500px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${cityImage})` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute "></div>

      {/* NavBar placed inside the billboard */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <NavBar />
      </div>

      {/* Billboard Text Content */}
      <div className="absolute inset-y-0 left-0 flex items-center justify-start px-8 sm:px-16 z-0">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl text-center sm:text-5xl font-bold mb-4">
            Sheger city
          </h1>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Administration
          </h1>
 
        </div>
      </div>
    </div>
  );
};

export default Billboard;
