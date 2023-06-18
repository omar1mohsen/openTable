
const RestaurantHeader = ({name} : { name : string } ) => {
  const handlTitle = ()=>{
    const titleArray = name.split("-") 
    titleArray[titleArray.length - 1] = `(${titleArray[titleArray.length - 1]})`
    return titleArray.join(' ')
  }
  return (
    <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white captitalize text-shadow text-center">
              {handlTitle()}
            </h1>
          </div>
        </div>
  )
}

export default RestaurantHeader