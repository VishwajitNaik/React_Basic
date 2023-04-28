// import React from 'react'

// export const PropsWithoutpropsKye = ({name, age, fev}) => {
//     console.log(name, age, fev);
//   return (
//     <>
//         <h1><span>{name}</span> {age} {fev}</h1>
//     </>
//   )
// }

// orrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

import React from 'react'

export const PropsWithoutpropsKye = props => {
  const {name, age, fev} = props
    return (
    <div>
        <h1>{name} {age} {fev}</h1>
    </div>
  )
}

