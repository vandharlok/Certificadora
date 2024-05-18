'use strict';

const data = [
  { 
    title: `1) Um carro percorre uma estrada retilínea com velocidade constante de 20 m/s. Determine a distância percorrida pelo carro em 40 segundos.`,
    difficulty: 1,
    options: JSON.stringify({
        A: '200 m',
        B: '400 m',
        C: '800 m',
        D: '1000 m',
        E: '1200 m'
    }),
    correctAnswer: 'C'
  },
  { title: `2) Em uma indústria alimentícia, para produção de doce de leite, utiliza-se um tacho de parede oca com uma entrada para vapor de água a 120 °C e uma saída para água líquida em equilíbrio com o vapor a 100 °C. Ao passar pela parte oca do tacho, o vapor de água transforma-se em líquido, liberando energia. A parede transfere essa energia para o interior do tacho, resultando na evaporação de água e consequente concentração do produto.
    No processo de concentração do produto, é utilizada energia proveniente __________ .`,
    difficulty: 1,
    options: JSON.stringify({
        A: 'da condensação do vapor de água',
        B: 'da ebulição da água',
        C: 'da fusão do vapor de água',
        D: 'da solidificação do vapor de água',
        E: 'a sublimação da água'
    }),
    correctAnswer: 'A'
  },
  { title: `3) O fogão por indução funciona a partir do surgimento de uma corrente elétrica induzida no fundo da panela, com consequente transformação de energia elétrica em calor por efeito Joule. A principal vantagem desses fogões é a eficiência energética, que é substancialmente maior que a dos fogões convencionais.
    A corrente elétrica mencionada é induzida por __________ .`, 
    difficulty: 1,
    options: JSON.stringify({
        A: 'um campo magnético variável',
        B: 'um campo elétrico constante',
        C: 'um campo elétrico variável',
        D: 'um campo magnético constante',
        E: 'um campo gravitacional variável'
    }),
    correctAnswer: 'A'
  },
  { title: `4) Informações digitais — dados — são gravadas em discos ópticos, como CD e DVD, na forma de cavidades microscópicas. A gravação e a leitura óptica dessas informações são realizadas por um laser (fonte de luz monocromática). Quanto menores as dimensões dessas cavidades, mais dados são armazenados na mesma área do disco. O fator limitante para a leitura de dados é o espalhamento da luz pelo efeito de difração, fenômeno que ocorre quando a luz atravessa um obstáculo com dimensões da ordem de seu comprimento de onda. Essa limitação motivou o desenvolvimento de lasers com emissão em menores comprimentos de onda, possibilitando armazenar e ler dados em cavidades cada vez menores.
      Em qual região espectral se situa o comprimento de onda do laser que otimiza o armazenamento e a leitura de dados em discos de uma mesma área?`, 
    difficulty: 2,
    options: JSON.stringify({
        A: 'Ultravioleta',
        B: 'Infravermelho',
        C: 'Micro-ondas',
        D: 'Luz visível',
        E: 'Rádio'
    }),
    correctAnswer: 'A'
  },
  { title: `5) Um pai fez um balanço utilizando dois segmentos paralelos e iguais da mesma corda para fixar uma tábua a uma barra horizontal. Por segurança, opta por um tipo de corda cuja tensão de ruptura seja 25% superior à tensão máxima calculada nas seguintes condições: 
      O ângulo máximo atingido pelo balanço em relação à vertical é igual a 90º;
      Os filhos utilizarão o balanço até que tenham uma massa de 24kg. 
      Além disso, ele aproxima o movimento do balanço para o movimento circular uniforme, considera que a aceleração da gravidade é 10ms2
      e despreza forças dissipativas. Qual é a tensão de ruptura da corda escolhida?`, 
    difficulty: 2,
    options: JSON.stringify({
        A: '240 N',
        B: '300 N',
        C: '360 N',
        D: '420 N',
        E: '480 N'
    }),
    correctAnswer: 'C'
  },
   { title: `6) (PUC/RJ - 2018) Uma carga q0 é colocada em uma posição fixa. Ao colocar uma carga q1 =2q0 a uma distância d de q0, q1 sofre uma força repulsiva de módulo F. 
       Substituindo q1 por uma carga q2 na mesma posição, q2 sofre uma força atrativa de módulo 2F. 
       Se as cargas q1 e q2 são colocadas a uma distância 2d entre si, a força entre elas é __________ .`, 
     difficulty: 2,
     options: JSON.stringify({
        A: 'F/4',
        B: 'F/2',
        C: 'F',
        D: '2F',
        E: '4F'
    }),
    correctAnswer: 'A'
   },
   { title: `7) Um motorista que atende a uma chamada de celular é levado à desatenção, aumentando a possibilidade de acidentes ocorrerem em razão do aumento de seu tempo de reação. Considere dois motoristas, o primeiro atento e o segundo utilizando o celular enquanto dirige. Eles aceleram seus carros inicialmente a 1,00 m/s2 . Em resposta a uma emergência, freiam com uma desaceleração igual a 5,00 m/s2 . O motorista atento aciona o freio à velocidade de 14,0 m/s, enquanto o desatento, em situação análoga, leva 1,00 segundo a mais para iniciar a frenagem.
       Que distância o motorista desatento percorre a mais do que o motorista atento, até a parada total dos carros?`, 
     difficulty: 3,
     options: JSON.stringify({
        A: '2,8 m',
        B: '8,0 m',
        C: '10,8 m',
        D: '14,0 m',
        E: '19,6 m'
    }),
    correctAnswer: 'E'
   },
   { title: `8) Um pêndulo simples é composto por uma massa de 100g presa a um fio de 1 metro de comprimento. A massa é solta de uma posição horizontal a uma altura de 0,5 metros acima do ponto de suspensão. Determine a velocidade da massa quando ela passar pelo ponto mais baixo de sua trajetória.`, 
     difficulty: 3,
     options: JSON.stringify({
        A: '1,0 m/s',
        B: '2,0 m/s',
        C: '3,0 m/s',
        D: '4,0 m/s',
        E: '5,0 m/s'
    }),
    correctAnswer: 'B'
   },
   { title: `9) Para demonstrar o processo de transformação de energia mecânica em elétrica, um estudante constrói um pequeno gerador utilizando:
       - um fio de cobre de diâmetro D enrolado em N espiras circulares de área A;
      
       - dois ímãs que criam no espaço entre eles um campo magnético uniforme de intensidade B; e
      
       - um sistema de engrenagens que lhe permite girar as espiras em torno de um eixo com uma frequência f.
      
       Ao fazer o gerador funcionar, o estudante obteve uma tensão máxima V e uma corrente de curto-circuito i.
       Para dobrar o valor da tensão máxima V do gerador mantendo constante o valor da corrente de curto i o estudante deve dobrar o(a) __________ .`, 
     difficulty: 3,
     options: JSON.stringify({
        A: 'diâmetro do fio de cobre',
        B: 'intensidade do campo magnético',
        C: 'área das espiras',
        D: 'frequência de rotação',
        E: 'número de espiras'
    }),
    correctAnswer: 'D'
   },
   { title: `10) Uma lanterna funciona com três pilhas de resistência interna igual a 0,5 Ω cada, ligadas em série. 
       Quando posicionadas corretamente, devem acender a lâmpada incandescente de especificações 4,5 W e 4,5 V. 
       Cada pilha na posição correta gera uma f.e.m. (força eletromotriz) de 1,5 V. Uma pessoa, ao trocar as pilhas da lanterna, comete o equívoco de inverter a posição de uma das pilhas. 
       Considere que as pilhas mantêm contato independentemente da posição.
       Com esse equívoco, qual é a intensidade de corrente que passa pela lâmpada ao se ligar a lanterna?`, 
     difficulty: 3,
     options: JSON.stringify({
        A: '0,5 A',
        B: '1,0 A',
        C: '1,5 A',
        D: '2,0 A',
        E: '2,5 A'
    }),
    correctAnswer: 'A' 
   },
];

module.exports = {
    async up(queryInterface, Sequelize) {
      for (const item of data) {
        const foundItem = await queryInterface.rawSelect('Questions', {
          where: {
            title: item.title,
          },
        }, ['id']);
  
        if (foundItem) {
          await queryInterface.bulkUpdate('Questions', {
            difficulty: item.difficulty,
            options: item.options,
            correctAnswer: item.correctAnswer
          }, {
            title: item.title
          });
        } else {
          await queryInterface.bulkInsert('Questions', [item]);
        }
      }
    },
  
    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Questions', null, {});
    }
  };