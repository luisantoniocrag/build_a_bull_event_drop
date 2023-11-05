const StatusBtn = () =>{
    return (
        <div className="bg-lightGreen rounded-full px-4 py-2 absolute top-[120px] right-12 z-10 border">
            <div className="w-full h-full flex items-center">
                <div id="status-dot" className="w-3 h-3 bg-[#FFDF6F] rounded-full mr-2 animate-pulse"></div>
                <span className="text-black font-light text-sm">Pending...</span>
            </div>
        </div>
    )
}

export default StatusBtn;