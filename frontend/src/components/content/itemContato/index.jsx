import './itemContato.css'

import { ButtonEditContato } from '../actionButtons/ButtonEditContato'
import { ButtonRemoveContato } from '../actionButtons/ButtonRemoveContato'

function dateFormated(date){
    var dataFormatada = `${date.slice(8,10)}/${date.slice(5,7)}/${date.slice(0,4)}`
    return dataFormatada
}

export function ItemContato({contact,index,handleShowModalRemoveContato}){
    return(
        <li className='itemContatoContainer'>
            <span className='indexContact'>{index}</span>
            <span className='mainContact'>
                <img className="contactImage" src={contact.imagem} alt={'Imagem de Perfil '+ contact.nome} width={40} height={40}/>
                <div className='divNameCelular'>
                    <span className="contactName">{contact.nome}</span>
                    <span className="contactCelular">
                        ({contact.celular.slice(0,2)})
                        {contact.celular.slice(2,7)}-
                        {contact.celular.slice(7)}
                    </span>
                </div>
            </span>

            <span className="contactEmail">{contact.email}</span>
            <span className='contactBirthDate'> {dateFormated(contact.dataNascimento)}</span>
            <div className='contactActions'>
                <ButtonEditContato contato={contact}/>
                <ButtonRemoveContato contato={contact} handleShowModalRemoveContato={handleShowModalRemoveContato}/>
            </div>
        </li>
    )
}