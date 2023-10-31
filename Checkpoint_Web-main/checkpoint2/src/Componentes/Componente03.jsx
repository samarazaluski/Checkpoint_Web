function Componente03(props) {
    return (
        <>
            <h3>COMPONENTE 03</h3>
            <h2>Veículos Autônomos</h2>
            <p>
                Os carros ou veículos autônomos têm como característica a capacidade de transportar pessoas ou bens sem um condutor humano. Eles possuem um sistema de navegação que não depende de um controle direto de um motorista.
            </p>
            <p>
                O sistema autônomo mapeia os arredores do carro, sinalizando a presença de outros veículos, pedestres e situações no trânsito e aciona o freio quando preciso. Portanto, um veículo autônomo será capaz de se guiar sozinho e tomar as decisões necessárias, mas isso com o suporte da inteligência artificial, de sensores e softwares avançados.
            </p>
            <p>INFORMAÇÃO ENVIADA PELO COMPONENTE PAI: {props.linguagemPai}</p>
            <button onClick={props.clicouPai}>Clique Aqui</button>
        </>
    );
}

export default Componente03;
