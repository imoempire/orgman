import React from "react";
import { connect } from "react-redux";
import Member from '../Notes/Member'

const MemberList = ({ Members, deleteMember, editMember }) => {
  const MemberList = Members.map((member)=> {
    return (
      <div className="column is-4" key={member.id}>
        <Member 
        member={member}
        key={member.id}
        deleteMember={deleteMember}
        editMember={editMember}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="columns" style={{ flexWrap: "wrap" }}>
        {MemberList}
      </div>
    </div>
  );
};

const mapStateToProps=(state) => {
  return {
        Members: state.member.Member
  };
};
export default connect(mapStateToProps)(MemberList);
