import React from 'react'

function Footer() {
  return (
    <>

<div className=" bg-gray-100 border-t-gray-300 border-t-2 ">
  <div className="max-w-2xl mx-auto text-black py-10">
    <div className="text-center">
      <h3 className="text-3xl mb-3"> Download our  app </h3>
      <p> Get your food. All day, every day. </p>
      <div className="flex justify-center my-10">
        <div className="flex items-center border w-auto rounded-lg px-4 py-2 bg-gray-300 w-52 mx-2">
          <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
          <div className="text-left ml-3">
            <p className="text-xs font-semibold">Download on </p>
            <p className="text-sm md:text-base"> Google Play Store </p>
          </div>
        </div>
        <div className="flex items-center border w-auto rounded-lg px-4 py-2 bg-gray-300 w-44 mx-2">
          <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
          <div className="text-left ml-3">
            <p className="text-xs font-semibold">Download on </p>
            <p className="text-sm md:text-base"> Apple Store </p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
      <p className="order-2 md:order-1 mt-8 md:mt-0"> © Omar Inc, 2023. </p>
      <div className="order-1 md:order-2">
        <span className="px-2 hover:underline cursor-pointer">About us</span>
        <span className="px-2 border-l hover:underline cursor-pointer">Contact us</span>
        <span className="px-2 border-l hover:underline cursor-pointer">Privacy Policy</span>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Footer
