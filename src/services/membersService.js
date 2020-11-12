import {MEMBER_LIST} from "../constants";

const axios = require('axios');

export const getMembers = async () => {

  // TODO: change to BE.
  const memberList = MEMBER_LIST;

  // const res = await axios.get('/',
  //   {headers: {'Content-Type': 'application/json;charset=UTF-8'}});
  // const members = res.data.map(item => {

  const data = memberList.map(item => {
    return {
      id: item.id,
      name: item.name
    }
  });

  return data || [];
};


export const getMemberById = async (memberId) => {
  // TODO: change to BE.
  const member = MEMBER_LIST.find((v) => +v.id === +memberId);

  console.log('member', member)

  // const res = await axios.get(`/${memberId}`,
  //   {headers: {'Content-Type': 'application/json;charset=UTF-8'}});
  const data = {
    id: member.familyMembers.id,
    name: member.familyMembers.name,
    role: member.familyMembers.role,
  }

  return data || {};
};


