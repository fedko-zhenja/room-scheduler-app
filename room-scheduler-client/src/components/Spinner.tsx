import React from 'react';
// import './index.css';
import { Spin } from 'antd';

// const contentStyle: React.CSSProperties = {
  // padding: 50,
  // background: 'rgba(0, 0, 0, 0.05)',
  // borderRadius: 4,
  // width: '100%',
  // height: '100%'
// };

// const content = <div style={contentStyle} />;

export const Spinner: React.FC = () => (
  // <Flex gap="middle" vertical>
  //   <Flex gap="middle">
      <Spin tip="Loading" size="large">
        {/* {content} */}
      </Spin>
  //   </Flex>
  // </Flex>
);

// export default App;