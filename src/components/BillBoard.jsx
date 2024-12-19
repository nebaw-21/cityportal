
import NavBar from "./NavBar"; // Import your existing NavBar component
import cityImage from "../assets/pedro-lastra-Nyvq2juw4_o-unsplash.jpg"
import MaxWidth from "./MaxWidth";
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
      <MaxWidth>
        <div className="absolute inset-y-0 left-[10%] sm:left-[15%] flex items-center justify-start sm:px-16 md:px-10 z-0">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Sheger city
            </h1>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Administration
            </h1>
  
          </div>
        </div>
      </MaxWidth>

    </div>
  );
};

export default Billboard;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IlZveUlHdDFCNEp2TVZzMFZXRzhSIiwidmVyc2lvbiI6MSwiaWF0IjoxNzMzNjYxMzAyMDU5LCJzdWIiOiJFakhvSUpvUW1xYXhScnlLaEVCWiJ9.pBaS1euB1zrFb3oGaTTOMBjP5eRyuMhQVKhdQ8BGp7o
//Cabinet  https://cdn.courses.apisystem.tech/memberships/B4AUUrc6WphiyeYSrnUG/post-materials/a876161a-5416-4a96-ba82-cfb9bc0397b6/CabinetGrotesk-Regular-d0pn.woff2
//NeueMontreal  https://cdn.courses.apisystem.tech/memberships/B4AUUrc6WphiyeYSrnUG/post-materials/a876161a-5416-4a96-ba82-cfb9bc0397b6/NeueMontreal-Regular-dy5w.woff2
