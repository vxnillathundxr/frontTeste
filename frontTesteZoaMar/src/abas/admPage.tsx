import CardAdd from '../components/cards/cardAdd'
import CardRemove from '../components/cards/cardRemove'
import CardUpdate from '../components/cards/cardUpdate'
import { EndH } from '../components/endH'
import { Header } from '../components/header'

export function AdmPage(){
    return(
        <div className='flex flex-col gap-60'>
            <Header/>
            <div className='flex-wrap flex gap-8 items-center justify-center'>
                <div>
                    <CardAdd/>
                </div>
                <div>
                    <CardRemove
                    title="Remover um Item"
                    searchID="ID do produto"
                    searchTag="Tag do produto"
                    // Interessante o remove, sei como fazer
                    remove="Remover produto"
                    />
                </div>
                <div>
                    <CardUpdate
                    title="Atualizar um Item"
                    button="Atualizar Item"
                    name="Novo nome"
                    price="Novo preço"
                    stock="Nova quantidade em estoque"
                    departament="Novo departamento"
                    tag="Nova tag"
                    />
                </div>
            </div>
            <EndH/>
        </div>
    )
}