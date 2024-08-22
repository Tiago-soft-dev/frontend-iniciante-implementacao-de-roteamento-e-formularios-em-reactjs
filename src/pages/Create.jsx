export default function Create(){
    return (
    
   <div>
    <h1>Criar Devmon</h1>
    <form>
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