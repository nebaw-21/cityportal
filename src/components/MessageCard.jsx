import DashBox from "./decorations/DashBox"
import SquareBox from "./decorations/SquareBox"


// eslint-disable-next-line react/prop-types
const MessageCard = ({message, containerClasses, textClasses, squareBoxClasses, dashBoxClasses}) => {
  return (
    <div className={"p-5 pb-[2rem] outline outline-1 block rounded-2xl flex flex-col justify-center items-center z-[200] bg-white relative " + containerClasses}>
      <p className={" text-[32px] text-center leading-[40px] capitalize " + textClasses}>
      {message || "City news & updates"}
      </p>
      <DashBox customStyles={dashBoxClasses}/>
      <SquareBox customStyles={squareBoxClasses} />
    </div>
  )
}

export default MessageCard
