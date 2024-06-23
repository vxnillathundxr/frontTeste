import instagramIcon from "../assets/instagramIcon.svg"
import faceIcon from "../assets/facebookIcon.svg"
import twIcon from "../assets/twitterIcon.svg"
import EmailForm from "./emailForm"

export function EndH(){
    return(
            <div className="bg-black h-80 w-full mt-[100px]">
                <div className="md:flex items-center text-white justify-center md:gap-6 md:space-x-28 space-y-10 pt-2 md:mr-4">
                    <div className="flex-col items-center md:mt-12 md:text-2xl justify-center pt-10 md:pt-20 md:flex">
                        <h2 className="flex items-center justify-center">RECEBA NOVIDADES E GANHE</h2>
                        <h2 className="flex items-center justify-center">10% OFF NA PRIMEIRA COMPRA.</h2>
                    </div>
                        <EmailForm />
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