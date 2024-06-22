import CardAdd from '../components/cards/cardAdd'
import CardRemove from '../components/cards/cardRemove'
import CardUpdate from '../components/cards/cardUpdate'
import { EndH } from '../components/endH'
import { Header } from '../components/header'

export function AdmPage(){
    return(
        <div className='flex flex-col gap-60'>
            <Header/>
            <div className='flex gap-10 items-center justify-center'>
                <div className="flex mt-14">
                    <CardAdd/>
                </div>
                <div className="flex mt-14">
                    <CardRemove/>
                </div>
                <div className="flex mt-14">
                    <CardUpdate/>   
                </div>
            </div>
            <EndH/>
        </div>
    )
}