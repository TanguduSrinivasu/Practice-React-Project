import React from 'react'
const cssStyles = {
    color : 'red',
    fontStyle : 'italic'
}

function InlineStyles() {
  return (
    <div>
        <h2 style={cssStyles}>InlineStyles</h2>
        <br></br>
        <h1 className="error">Inline Error</h1>
        {/* <h1 className={styles.success}>Success</h1> */}
    </div>
  )
}

export default InlineStyles