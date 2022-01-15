import React from 'react'
import PropTypes from "prop-types";
import axios from 'axios';

class TenqSocAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      provider,
      label,
      className,
      host,
      onAuth
    } = this.props;
  }

  getAuth() {
    axios.post(`${this.props.host}/api/v0/auth/soc/${this.props.provider}/key`).then(response => {
      localStorage.setItem('socKey', response.data);
      this.getSoc();
    })
  }

  getSoc() {
    let _this = this;
    axios.post(`${this.props.host}/api/v0/auth/soc/${this.props.provider}`).then(response => {
      let newWindow = null;
      newWindow = window.open(response.data, "", "width=680,height=400");

      var poolingInterval = setInterval(function () {
        if (!newWindow || newWindow.closed || newWindow.closed === undefined) {
          clearInterval(poolingInterval)
          poolingInterval = null
          newWindow = null
        }
        //console.log(newWindow)
        if (newWindow === null) {
          _this.getSocInfo();
        }
      }, 250);
    })
  }

  getSocInfo() {
    axios.post(`${this.props.host}/api/v0/auth/soc/${localStorage.getItem('socKey')}/info`).then(response => {
      this.props.onAuth(response);
      localStorage.removeItem('socKey');
    })
  }

  render() {
    return (
      <button className={this.props.className} onClick={() => this.getAuth()}>
        {
          this.props.children ?
            this.props.children :
            this.props.label
        }
      </button>
    );
  }
}

TenqSocAuth.propTypes = {
  provider: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  host: PropTypes.string,
  onAuth: PropTypes.func
};

TenqSocAuth.defaultProps = {
  provider: 'vkontakte',
  label: 'VK',
};

export default TenqSocAuth;
