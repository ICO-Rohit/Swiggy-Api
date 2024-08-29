const Shimmer = () => {
    return (
        <>
            <div className="flex flex-wrap">
                {Array(10).fill("").map((_,index) => <div key={index} className="m-5 border-solid border-2 border-sky-400 w-80 h-60 bg-gray-400 rounded-3xl overflow-hidden"> </div>)}
                
            </div>
        </>
    )
}

export default Shimmer;