// import React from 'react'
// import axios from 'axios'

// class OfferIndex extends React.Component {
//   state = {
//     offers: []
//   }

//   render() {
//     return (
//       <>
//         <h2>My Offers</h2>
//         {this.state.offers.map(user => (
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

// export default OfferIndex