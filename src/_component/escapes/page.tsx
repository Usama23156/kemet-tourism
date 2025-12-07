import React from 'react'

function page() {
  return (
    <div>
       <h3 className='font-bold text-center text-3xl'>Escapes Page</h3>
       <div>
        <div className='max-w-3xl flex flex gap-4 mx-auto my-10 p-4'>
        <img src="/IMG_3426 2.jpg" alt="" className='w-36' />
        <div>
            <h4>nile scapes</h4>
            <p>Discover the serene beauty .</p>
            <p>Discover the serene beauty of our Nile Escapes, where tranquility meets adventure along the majestic Nile River. Immerse yourself in luxurious accommodations, breathtaking landscapes, and unforgettable experiences that capture the essence of this iconic waterway. Whether you're seeking a romantic getaway or a family adventure, our Nile Escapes offer the perfect blend of relaxation and exploration.</p>
        </div>
        </div>
        <div className='max-w-3xl flex flex gap-4 mx-auto my-10 p-4'>
        
        <div>
            <h4>nile scapes</h4>
            <p>Discover the serene beauty .</p>
            <p>Discover the serene beauty of our Nile Escapes, where tranquility meets adventure along the majestic Nile River. Immerse yourself in luxurious accommodations, breathtaking landscapes, and unforgettable experiences that capture the essence of this iconic waterway. Whether you're seeking a romantic getaway or a family adventure, our Nile Escapes offer the perfect blend of relaxation and exploration.</p>
        </div>
        <img src="/IMG_3426 2.jpg" alt="" className='w-36'/>
        </div>

       </div>
    </div>
  )
}

export default page
// import React from 'react';
// import { escapesData } from './data'; // Adjust the path if needed

// function Page() {
//   return (
//     <div>
//       <h3 className='font-bold text-center text-3xl'>Escapes Page</h3>
//       <div>
//         {escapesData.map((escape, index) => (
//           <div
//             key={escape.id}
//             className={`max-w-3xl flex gap-4 mx-auto my-10 p-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
//           >
//             {index % 2 === 0 ? (
//               <>
//                 <img src={escape.imageUrl} alt={escape.title} width={200} height={100} />
//                 <div>
//                   <h4>{escape.title}</h4>
//                   <p>{escape.description}</p>
//                   <p>{escape.details}</p>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div>
//                   <h4>{escape.title}</h4>
//                   <p>{escape.description}</p>
//                   <p>{escape.details}</p>
//                 </div>
//                 <img src={escape.imageUrl} alt={escape.title} width={200} height={100} />
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Page;