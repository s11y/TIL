import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom"

class Layout extends React.Component {
  navigate() {
    console.log(this.props.history)
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="/archives/some-other-articles?date=yesterday&filter=none" class="btn btn-warning">archives (some other articles)</Link>
        <Link to="/archives?date=today&filter=hot" class="btn btn-danger">archives</Link>
        <NavLink to="settings/main" class="btn btn-success" activeClassName="btn-danger">settings</NavLink>
        <Link to="/settings/extra"><button class="btn btn-success">setting (extra)</button></Link>
        <button class="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}

export default withRouter(Layout)