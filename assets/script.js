let local = document.getElementById("localTabela");
let dados = [
    {nome: "sapato", descricao:"sapato preto em couro", qtd:10},
    {nome: "chinelo", descricao:"chinelo de alças", qtd:10},
    {nome: "sandalia", descricao:"sandalia de amarrar", qtd:10},
    
    
    ];
function criaElementos(){
    let tabela = document.createElement("table");
    let linha = document.createElement("tr");
    let cab1 = document.createElement("th");
    let cab2 = document.createElement("th");
    let cab3 = document.createElement("th");

    cab1.innerHTML = "Coluna 1";
    cab2.innerHTML = "Coluna 2";
    cab3.innerHTML = "Coluna 3";

    linha.appendChild(cab1);
    linha.appendChild(cab2);
    linha.appendChild(cab3);
    tabela.appendChild(linha);
    

    let conta = 1;
    for (let item in dados) {
    //for (let i = 0; i < 5; i++){
        let novalinha = document.createElement("tr");
        let col1= document.createElement("td");
        let col2= document.createElement("td");
        let col3= document.createElement("td");

        //col1.innerHTML = "linha "+conta+" coluna 1"; 
        //col2.innerHTML = "linha "+conta+" coluna 2"; 
        //col3.innerHTML = "linha "+conta+" coluna 3";
        col1.innerHTML = dados[item].nome;
        col2.innerHTML = dados[item].descricao;
        col3.innerHTML = dados[item].qtd;
        conta++;
        novalinha.appendChild(col1);
        novalinha.appendChild(col2);
        novalinha.appendChild(col3);
        tabela.appendChild(novalinha);
        
    }
        local.appendChild(tabela);

        let bo1 = document.createElement("input");
        bo1.type="submit";
        bo1.value = "Enviar Dados";
        let bo2 = document.createElement("input");
        bo2.type="reset";
        bo2.value = "Mostar mensagem";
        bo2.addEventListener("Click", function() {alert("este é um exemplo")});
        local.appendChild(bo1);
        local.appendChild(bo2);
}
criaElementos();