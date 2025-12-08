
import React from 'react';
import { escapesData } from '../../data/data'; // Adjust the path if needed
import { Allura } from 'next/font/google'
import { Lato } from 'next/font/google'

const AlluraFont = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
})
const LatoFont = Lato({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
})


function Page() {
  return (
    <div>
      <h3 className='font-bold text-center text-3xl'>Escapes Page</h3>
      <div>
        {escapesData.map((escape, index) => (
          <div
            key={escape.id}
            className={`max-w-5xl flex gap-4 mx-auto my-10 p-4 `}
          >
            {index % 2 === 0 ? (
              <>
                <img src={escape.img} alt={escape.name} width={200} height={100} />
                <div>
                  <h4 className={`text-3xl pb-0 ${AlluraFont.className}`}>{escape.name}</h4>
                  <p className={`text-xl pb-3 ${LatoFont.className}`}>{escape.discrption}</p>
                  <div>
                    {escape.packages.map((pkg, pkgIndex) => (
                      <div key={pkgIndex} >
                        <h5 className='pb-2'>{pkg.name}</h5>    
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h4 className={`text-3xl pb-0 ${AlluraFont.className}`}>{escape.name}</h4>
                  <p className={`text-xl pb-3 ${LatoFont.className}`}>{escape.discrption}</p>
                  <div>
                    {escape.packages.map((pkg, pkgIndex) => (
                      <div key={pkgIndex} >
                        <h5 className='pb-2'>{pkg.name}</h5>    
                      </div>
                    ))}
                  </div>
                </div>
                <img src={escape.img} alt={escape.name} width={200} height={100} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;