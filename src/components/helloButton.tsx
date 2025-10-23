import { Button } from '@mantine/core'
import React, { useState } from 'react'

export default function HelloButton() {
    const [count,setCount] = useState<number>(0)
  return (
<Button onClick={()=> setCount(count + 1)}>Clicked {count} times</Button>

)
}
