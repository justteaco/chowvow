// import React from 'react'
// import axios from 'axios'

// class Offers extends React.Component {
//   state = {
//     user: {}
//   }

//   async componentDidMount() {

//   }


//   render() {
//     const { user } = this.state
//     return (
//       <>
//         <h2>My Offers</h2>
//         {user.map(user => (
//           <div key={user.id}>
//             <img src={user.image} alt={user.id} />
//             <div>
//               <h3>{user.name}</h3>
//               <h4>Rating</h4>
//               <h4>{user.city}</h4>
//               <div>
//                 <ul>
//                   {user.map((skill, i) => (
//                     <li key={i}>{skill}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <button onClick={this.handleDelete} name={user.id}>Delete</button>
//             <button onClick={this.handleAccept} name={user.id}>Accept</button>
//           </div>
//         ))}
//       </>
//     )
//   }
// }

// export default Offers