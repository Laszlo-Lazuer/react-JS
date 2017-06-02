function Header(props) {
  return (
    <div className="header">
      {/*JSX expression functions, concat, values *Something that returns a
      value.  Learned how to pass in a consumed property.*/}
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement">
        -
      </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment">
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
      <Counter score={props.score} />
    </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
      <div className="players">
        <div className="player">
          <div className="player-name">
            <Player name="Laszlo Lazuer" score={31} />
            <Player name="Player2" score={33} />
          </div>
        </div>
      </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
};

Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application />, document.getElementById('container'));
