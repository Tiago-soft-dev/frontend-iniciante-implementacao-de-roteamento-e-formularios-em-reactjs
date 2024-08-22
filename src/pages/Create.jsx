import { toast } from "react-toastify"
import { Api } from "../api/api"
import { useNavigate } from "react-router-dom"



export default function Create(){
    
    const navigate = useNavigate()
    
    async function handleSubmit(event){
        
        event.preventDefault()


        const devmon = {
            nome: event.target.nome.value,
            imagem: event.target.imagem.value,
            evoluiPara: event.target.evoluiPara.value
        }

        const apiUrl = Api.personagem.create()
        
        const response = await Api.builApiPostRequest(apiUrl, devmon)

            if(response.ok){
                toast.success('Devmon criado')
                navigate('/')
            } else {
                const body = await response.json()
                toast.error('Erro ao criar devmon: ' + body.error)
            }
    }



    return (
    
   <div>
    <h1>Criar Devmon</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nome">Nome:</label><br></br>
            <input type="text" id="nome" name="nome" placeholder="insira o nome"/>
        </div><br></br>

        <div>
            <label htmlFor="imagem">Imagem (URL):</label><br></br>
            <input type="text" id="imagem" name="imagem" placeholder="insira a URL da imagem"/>
        </div><br></br>

        <div>
            <label htmlFor="evoluiPara">Evolui Para (opcional):</label><br></br>
            <input type="text" id="evoluiPara" name="evoluiPara" placeholder="insira o nome da evolução"/>
        </div><br></br>

        <div>
            <button type="submit">Criar</button>
            
            <button type="reset">Reiniciar</button>
                       
        </div>
    </form>
   </div>
    
)
}