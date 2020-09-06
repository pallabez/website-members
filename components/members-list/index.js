import React from 'react';
import PropTypes from 'prop-types';
import MemberListItem from 'components/member-list-item';
import classNames from './member-list.module.scss';

const MembersList = ({ membersArr }) => {
  if (membersArr) {
    return (
      <div className={classNames.container}>
        {membersArr.map((ele) => (
          <React.Fragment key={ele['id']}>
            <MemberListItem memberDetails={ele} />
          </React.Fragment>
        ))}
      </div>
    );
  }

  return null;
};

MembersList.propTypes = {
  membersArr: PropTypes.array
};

MembersList.defaultProps = {
  membersArr: []
};

export default MembersList;
