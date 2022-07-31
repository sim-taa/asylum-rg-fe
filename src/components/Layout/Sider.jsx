import { Layout } from 'antd';
import NavBar from './NavBar';

export function SiderContent() {
  const { Sider } = Layout;
  return (
    <Sider
      // I would wait on breakpoints and collapsing options until design documents updated to include mobile
      // breakpoint="lg"
      // collapsedWidth="0"
      style={{
        position: 'sticky',
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width="auto"
    >
      <NavBar />
    </Sider>
  );
}
