import {Link} from 'react-router-dom';

const Error = () => {
return (

  <div>

    <h2>Oh no...</h2>
    <h3>¡Te has estrellado en el planeta ERROR 404!</h3>
    <h3>¡Apresúrate y escapa antes que las criaturas te atrapen! </h3>
    <Link to= '/home'>
      <button> ¡ESCAPAR! </button>
    </Link>

  </div>
);
};

export default Error;