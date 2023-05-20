const tecdesc = {
    js: {
        name: "JavaScript",
        desc: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
        fonte: "https://pt.wikipedia.org/wiki/JavaScript"
    },
    ts: {
        name: "TypeScript",
        desc: "TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem. Saiba mais sobre TypeScript, suas principais vantagens e como utilizá-lo em seus projetos.",
        fonte: "https://tecnoblog.net/responde/o-que-e-typescript-guia-para-iniciantes/0"
    },
    html: {
        name: "HTML5",
        desc: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.",
        fonte: "https://pt.wikipedia.org/wiki/HTML"
    },
    css: {
        name: "CSS",
        desc: "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags style. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.",
        fonte: "https://pt.wikipedia.org/wiki/Cascading_Style_Sheets"
    },
    jquery: {
        name: "jQuery",
        desc: "jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário.",
        fonte: "https://pt.wikipedia.org/wiki/JQuery"
    },
    express: {
        name: "ExpressJS",
        desc: "O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.",
        fonte: "https://expressjs.com/pt-br/"
    },
    nodejs: {
        name: "NodeJS",
        desc: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.",
        fonte: "https://pt.wikipedia.org/wiki/Node.js"
    },
    tailwindcss: {
        name: "Tailwindcss",
        desc: "Tailwind CSS é um framework CSS (Cascading Style Sheets) com classes predefinidas que você pode usar para construir e projetar páginas web diretamente na sua marcação. Ele permite que você escreva CSS em seu HTML na forma de classes pré-definidas.",
        fonte: "https://kinsta.com/pt/blog/tailwind-css/"
    },
    vscode: {
        name: "Visual Studio Code",
        desc: "O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código",
        fonte: "https://pt.wikipedia.org/wiki/Visual_Studio_Code"
    },
    windows: {
        name: "Windows",
        desc: "O Windows é hoje um conglomerado de versões de sistemas operacionais já lançados pela Microsoft, responsáveis por gerir e executar processos em computadores pessoais e empresariais de todo o mundo.",
        fonte: "https://www.techtudo.com.br/tudo-sobre/windows/"
    },
    ejs: {
        name: "EJS",
        desc: "O EJS é uma engine de visualização, com ele conseguimos de uma maneira fácil e simples transportar dados do back-end para o front-end, basicamente conseguimos utilizar códigos em javascript no html de nossas páginas.",
        fonte: "https://forum.casadodesenvolvedor.com.br/topic/26-utilizando-a-engine-ejs-para-aplica%C3%A7%C3%B5es-em-nodejs/"
    }
}


function fecharTec() {
    $("#tec-info").animate({
        height: "0%"
    }, 800)
}

function createTecInfo(x) {
    return ` <img src="./images/${x}.png" class="tec-info-image">
    <p class="tec-info-name">${tecdesc[x].name}</p>
    <p class="tec-info-desc">${tecdesc[x].desc}</p>
    <button class="tec-info-button" onclick="fecharTec()">Fechar</button>`
}

$(document).ready(function () {
    $("#dropdown").click(() => {
        const drop = $("#dropitem").css("display")
        if (drop == "none") $("#dropitem").css("display", "block")
        else $("#dropitem").css("display", "none")
    })

    $("#tecs-slide").on("click", function (event) {
        var elementoClicado = $(event.target);
        const id = elementoClicado.parent().attr("id") || elementoClicado.attr("id")
        if (!Object.keys(tecdesc).includes(id)) return;
        if($("#tec-info").css("height") != "0px"){
            $("#tec-info").animate({
                height: "0%"
            }, 1000, function(){
                $("#tec-info-card").empty().append(createTecInfo(id))
            })
        } else {
            $("#tec-info-card").empty().append(createTecInfo(id))
        }
        $("#tec-info").animate({
            height: $("#para-calcular").css("height")
        }, 1000)
    });
});