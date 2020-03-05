/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Header from './Header';

const wrapperStyle = css`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const contentStyle = css`
  margin-top: 4rem;
  box-sizing: border-box;
  width: 1200px;
  height: calc(inherit - 4rem);
`;

interface Props {
  children: React.ReactChild;
}
function Layout({ children }: Props) {
  return (
    <section css={wrapperStyle}>
      <Header />
      <div css={contentStyle}>{children}</div>
    </section>
  );
}

export default Layout;
