import 'nprogress/nprogress.css' // progress bar style

import NProgress from 'nprogress' // progress bar

NProgress.configure({ showSpinner: false })
NProgress.options = ({ color, height }) => {
  const style = document.createElement('style')
  style.textContent = `
  #nprogress .bar {
    background: ${color} !important;
    height: ${height}px !important;
  }
  `
  document.body.appendChild(style)
}

export default NProgress
