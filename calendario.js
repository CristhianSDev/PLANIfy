document.addEventListener('DOMContentLoaded', function() {
const monthsBR = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const tableDays = document.getElementById('dias');
const colorPicker = document.getElementById('colorPicker'); // Adicionado

// Obter a data atual apenas uma vez
const today = new Date();

function GetDaysCalendar(mes, ano) {
    document.getElementById('mes').innerHTML = monthsBR[mes];
    document.getElementById('ano').innerHTML = ano;

    let firstDayOfWeek = new Date(ano, mes, 1).getDay() - 1;
    let getLastDayThisMonth = new Date(ano, mes + 1, 0).getDate();

    for (let i = -firstDayOfWeek, index = 0; i < (42 - firstDayOfWeek); i++, index++) {
        let dt = new Date(ano, mes, i);
        let dayTable = tableDays.getElementsByTagName('td')[index];

        // Limpar classes anteriores
        dayTable.classList.remove('mes-anterior', 'proximo-mes', 'dia-atual', 'marcado', 'marcado-verde', 'marcado-azul', 'marcado-vermelho');
        dayTable.innerHTML = dt.getDate();

        // Marcar o dia atual
        if (dt.getFullYear() === today.getFullYear() && dt.getMonth() === today.getMonth() && dt.getDate() === today.getDate()) {
            dayTable.classList.add('dia-atual');
        }

        // Estilizar dias do mês anterior
        if (i < 1) {
            dayTable.classList.add('mes-anterior');
        }
        
        // Estilizar dias do próximo mês
        if (i > getLastDayThisMonth) {
            dayTable.classList.add('proximo-mes');
        }

        // Adicionar evento de clique para marcar o dia e adicionar descrição
        dayTable.onclick = function() {
            let descricao = prompt("Adicionar descrição para este dia:");
            if (descricao !== null && descricao.trim() !== "") {
                this.setAttribute('data-descricao', descricao);
                this.title = descricao; // Mostra a descrição ao passar o mouse sobre o dia

                // Adicionar lógica para diferentes classes com base na seleção
                const selectedColor = colorPicker.value;
                this.classList.add(selectedColor);
            } else {
                this.removeAttribute('data-descricao');
                this.title = "";
                this.classList.remove('marcado', 'marcado-verde', 'marcado-azul', 'marcado-vermelho');
            }
        };
    }
}

let now = new Date();
let mes = now.getMonth();
let ano = now.getFullYear();

GetDaysCalendar(mes, ano);

const botao_proximo = document.getElementById('btn_prev');
const botao_anterior = document.getElementById('btn_ant');

botao_proximo.onclick = function() {
    mes++;
    if (mes > 11) {
        mes = 0;
        ano++;
    }
    GetDaysCalendar(mes, ano);
};

botao_anterior.onclick = function() {
    mes--;
    if (mes < 0) {
        mes = 11;
        ano--;
    }
    GetDaysCalendar(mes, ano);
}});
