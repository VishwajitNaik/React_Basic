// _________Map in React__________________

// import React from 'react'

// function UsingMAPNaameList() {
//   const names = ['Bruce', 'Clark', 'Dian']
//     return (
//         <div>
//             {names.map(name =><h2>{name}</h2>)}
//         </div>
//   )
// }

// export default UsingMAPNaameList


//_____________Best Way writting________ 

// import React from 'react'

function UsingMAPNaameList() {
  const names = ['Bruce', 'Clark', 'Dian']
  const NewList = names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {NewList}
        </div>
  )
}

export default UsingMAPNaameList
