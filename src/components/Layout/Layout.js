import React from 'react';
import { connect } from 'react-redux';

import { themeConfig } from '../../context/ThemeContext';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, theme }) => (
  <div
    style={{
      background:
        theme.themeConfig === 'light'
          ? themeConfig.light.bodyBg
          : themeConfig.dark.bodyBg,
      color:
        theme.themeConfig === 'light'
          ? themeConfig.light.fontColor
          : themeConfig.dark.fontColor,
    }}
  >
    {children}
  </div>
);

const mapStateToProps = state => ({
  theme: state.theme.themeConfig,
});

export default connect(mapStateToProps)(Layout);
