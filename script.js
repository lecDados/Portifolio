const data = [
    {
        titulo: "Calculadora",
        sobre: "Eu desenvolvi uma calculadora utilizando Node.js como ambiente de execução JavaScript no lado do servidor. Para estruturar as rotas e facilitar a criação da API, utilizei o framework Express.js, que permite organizar as requisições HTTP de forma simples e eficiente. Durante o desenvolvimento, utilizei o Nodemon para reiniciar automaticamente o servidor a cada alteração no código, agilizando o processo de testes. Para gerenciar as dependências do projeto, utilizei o npm. Os testes das requisições da API foram realizados com o Postman, permitindo validar operações matemáticas como soma, subtração, multiplicação e divisão através de requisições HTTP. O projeto foi versionado utilizando Git e armazenado no GitHub, garantindo controle de versões e organização do código.",
        img: "h-calcu.png"
    },
    {
        titulo: "Bot-WhatsApp",
        sobre: "Desenvolvi um bot para WhatsApp com o objetivo de automatizar atendimentos, responder mensagens automaticamente e executar ações com base nas solicitações do usuário. O projeto foi desenvolvido utilizando Node.js como ambiente de execução no servidor. Para a integração com o WhatsApp, utilizei a biblioteca whatsapp-web.js, que permite conectar e controlar sessões do WhatsApp Web via código. Durante o desenvolvimento, utilizei o npm para gerenciar as dependências e o Nodemon para facilitar os testes, reiniciando automaticamente o servidor a cada alteração. O bot foi estruturado para interpretar mensagens recebidas, aplicar regras condicionais e responder automaticamente com textos, menus interativos ou informações específicas, simulando um atendimento inteligente. Para controle de versão e organização do projeto, utilizei Git e hospedei o código no GitHub.",
        img: "h-wha.png"
    },
    {
        titulo: "Manipulação de Planilhas Excel com Python",
        sobre: "Desenvolvi um sistema em Python voltado para automação e gerenciamento de dados em planilhas do Microsoft Excel. O projeto permite realizar buscas automatizadas, alterações de registros e salvamento de informações diretamente nas planilhas, otimizando processos que seriam feitos manualmente. Para manipulação dos arquivos .xlsx, utilizei bibliotecas como openpyxl (leitura e escrita de dados) e pandas (tratamento e organização das informações), garantindo maior eficiência no processamento. A aplicação foi estruturada para localizar dados específicos dentro da planilha, atualizar células conforme regras definidas e salvar automaticamente as modificações, garantindo integridade e agilidade no fluxo de trabalho.",
        img: "h-excel.png"
    }
];

let index = 0;

const img = document.getElementById("slider-img");
const title = document.getElementById("slider-title");
const desc = document.getElementById("slider-desc");

function showSlide(i) {
    img.src = data[i].img;
    title.textContent = data[i].titulo;
    desc.textContent = data[i].sobre;
}

document.getElementById("next").addEventListener("click", () => {
    index++;
    if (index >= data.length) {
        index = 0; // volta para o início
    }
    showSlide(index);
});

document.getElementById("prev").addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = data.length - 1; // vai para o último
    }
    showSlide(index);
});

// inicializa mostrando o primeiro
showSlide(index);