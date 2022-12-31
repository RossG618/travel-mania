import { useState } from "react"
import { lineTextStyle } from './Home';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import './favs.css'
export const favArray = [
    {
        id: 1,
        title: "Rahvayana",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
        description:
          "Yang menulis di buku ini belum tentu saya, sebab Rahwana tak mati-mati. Gunung kembar Sondara-Sondari yang mengimpit Rahwana cuma mematikan tubuhnya semata. Jiwa Rahwana terus hidup. Hidupnya menjadi gelembung-gelembung alias jisim. Siapa pun bisa dihinggapi gelembung itu, tak terkecuali saya.   Yang menulis di buku ini barangkali gelembung-gelembung itu, jisim…",
        author: "Sujiwo Tejo"
      },
      {
        id: 2,
        title: "Tuhan Maha Asyik",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
        description:
          "Melalui kisah-kisah yang dikemas dalam dialog polos ala dunia bocah, Sujiwo Tejo dan Buya MN. Kamba coba mengajak kita ”bermain-main” untuk memperkenalkan ke-Maha Asyik-an Tuhan. Tuhan sangat asyik ketika Dia tidak kita kurung paksa dalam penamaan-penamaan dan pemaknaan-pemaknaan. Dia tak terdefinisikan. Dia tak terkmaknakan. Dia ada sebelum definisi dan makna…",
        author: "Sujiwo Tejo"
      },
      {
        id: 3,
        title: "Sabdo Cinta Angon Kasih",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
        description:
          "Mbok Jamu berselendang ungu itu menjadi sumber kebahagiaan bagi orang-orang yang datang dan pergi membeli dagangannya. Bukan karena rambut hitam kehijauannya, lereng keningnya yang bening, atau kecantikannya yang tiada tara. Para pria menjadi platinum member jamunya karena Mbok Jamu pintar memosisikan diri sebagai konco wingking. Perempuan yang posisinya selangkah di…",
        author: "Sujiwo Tejo"
      },
      {
        id: 4,
        title: "Talijiwo",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
        description:
          "Sudah berapa lama kau terjebak dengan beragam kesibukan yang tak habis-habis itu? Berhentilah berbusa-busa tentang kemerdekaan bila ternyata kau sendiri tak punya waktu luang. Padahal, hanya di dalam waktu luang manusia bisa berpikir dan merenung tentang bagaimana seyogianya mengisi kemerdekaan hidup. Maka, waktu luang itu jangan dimampatkan lagi dengan melulu…",
        author: "Sujiwo Tejo"
      }
]

export function Favorites(props){
    
    const [favsList, setFavsList] = useState(favArray)
    
      const handleAddFav = (id) => {
        const favCopyAdd = [...favsList]
        favCopyAdd.push( id)
        setFavsList(favCopyAdd)
        
      }
      
      const handleDelete = (id) => {
        const favCopy = [...favsList]
        favCopy.splice(id, 1)
        setFavsList(favCopy)
      }
    return(
        <div className=" favorites bg-body rounded shadow container z-99 p-2 my-2">
            <h2 className="rog-font ">Favorites</h2>
        {favsList.map((item, id) => <div key={id} className="d-flex align-items-center mb-3" >
          <span className="text-bg-secondary rounded-3 mx-2 px-2  shadow-sm">
            {favsList.indexOf(item) +1}</span>

            <div className="d-flex bg-light shadow-sm border  border-primary">
                <FontAwesomeIcon role="button" icon={faX} id={id} onClick={() => handleDelete(id)} className="p-2"/>
                <FontAwesomeIcon role="button" icon={faPlus} id={id} onClick={() => handleAddFav(id)} className="p-2"/>
                 <span className="m-2">
            <h3>{item.title}</h3>
            <p style={lineTextStyle}>{item.description}</p>
            </span>
            <span className="d-flex ">
                <img width="230px" src={item.image} alt="" />
            </span>
            </div>
           
            </div>)}
    </div>
)
}