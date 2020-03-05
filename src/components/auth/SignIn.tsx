/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import palette from 'lib/palette';

import { Icon } from 'static/svg';

const wrapperStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const signBoxStyle = css`
  width: 450px;
  height: 250px;
  border: 1px solid ${palette.grey5};
  padding: 40px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* & > a:nth-child(1),
  & > a:nth-child(2) {
    margin-bottom: 10px;
  } */
`;

const oauthStyle = css`
  width: 100%;
  height: 45px;
  border: 1px solid ${palette.grey5};

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.grey9};
  text-decoration: none;

  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 2px 1px ${palette.grey5};
  }
  & > svg {
    height: 25px;
    margin-right: 5px;
  }
`;

function SignIn() {
  const host = `${process.env.REACT_APP_OAUTH_HOST}/social/redirect`;
  return (
    <div css={wrapperStyle}>
      <div css={signBoxStyle}>
        <a href={`${host}/google`} css={oauthStyle} rel="noopener noreferrer">
          <Icon.Google />
          Google Login
        </a>
        <a href={`${host}/google`} css={oauthStyle} rel="noopener noreferrer">
          <Icon.Github />
          Github Login
        </a>
        <a href={`${host}/google`} css={oauthStyle} rel="noopener noreferrer">
          <Icon.Facebook />
          Facebook Login
        </a>
      </div>
    </div>
  );
}

export default SignIn;
