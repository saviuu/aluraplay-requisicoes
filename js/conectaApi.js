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

    if(!conexao.ok) throw new Error("Não foi possível enviar o video");

    const conexaoConvertidaJSON = await conexao.json();
    return conexaoConvertidaJSON;
}

async function buscaVideo(valorDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${valorDeBusca}`);
    const conexaoConvertidaJSON = await conexao.json();

    return conexaoConvertidaJSON;
}

export const conectaApi = {
    listaVideos,
    adicionaVideo,
    buscaVideo
} 