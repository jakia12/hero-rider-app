import React from "react";
import userPic from '../../images/1.jpg';

const ProfilePage = () => {
  return (
    <section className="py-10 bg-[#f9f9f9]">
      {/* profile header */}
      <div className="container max-auto w-full md:max-w-6xl px-6">
      <div className="flex justify-center flex-wrap md:flex-nowrap">
       
      <div className=" w-full md:w-9/12">
          <div className="p-8 bg-white rounded-sm m-4">
            <div className="md:flex md:justify-evenly justify-center">
              {/* user image */}
              <img src={userPic} alt="" className="rounded-full w-[130px] h-[130px] border-2 border-[#f9f9f9]" />
               {/* user name  */}
                <div className="ml-4 text-center">
                  <h3 className="text-lg font-medium text-dark mb-2">
                    JHon Doe
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                  Subtitle of the user
                  </p>
                 
                  
                  <div class="flex items-center">
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>

                  <button className="py-2 px-6 text-sm font-normal bg-primaryCol hover:bg-secondaryCol text-white rounded-md">Contact</button>
                </div>
                {/* user bio */}
                <div className="md:ml-4 text-center">
                  <h3 className="text-lg font-medium text-dark mb-2">Bio</h3>
                  <p className="text-gray-600 text-sm mb-2">
                  Nunc ipsum nisl, maximus quis nunc et, mattis tristique nisi. Duis vehicula pellentesque dolor eu consectetur. Maecenas tristique orci blandit nunc congue venenatis. 
                  </p>

                </div>

                 
            </div>
          </div>
          <div className="p-8 bg-white rounded-sm m-4">
            <h2 className="text-xl font-semibold text-dark mb-4 text-left"> User's Info</h2>
            <div className="flex">
                  <div className="mr-4 flex">
                    <span className="text-lg font-normal text-dark mb-2">
                    Email : 
                    </span>
                    <span>
                      gazijakia@gmail.com
                    </span>
                 </div>
                 <div className="mr-4 flex">
                    <span className="text-lg font-normal text-dark mb-2">
                    Email : 
                    </span>
                    <span>
                      gazijakia@gmail.com
                    </span>
                 </div>
                 <div className="mr-4 flex">
                    <span className="text-lg font-normal text-dark mb-2">
                    Email : 
                    </span>
                    <span>
                      gazijakia@gmail.com
                    </span>
                 </div>
            </div>
                 
          </div>
        </div>
        <div className="w-full md:w-3/12">
          <div className="p-8 m-4 bg-white">
          <h2 className="text-xl font-semibold text-dark mb-4 text-left"> Purchase</h2>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-dark">
              Course Purchased
            </h3>
            <p className="text-sm font-semibold text-gray-600">
             10
            </p>
          </div>
          </div>
        </div>
      </div>
      </div>

      
    </section>
  )}

export default ProfilePage
