import NewsCard from "../components/NewsCard";



function NewsContainer (){
    return (
        <div>
            <div className="bg-black backdrop-blur-lg w-full h-64 shadow-[0px_0px_30px_50px_rgba(0,0,0,0.6)]"></div>
            <NewsCard/>
        </div>
    )
}
export default NewsContainer