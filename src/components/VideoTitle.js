const VideoTitle = ({title, overview}) => {
      return (
            <div className="w-screen aspect-video absolute pt-[20%] mt-8 md:mt-0 px-6 md:px-24 text-white bg-gradient-to-r from-black">
                  <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
                  <p className="hidden md:block py-6 text-lg w-1/2">{overview}</p>
                  <div className="my-4 md:my-0"><button className="bg-white py-1 md:py-4 px-6 md:px-16  rounded-md text-xl text-black cursor-pointer hover:bg-opacity-80">▶️ Play</button>
                  <button className="bg-gray-500 py-1 md:py-4 px-4 md:px-12 ml-2 rounded-md text-xl text-white cursor-pointer hover:bg-opacity-80">More Info</button></div>
            </div>
)
}
export default VideoTitle;