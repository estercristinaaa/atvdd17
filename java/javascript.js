let participantes = [
  {
    nome: "Ester Cristina",
    email: "tete@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 2, 25, 22, 0)
  },
  {
    nome: "Lucas Oliveira",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2022, 5, 20, 14, 30),
    dataCheckin: new Date(2024, 2, 25, 21, 45)
  },
  {
    nome: "Marina Costa",
    email: "marina@gmail.com",
    dataInscricao: new Date(2025, 2, 21, 10, 0),
    dataCheckin: new Date(2024, 2, 25, 20, 30)
  },
  {
    nome: "Pedro Almeida",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2023, 2, 18, 16, 15),
    dataCheckin: new Date(2024, 2, 25, 22, 10)
  },
  {
    nome: "Ana Paula",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 2, 19, 9, 45),
    dataCheckin: new Date(2024, 2, 25, 21, 0)
  },
  {
    nome: "Rafael Souza",
    email: "rafael@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 13, 20),
    dataCheckin: new Date(2024, 2, 25, 22, 30)
  },
  {
    nome: "Beatriz Lima",
    email: "beatriz@gmail.com",
    dataInscricao: new Date(2024, 2, 20, 11, 50),
    dataCheckin: new Date(2024, 2, 25, 20, 55)
  },
  {
    nome: "Carlos Menezes",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 15, 0),
    dataCheckin: new Date(2024, 2, 25, 21, 35)
  },
  {
    nome: "Juliana Ribeiro",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2024, 2, 21, 17, 40),
    dataCheckin: new Date(2024, 2, 25, 22, 5)
  },
  {
    nome: "Felipe Martins",
    email: "felipe@gmail.com",
    dataInscricao: new Date(2024, 2, 19, 12, 25),
    dataCheckin: new Date(2024, 2, 25, 21, 15)
  }
];

const criarNovoParticipantes = (participante) => {
  const dataInscricao = dayjs(Date.now()).to
  (participante.dataInscricao)

const dataCheckin = dayjs(Date.now()).to
  (participante.dataCheckin)


  return `<tr>
      <td>
        <strong>
        ${participante.nome}
        </strong>
        <br>
        <small>
         ${participante.email}
        </small>
          </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckin}</td>
    </tr>
    `
 
}

const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repetição - loop
for(let participante of participantes) {
 output = output + criarNovoParticipantes(participante)
}

  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}
atualizarLista(participantes)
