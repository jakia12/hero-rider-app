import React from "react";

const ProfilePageLayout = () => {
  return (
    <section className="py-14 lg:py-20">
      {/* profile header */}
      <div className="container max-auto w-full md:max-w-7xl px-6">
      <div className="bg-gray-800  py-4 px-3">

<div className="flex items-center justify-between px-6">
    <div className="w-6/12 flex items-center">

        <span className='hidden md:inline-block text-firstCol   mr-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
            </svg>

        </span>
        <h4 className="text-lg md:text-xl text-semibold inline-block text-gray-100">
            Hello,
        </h4>
    </div>
    <div className="w-6/12 ">


        <div className="flex items-center justify-center">
            {/* search bar */}
            {/* <div className=" hidden md:block">
                <form onSubmit='' className='relative'>
                    <span className="absolute top-3 left-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>

                    <input
                        type="text"
                        name="searchBar"
                        id="searchBar"
                        className="pl-14 py-2.5 pr-2 block  rounded-lg border-gray-300 bg-card text-sm"
                        placeholder="Search here..."
                    />
                </form>

            </div> */}
            {/* notification icon */}
            <div className="pl-7 pr-3 relative inline-flex items-center cursor-pointer">
                <span className="text-3xl text-white inline-block">
                    <MdNotifications />
                </span>
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-firstCol border-2 border-gray-800 rounded-full -top-2 -right-0 dark:border-gray-900">5</div>

            </div>
            {/* user dropdown */}
            <div className="ml-5 mr-6 flex items-center cursor-pointer relative"
                onClick={handleShow}
            >
                <img src={""} alt="" className='rounded-full w-12 h-12 md:w-14 md:h-14 ' />
                <button className="text-2xl text-white">
                    <IoMdArrowDropdown />
                </button>
                <div
                    className="absolute top-16 z-10 left-0 w-44 p-5 rounded shadow-lg shadow-gray-300 bg-gray-100 "
                    style={{ display: showDropdown === true ? "block" : "none" }}
                >
                    <ul>
                        <li className='mb-3'>
                            <a href="">{""}</a>
                        </li>
                        <li>

                            <button
                                className='flex items-center justify-center text-base'
                                //onClick={handleLogOut}
                            >
                                <span className="text-xl text-dark mr-3"> <AiOutlineLogout /></span>
                                Sign Out
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
            <span className=' text-white  mx-3 md:hidden cursor-pointer' title='Open sidenav'
                onClick={handleToggle}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>

            </span>

        </div>


    </div>

</div>
{/* <hr className='my-3 md:hidden' />                                    {/* mobile search form */}
<div className="py-4  md:hidden px-40 text-center flex justify-center items-center">
    <form onSubmit='' className='relative text-center'>
        <span className="absolute top-3 left-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </span>

        <input
            type="text"
            name="searchBar"
            id="searchBar"
            className="pl-14 py-2.5 pr-2 block  rounded-lg border-gray-300 bg-card text-sm "
            placeholder="Search here..."
        />
    </form>
</div>
</div> 
      </div>
    </section>
  )

export default ProfilePageLayout;
