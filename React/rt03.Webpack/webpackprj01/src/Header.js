import React from 'react';

// const {...props} = props;
function Header() {
  <div w3-include-header="header.html">
    <header data-role="header">
      <h1>Header.html</h1>
    </header>
  </div>;
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header; // React.memo(Header); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
