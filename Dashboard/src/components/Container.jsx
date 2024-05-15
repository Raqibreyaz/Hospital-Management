import React from 'react'

function Container({ children, p = '' }) {
  return (
    <div className={`w-full sm:rounded-l-[40px] max-sm:rounded-t-[40px] bg-zinc-950 min-h-[96vh]`} style={{ padding: p ? `${p}vmax` : '30px' }}>
      {children}
    </div>
  )
}

export default Container
