import React, {Component} from 'react'

import {Link, IndexLink} from 'react-router'

class Index extends Component {
  render(){
    return (
      <div className="m-index">
        <header>
          拉勾网
        </header>
        <section>
          {this.props.children}
        </section>
        <footer>
          <ul>
            <li>
              <Link activeClassName="active" to="/position">
                <i className="yo-ico">&#xe6bb;</i>
                <b>职位</b>
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/search">
                <i className="yo-ico">&#xe65c;</i>
                <b>搜索</b>
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/mine">
                <i className="yo-ico">&#xe78c;</i>
                <b>我的</b>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Index
