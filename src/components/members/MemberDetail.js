import React from 'react';

import {getMemberById} from "../../services/membersService";

class MemberDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getMemberById()
      .then((res) => {
        this.setState({
          data: res,
        });
      })
      .catch((e) => console.log(e))

    console.log('this.state.data', this.state.data)
  }

  render() {
    return (
      <section className="ft-section">
        <div className="ft-section__container">
          <h3 className="ft-h3">Member Detail</h3>
          {this.state.data.map((member, index) => {
            return (
              <span key={index}>{member.name}</span>
            )
          })}
        </div>
      </section>
    );
  }
}

export default MemberDetail;

