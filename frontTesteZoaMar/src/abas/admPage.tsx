import CardRemoveProdutoEstq from '../components/cards/CardRemoverProdutoEstq'
import CardAdd from '../components/cards/cardAdd'
import CardAddProdutoEstq from '../components/cards/cardAddProdutoEstq'
import CardRemove from '../components/cards/cardRemove'
import CardUpdate from '../components/cards/cardUpdate'
import { EndH } from '../components/endH'
import { Header } from '../components/header'

export function AdmPage(){
    return(
        <div className='flex flex-col gap-3'>
            <Header/>
            <div className='flex flex-col md:flex-row md:gap-10 items-center justify-center'>
                <div className="flex mt-14">
                    <CardAdd/>
                </div>
                <div className="flex mt-14">
                    <CardRemove/>
                </div>
                <div className="flex mt-14">
                    <CardUpdate/>   
                </div>
                <div className="flex mt-14">
                    <CardAddProdutoEstq /> 
                </div>
                <div className="flex mt-14">
                    <CardRemoveProdutoEstq />
                </div>
            </div>
            <EndH/>
        </div>
    )
}