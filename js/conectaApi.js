async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoJSON = await conexao.json();

    return conexaoJSON;
}

async function adicionaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", 
    {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
          titulo: titulo,
          descricao : `${descricao} visualizações`,
          url: url,
          imagem: imagem
        })
    });

    const conexaoConvertidaJSON = await conexao.json();
    return conexaoConvertidaJSON;
}

export const conectaApi = {
    listaVideos,
    adicionaVideo
} 