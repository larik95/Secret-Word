import './GameOver.css';

const GameOver = ({ retry, score }) => {
  return (
    <div className='gameover'>
        <div>
      <h1>Fim de jogo!</h1>
      <h2>
          A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
    </div>
  )
}

export default GameOver