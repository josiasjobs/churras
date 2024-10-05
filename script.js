let convidados = [];

function adicionarConvidado() {
    const nomeConvidado = document.getElementById('nomeConvidado').value;
    const pagou = document.getElementById('pagamentoConvidado').value;

    if (nomeConvidado) {
        convidados.push({ nome: nomeConvidado, pagou });
        atualizarLista();
        calcularQuantidade();
        document.getElementById('nomeConvidado').value = '';
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaConvidados');
    const selectConvidado = document.getElementById('convidadoSelect');
    
    lista.innerHTML = '';
    selectConvidado.innerHTML = '';

    convidados.forEach((convidado, index) => {
        const li = document.createElement('li');
        li.textContent = `${convidado.nome} - ${convidado.pagou === 'sim' ? 'Pagou' : 'Não Pagou'}`;
        lista.appendChild(li);

        const option = document.createElement('option');
        option.value = index;
        option.textContent = convidado.nome;
        selectConvidado.appendChild(option);
    });

    document.getElementById('totalConvidados').textContent = convidados.length;
}

function calcularQuantidade() {
    const total = convidados.length;

    // Quantidades calculadas
    const qtdArroz = (total * 0.2).toFixed(1);  
    const qtdFarofa = (total * 0.1).toFixed(1);
    const qtdCarne = (total * 0.4).toFixed(1);   
    const qtdSaladaBatata = (total * 0.15).toFixed(1);
    const qtdSaladaVerde = (total * 0.1).toFixed(1);
    const qtdRefrigerante = (total * 0.5).toFixed(1);

    // Preços unitários
    const precoArroz = document.getElementById('precoArroz').value;
    const precoFarofa = document.getElementById('precoFarofa').value;
    const precoCarne = document.getElementById('precoCarne').value;
    const precoSaladaBatata = document.getElementById('precoSaladaBatata').value;
    const precoSaladaVerde = document.getElementById('precoSaladaVerde').value;
    const precoRefrigerante = document.getElementById('precoRefrigerante').value;

    // Cálculo total por item
    document.getElementById('qtdArroz').textContent = qtdArroz;
    document.getElementById('totalArroz').textContent = (qtdArroz * precoArroz).toFixed(2);
    
    document.getElementById('qtdFarofa').textContent = qtdFarofa;
    document.getElementById('totalFarofa').textContent = (qtdFarofa * precoFarofa).toFixed(2);

    document.getElementById('qtdCarne').textContent = qtdCarne;
    document.getElementById('totalCarne').textContent = (qtdCarne * precoCarne).toFixed(2);

    document.getElementById('qtdSaladaBatata').textContent = qtdSaladaBatata;
    document.getElementById('totalSaladaBatata').textContent = (qtdSaladaBatata * precoSaladaBatata).toFixed(2);

    document.getElementById('qtdSaladaVerde').textContent = qtdSaladaVerde;
    document.getElementById('totalSaladaVerde').textContent = (qtdSaladaVerde * precoSaladaVerde).toFixed(2);

    document.getElementById('qtdRefrigerante').textContent = qtdRefrigerante;
    document.getElementById('totalRefrigerante').textContent = (qtdRefrigerante * precoRefrigerante).toFixed(2);
}

function designarResponsabilidade() {
    const indexConvidado = document.getElementById('convidadoSelect').value;
    const item = document.getElementById('itemSelect').value;

    const li = document.createElement('li');
    li.textContent = `${convidados[indexConvidado].nome} é responsável por trazer ${item}`;
    document.getElementById('responsabilidades').appendChild(li);
}

// Adiciona evento para recalcular total de itens e preço ao alterar os valores
const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach(input => {
    input.addEventListener('input', calcularQuantidade);
});

