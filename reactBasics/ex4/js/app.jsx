function Application(props) {
  return (
    <div className="scoreboard">
      <div className="header">
        {/*JSX expression functions, concat, values *Something that returns a
        value.  Learned how to pass in a consumed property.*/}
        <h1>{props.title}</h1>
      </div>
      <div className="players">
        <div className="player">
          <div className="player-name">
            Laszlo Lazuer
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">
                -
              </button>
              <div className="counter-score"> 31 </div>
              <button className="counter-action increment">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="player">
          <div className="player-name">
            Player 2
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">
                -
              </button>
              <div className="counter-score"> 33 </div>
              <button className="counter-action increment">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
//title: React.PropTypes.string.isRequired, //Example of requiring a value
};

Application.defaultProps = {
  // title: "Scoreboard",
}

ReactDOM.render(<Application />, document.getElementById('container'));
