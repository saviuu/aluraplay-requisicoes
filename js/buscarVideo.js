import { conectaApi } from "./conectaApi.js";
import  montaCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const valorPesquisa = document.querySelector("[data-pesquisar]").value;
    const busca = await conectaApi.buscaVideo(valorPesquisa);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    
    busca.forEach(video => {
        lista.appendChild(
            montaCard(video.titulo, video.descricao, video.url, video.imagem)
        );
    })

    if(busca.length == 0) lista.innerHTML = `<h2 class="mensagem__titulo"> Não foram encontrados vídeos com esses termos </h2>`;

}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));