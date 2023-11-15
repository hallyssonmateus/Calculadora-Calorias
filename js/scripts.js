const form = document.getElementById("tmb-form");

form.addEventListener('submit', submit_botao);

function submit_botao(event){
    event.preventDefault();

    const gender = getselectinputs('gender');
    const age = convStringinput('age');
    const height = convStringinput('height');
    const weight = convStringinput('weight');
    const activitylevel = getselectinputs('activity_level');
    const imc = (weight/(height/100)**2).toFixed(2);

    let tmb;

    if (gender === "female") {
        tmb = (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age));
    } else {
        tmb = (66 + (13.8 * weight) + (5 * height) - (6.8 * age));
    }
    
    const maintenance = Math.round(tmb*activitylevel);
    const loseWeight = maintenance - 400;
    const gainWeight = maintenance + 400;
    
    const results = `
        <h3>Confira os resultados:</h3>

        <p id="result-container">Seu IMC: ${imc}</p>
        <p id="result-container">Seu metabolismo basal é de ${Math.round(tmb)}</p>
        <p id="result-container">
          Para manter seu peso, você deve precisar consumir em média
          ${maintenance}
        </p>
        <p id="result-container">
          Para perder peso você deve consumir em média ${loseWeight}
        </p>
        <p id="result-container">
          Para ganhar peso você deve consumir em média ${gainWeight}
        </p>
    
    `;           
    const mostraresul = document.getElementById('result-container');
    mostraresul.innerHTML = results;
}

function convStringinput (id){
    return Number(document.getElementById(id).value);
}

function getselectinputs (id){
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
}