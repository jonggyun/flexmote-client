/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import palette from 'lib/palette';

const wrapperStyle = css``;

const buttonStyle = css`
  width: 80px;
  height: 35px;
  border: none;
  border-radius: 25px;
  background-color: ${palette.blue7};
  color: ${palette.grey1};
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: ${palette.blue6};
  }
`;

interface Props {
  children: React.ReactChild;
  path?: string;
}
function Button({ children, path }: Props) {
  return (
    <div css={wrapperStyle}>
      {path && (
        <Link to={path}>
          <button type="button" css={buttonStyle}>
            {children}
          </button>
        </Link>
      )}
      {!path && (
        <button type="button" css={buttonStyle}>
          {children}
        </button>
      )}
    </div>
  );
}
export default Button;
