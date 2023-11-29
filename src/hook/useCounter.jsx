
import { useState } from 'react'

function useIncrease(val=0) {
const [count, setcount] = useState(val)
function incount1() {
setcount(count+1)

}

  return[count,incount1]
}

export default useIncrease


