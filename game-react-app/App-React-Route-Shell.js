
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;

    var destination = document.querySelector("#container");

  
var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Nimzy-n-Antzy</h1>
        <ul className="header">
            <li><IndexLink to="/" activeClassName="active">Login</IndexLink></li>
          <li><Link to="/stuff" activeClassName="active">Intro</Link></li>
          <li><Link to="/contact" activeClassName="active">Trivia</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
});


    var Home = React.createClass({
  render: function() {
      return (
        <div>
          <h2>Welcome to Nimzy's World</h2>
          <p>'Nimzy' has crash landed to earth in search of music. He crashes in the desert outside of Roswell New Mexico and meets his reluctant companion 'Antzy'...</p>
  
          <p>Help Nimzy Find the Music!</p>
        </div>
      );
    }
});

var Contact = React.createClass({
  render: function() {
      return (
        <div>
          <h2>See if you are smarter than an Alien!</h2>
          <p>Nimzy was created by John Thomas Dispennette....please visit his site!!!! <a href="http://dispennetteartworks.com"></a>.
          </p>
        </div>
      );
    }
});
 
var Stuff = React.createClass({
  render: function() {
      return (
        <div>
          <div style="position: fixed; z-index: -99; width: 100%; height: 100%">
            <iframe frameborder="0" height="100%" width="100%" 
              src="https://www.youtube.com/embed/HzNTVvPnzHI?autoplay=1&controls=0&showinfo=0&autohide=1">
            </iframe>
          </div>
        </div>
      );
    }
});





  ReactDOM.render(
  <Router>
    <Route path="/" component={Stuff}>
    <IndexRoute component={Stuff}/>
    <Route path="stuff" component={Stuff} />
    <Route path="contact" component={Stuff} />
    </Route>
  </Router>,
  destination
);

 