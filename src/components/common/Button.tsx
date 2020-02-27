/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import palette from 'lib/palette';

const wrapperStyle = css``;

const buttonStyle = css`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 25px;
  background-color: ${palette.blue7};
  color: ${palette.grey1};
  font-size: 1.125rem;
  cursor: pointer;
  :hover {
    background-color: ${palette.blue6};
  }
`;

interface Props {
  children: React.ReactChild;
}
function Button({ children }: Props) {
  return (
    <div css={wrapperStyle}>
      <button type="button" css={buttonStyle}>
        {children}
      </button>
    </div>
  );
}
export default Button;
