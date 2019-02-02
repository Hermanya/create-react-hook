import React from 'react'
import { useMyHook } from '{{name}}'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App