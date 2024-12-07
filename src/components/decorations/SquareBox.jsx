

// eslint-disable-next-line react/prop-types
const SquareBox = ({customStyles}) => {
  return (
    <div className={"w-[24px] h-[21px] bg-[#ff0000] absolute " + customStyles}></div>
  )
}

export default SquareBox
