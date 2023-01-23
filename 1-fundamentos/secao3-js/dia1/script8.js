const pecaUser = 'cAvalo';

const peca = pecaUser.toLowerCase();

switch(peca){
    case 'peao':
        console.log('Peão = reto, para frente, até 1 casa (porém na sua primeira jogada pode andar 2 casas)');
        break;
    case 'cavalo':
        console.log('Cavalo = em L (tres para frente e 1 para o lado -4 casas)');
        break;
    case 'rei':
        console.log('Rei = para qualquer direção até 1 casa');
        break;
    case 'rainha':
        console.log('Rainha = para qualquer lugar');
        break;
    case 'bispo':
        console.log('Bispo = na diagonal');
        break;
    case 'torre':
        console.log('Torre = reto para qualquer lado');
        break;
    default:
        console.log('Nao foi encontrado essa peça.')       
}