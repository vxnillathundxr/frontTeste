import instagramIcon from "../assets/instagramIcon.svg"
import faceIcon from "../assets/facebookIcon.svg"
import twIcon from "../assets/twitterIcon.svg"

export function EndH(){
    return(
            <div className="bg-black h-80 w-full mt-[3px]">
                <div className="md:flex items-center text-white justify-center md:gap-6 md:space-x-28 space-y-10 pt-2 md:mr-4">
                {/*<div className="flex items-center text-white gap-5 ml-16 space-x-36"> */}
                    {/* <div className="flex-col items-center md:mt-40 md:text-2xl justify-center pt-10 mb-10"> */}
                    <div className="flex-col items-center md:mt-12 md:text-2xl justify-center pt-10 md:pt-20 md:flex">
                    {/* <div className="flex-col items-center mt-40 text-2xl"> */}
                        <h2 className="flex items-center justify-center">RECEBA NOVIDADES E GANHE</h2>
                        <h2 className="flex items-center justify-center">10% OFF NA PRIMEIRA COMPRA.</h2>
                    </div>
                    <div className="flex md:gap-4 gap-1 md:mt-36 m-2">
                        <input 
                        type="text" 
                        placeholder="Seu melhor email"
                        className="border border-white md:p-3 p-1 w-96 md:mt-20 bg-transparent rounded">
                        </input>
                        <button 
                        className="bg-white text-black p-1 border rounded md:mt-20"
                        >Assinar</button>
                    </div>
                    <div className="flex-col gap-5 space-y-4">
                        <h3 className="text-white flex items-center justify-center md:mt-16">Siga nas redes sociais:</h3>
                            <div className="flex gap-5 items-center justify-center ">
                                <a href='https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1'
                                target="_blank">
                                <img src={instagramIcon} alt="InstaIcon" >
                                </img>
                                </a>
                                <a href='https://www.facebook.com/?locale=pt_BR'
                                target="_blank">
                                <img src={faceIcon} alt="faceIcon" >
                                </img>
                                </a>
                                <a href='https://x.com/?lang=pt-br'
                                target="_blank">
                                <img src={twIcon} alt="TwitterIcon" >
                                </img>
                                </a>
                            </div>
                    </div>
                </div>
            </div>    
    )
}

// import instagramIcon from "../assets/instagramIcon.svg"
// import faceIcon from "../assets/facebookIcon.svg"
// import twIcon from "../assets/twitterIcon.svg"

// export function EndH(){
//     return(
//             <div className="bg-black h-96 w-full mt-[1000px]">
//                 <div className="flex items-center text-white gap-5 ml-16 space-x-36">
//                     <div className="flex-col items-center mt-40 text-2xl">
//                         <h5>RECEBA NOVIDADES E GANHE</h5>
//                         <h5>10% OFF NA PRIMEIRA COMPRA.</h5>
//                     </div>
//                     <div className="flex gap-4 mt-36">
//                         <input 
//                         type="text" 
//                         placeholder="Seu melhor email"
//                         className="border border-white p-3 w-96 bg-transparent rounded">
//                         </input>
//                         <button 
//                         className="bg-white text-black p-3 border rounded"
//                         >Assinar</button>
//                     </div>
//                     <div className="flex-col gap-5 space-y-4 mt-32">
//                         <h3 className="text-white flex items-center">Siga nas redes sociais:</h3>
//                             <div className="flex gap-5 ml-6">
//                                 <a href='https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1'
//                                 target="_blank">
//                                 <img src={instagramIcon} alt="InstaIcon" >
//                                 </img>
//                                 </a>
//                                 <a href='https://www.facebook.com/?locale=pt_BR'
//                                 target="_blank">
//                                 <img src={faceIcon} alt="faceIcon" >
//                                 </img>
//                                 </a>
//                                 <a href='https://x.com/?lang=pt-br'
//                                 target="_blank">
//                                 <img src={twIcon} alt="TwitterIcon" >
//                                 </img>
//                                 </a>
//                             </div>
//                     </div>
//                 </div>
//             </div>    
//     )
// }