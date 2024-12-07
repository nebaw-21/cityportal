import Footer from "../components/Footer";
import Billboard from "../components/BillBoard";
import HorizontalCard  from "../components/horzontalCard";
import MaxWidth from "../components/MaxWidth";
import MessageCard from "../components/MessageCard";
function LandingPage() {
  return(
    <>
    
<Billboard />

  <MaxWidth>
    <div className=" grid grid-cols-3 gap-x-5 mt-10 px-5 mt-[-40px] max-w-[1200px] mx-auto ">
      <MessageCard 
        containerClasses=' rounded-tl-[80px] py-[50px] px-[60px]'  squareBoxClasses={" left-[10px] bottom-[20px] bg-[#08A508]"} 
      />
      <MessageCard 
        message={"Expolore the Heart of Shagger City"}
        dashBoxClasses={" bg-[#2d515d]"}
        squareBoxClasses={" right-[5px] top-[10px] "}
      />
      <MessageCard
        message={"Live Like a Local"}
        squareBoxClasses={"right-[10px] bottom-[10px]"}
        containerClasses={" rounded-tr-[100px]"}
      />
    </div>

  <HorizontalCard />

  </MaxWidth>

  <Footer/>
    </>
  )

}

export default LandingPage;
