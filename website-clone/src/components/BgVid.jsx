import "../index.css"

function BgVid() {
    return(
        <>
        <video className="container w-full h-auto max-w-full"autoPlay muted loop>
                    <source src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm" type="video/webm"/>Your browser does not support the video tag.
              </video>
        </>
    )
}

export default BgVid
