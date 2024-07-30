import React from 'react';
import { Spin } from 'antd';

const contentStyle: React.CSSProperties = {
  padding: 50,
  borderRadius: 4,
};

export const Spinner: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Spin tip="Loading" size="large">
      <div style={contentStyle} />
    </Spin>
  </div>
);