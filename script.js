const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      { texto: "Isso é assustador!", afirmacao: "Você achou assustador." },
      { texto: "Isso é maravilhoso!", afirmacao: "Você achou maravilhoso." },
    ],
  },
  {
    enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      { texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.", afirmacao: "Você usou uma ferramenta de IA para ajudar com o trabalho." },
      { texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.", afirmacao: "Você fez o trabalho baseado em suas próprias pesquisas e conhecimento." },
    ],
  },
  {
    enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      { texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.", afirmacao: "Você acredita que a IA pode criar novas oportunidades de emprego." },
      { texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.", afirmacao: "Você se preocupa com a perda de empregos para máquinas e defende a proteção dos trabalhadores." },
    ],
  },
  {
    enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      { texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.", afirmacao: "Você criou uma imagem usando uma plataforma de design como o Paint." },
      { texto: "Criar uma imagem utilizando um gerador de imagem de IA.", afirmacao: "Você criou uma imagem usando um gerador de imagem de IA." },
    ],
  },
  {
    enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      { texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.", afirmacao: "Você acha que usar o texto inteiro gerado pela IA é aceitável." },
      { texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.", afirmacao: "Você acredita que é importante revisar o trabalho e adicionar perspectivas pessoais, mesmo ao usar a IA." },
    ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativas() {
  caixaAlternativas.textContent = ""; // Limpa alternativas anteriores
  perguntaAtual.alternativas.forEach(alternativa => {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativa);
  });
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

function respostaSelecionada(opcaoSelecionada) {
  historiaFinal += opcaoSelecionada.afirmacao + " ";
  atual++;
  mostraPergunta();
}

// Inicia o quiz
mostraPergunta();
