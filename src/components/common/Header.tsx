/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import palette from 'lib/palette';

import Button from 'components/common/Button';

import { Logo } from 'static/svg';

const wrapperStyle = css`
  font-size: 2rem;
  position: fixed;
  width: 100%;
  box-shadow: 0px 0 2px 2px ${palette.grey5};
  background-color: ${palette.grey1};
  top: 0;
  z-index: 10;
`;

const headerStyle = css`
  width: 1200px;
  height: 4rem;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <div css={wrapperStyle}>
      <div css={headerStyle}>
        <Logo.Title />
        <Button path="/sign_in">로그인</Button>
      </div>
    </div>
  );
}

export default Header;
