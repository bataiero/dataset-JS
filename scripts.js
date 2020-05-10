function painel() {
    let obj = event.target;
    let painel = document.getElementById('painel');
    painel.innerHTML = ``;
    painel.innerHTML = `
        <b>Nome:</b><spam class="camelcase"> ${obj.dataset.nome}<spam><br>
        <b>Motor:</b><spam class="camelcase"> ${obj.dataset.motor}<spam><br>
        <b>Cor:</b><spam class="camelcase"> ${obj.dataset.cor}<spam>`;
}

function startPainel() {
    let painel = document.getElementById('painel');
    painel.innerHTML = "Passe o mouse sobre um carro para informações Técnicas";
}

function addEvent(ClassCar) {
    let car = document.getElementById(ClassCar);
    car.addEventListener('mouseenter', painel);
    car.addEventListener('mouseout', startPainel);
}

startPainel();
addEvent('c1');
addEvent('c2');
addEvent('c3');