import PropTypes from 'prop-types';

function BoasVindas (props) {
    return (
        <section style={{background: '#000002', borderRadius: '20px', padding: '8px', marginBottom: '8px'}}>
            <h1 style={{color: '#e7ddd3'}}>Olá, {props.nome}, seja bem-vindo!</h1>
            <p>Aqui você vai aprender o que é React.</p>
        </section>
    );
};

BoasVindas.defaultProps = {
    nome: 'Anonimo',
};

BoasVindas.propTypes = {
    nome: PropTypes.string
}

export default BoasVindas;