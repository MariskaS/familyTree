import React from 'react';
import {Link} from "react-router-dom";

import {getMembers} from "../../services/membersService";

import '../../styles/components/members/memberList.scss'

class MemberList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getMembers()
      .then((res) => {
        this.setState({
          data: res,
        });
      })
      .catch((e) => console.log(e))
  }

  render() {
    return (
      <div className='ft-member-list'>
        {this.state.data.map((member, index) => {
          return (
            <Link to={`member-detail/${member.id}`} key={index}>{member.name}</Link>
          )
        })}
      </div>
    );
  }
}

export default MemberList;
