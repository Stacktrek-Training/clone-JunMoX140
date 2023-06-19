'use client';
import { Card } from 'flowbite-react';

const newsEntry = [
    {
        date:"June 8, 2023",
        title:"Tinkering With Turbo", 
        image:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/fd5bc08281849e0a9836cc718d046a89381fd46f.png", 
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis fugiat dolorem perspiciatis vitae ipsa esse blanditiis ipsum fuga recusandae! Incidunt!",
    },
    {
        date:"June 2, 2023",
        title:"Dota Plus Update - Summer 2023", 
        image:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/811316b69855539f634a139f4f67c1c1b596bb98.png", 
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis fugiat dolorem perspiciatis vitae ipsa esse blanditiis ipsum fuga recusandae! Incidunt!",
        
    },
    {
        date:"May 11, 2023",
        title:"DPC Summer Tour Kickoff", 
        image:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/94658001ed21521413e8dff04f6216197cbe3d33.jpg", 
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis fugiat dolorem perspiciatis vitae ipsa esse blanditiis ipsum fuga recusandae! Incidunt!",
        
    },
]

function NewsCard (){
        return(
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 gap-x-10">
            {newsEntry.map(({date, title, image,content})=>(
                <Card className='' key={date}>
                    <h6>{date}</h6>
                    <h3>{title}</h3>
                    <img className="" src={image} alt={title} />
                    <p className=''>{content}</p>                
                </Card>
            ))}
        </div>       
    )
}
export default NewsCard