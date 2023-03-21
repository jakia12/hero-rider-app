import React from 'react'

const RiderSignUp = () => {
    const {
        register,
        formState: { errors },
        getValues,
        handleSubmit,
      } = useForm();
    
      const { user, createUser, setLoading, loading, updateUserProfile } =
        AuthState();
    
     
    
     
      //get form registered from react form hook
    
      const [error, setError] = useState("");
    
      //navigate to homepage after signup
      const navigate = useNavigate();
    
      //set an accont type
      const [selectedType,setSelectedType]=useState('');
    
      //state to display the password as text
    
      const [isDisplayText, setIsDisplayText] = useState(false);
    
      const handleSignUp = (data) => {
        console.log('clicked')
        createUser(data.email, data.password)
          .then((res) => {
            const user = res.user;
            console.log(user);
    
            console.log(data);
            handleUpdateUser();
            alert("user sighned up successfully");
            // toast.success(`Wow!!! User signed up successfully`, {
            //     position: toast.POSITION.TOP_CENTER,
            //     toastId: customId1,
            //     autoClose: 1000
            // });
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
    
        const handleUpdateUser = () => {
          const profile = {
            photoURL: data.photo,
            displayName: data.name,
          };
          //display user
          updateUserProfile(profile)
            .then(() => {
              saveUser(data.name, data.email, data.userType);
            })
            .catch((err) => console.log(err));
        };
      };
    
      const saveUser = (name, email, userType) => {
        // const user = {
        //     name: name,
        //     email: email,
        //     userType: userType
        // };
        // console.log(user);
        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setCreatedUserEmail(email);
        //     })
        //     .catch(err => console.log(err))
      };
    
      //display password as a text clicking on eye icon
      const handleDisplayText = (e) => {
        e.preventDefault();
        isDisplayText === true ? setIsDisplayText(false) : setIsDisplayText(true);
      };
    
      //change account type
      const handleAccontChange = (e) =>{
        console.log(e.target.value)
        setSelectedType(e.target.value);
      }
  return (
    <form
onSubmit={handleSubmit(handleSignUp)}
className="flex flex-col gap-4 text-left"
>
<div className="md:flex items-center">
<div className="mb-1 w-full md:w-[50%] m-2">
  <label
    for="email"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Full Name
  </label>

  <input
    type="text"
    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
      errors.name
        ? " border border-red-500 focus:border-red-500"
        : " border border-gray-300 focus:border-blue-500"
    }`}
    placeholder="Your name"
    {...register("name", {
      required: "Name is required",
    })}
  />
  {errors.name && (
    <p className="text-red-500 mt-1">{errors.name.message}</p>
  )}
</div>
<div className="mb-1 w-full md:w-[50%] m-2">
  <label
    for="email"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Email
  </label>
  <input
    type="email"
    id="email"
    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
      errors.email
        ? " border border-red-500 focus:border-red-500"
        : " border border-gray-300 focus:border-blue-500"
    }`}
    placeholder="Your email"
    {...register("email", {
      required: "Email is required",
    })}
  />
  {errors.email && (
    <p className="text-red-500 mt-1">{errors.email.message}</p>
  )}
</div>
</div>
<div className="md:flex items-center">
{/* user age */}
<div className="mb-1 w-full md:w-[50%] m-2">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Age
  </label>

  <input
    type="text"
    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
      errors.age
        ? " border border-red-500 focus:border-red-500"
        : " border border-gray-300 focus:border-blue-500"
    }`}
    placeholder="Your Age"
    {...register("age", {
      required: "Age is required",
    })}
  />
  {errors.age && (
    <p className="text-red-500 mt-1">{errors.age.message}</p>
  )}
</div>
{/* user address */}
<div className="mb-1 w-full md:w-[50%] m-2">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Your Address
  </label>

  <input
    type="text"
    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
      errors.address
        ? " border border-red-500 focus:border-red-500"
        : " border border-gray-300 focus:border-blue-500"
    }`}
    placeholder="Your Address"
    {...register("address", {
      required: "Address is required",
    })}
  />
  {errors.address && (
    <p className="text-red-500 mt-1">{errors.address.message}</p>
  )}
</div>
</div>
<div className="md:flex items-center">
{/* phone number */}
<div className="mb-1 w-full md:w-[50%] m-2">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Your Phone
  </label>

  <input
    type="text"
    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
      errors.phone
        ? " border border-red-500 focus:border-red-500"
        : " border border-gray-300 focus:border-blue-500"
    }`}
    placeholder="Your Phone"
    {...register("phone", {
      required: "Phone is required",
    })}
  />
  {errors.phone && (
    <p className="text-red-500 mt-1">{errors.phone.message}</p>
  )}
</div>
{/* area */}
<div className="mb-1 w-full md:w-[50%] m-2">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Your Area
  </label>

  <input
    type="text"
    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
      errors.area
        ? " border border-red-500 focus:border-red-500"
        : " border border-gray-300 focus:border-blue-500"
    }`}
    placeholder="Your Area"
    {...register("area", {
      required: "Area is required",
    })}
  />
  {errors.area && (
    <p className="text-red-500 mt-1">{errors.area.message}</p>
  )}
</div>
</div>
<div className="md:flex items-center">
 {/* user password */}
 <div className="mb-1 relative w-full md:w-[50%] m-2">
  <label
    for="confirm_password"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Password
  </label>
  <input
    type={isDisplayText ? "text" : "password"}
    id="password"
    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
      errors.password
        ? " border border-red-500 focus:border-red-500"
        : " border border-gray-300 focus:border-blue-500"
    }`}
    placeholder="Your password"
    {...register("password", {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be 6 characters long",
      },
      pattern: {
        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
        message:
          "Password must have uppercase, number and special characters",
      },
    })}
  />
  <button
    className="absolute top-9 right-4"
    onClick={handleDisplayText}
  >
    {isDisplayText ? (
      <span className="text-2xl text-dark ">
        <MdOutlineRemoveRedEye />
      </span>
    ) : (
      <span className="text-2xl text-dark ">
        <RiEyeCloseLine />
      </span>
    )}
  </button>

  {errors.password && (
    <p className="text-red-500 mt-1">{errors.password.message}</p>
  )}
</div>
{/* confirm password */}
<div className="mb-1 relative w-full md:w-[50%] m-2">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Confirm Password
  </label>
  <input
    type={isDisplayText ? "text" : "password"}
    id="password"
    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
      errors.conPassword
        ? " border border-red-500 focus:border-red-500"
        : " border border-gray-300 focus:border-blue-500"
    }`}
    placeholder="Confirm Password"
    {...register("conPassword", {
      required: true,
      validate: (value) => {
        const { password } = getValues();
        return password === value || "Passwords should match!";
      },
    })}
  />
  <button
    className="absolute top-9 right-4"
    onClick={handleDisplayText}
  >
    {isDisplayText ? (
      <span className="text-2xl text-dark ">
        <MdOutlineRemoveRedEye />
      </span>
    ) : (
      <span className="text-2xl text-dark ">
        <RiEyeCloseLine />
      </span>
    )}
  </button>

  {errors.conPassword && (
    <p className="text-red-500 mt-1">
      {errors.conPassword.message}
    </p>
  )}
</div>
</div>
<div className="flex items-center">
 {/* user profile pic  */}
 <div className="mb-1 w-full md:w-[32%] m-2">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Profile Photo
  </label>

  <input
    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    id="multiple_files"
    type="file"
    multiple
    placeholder="Profile Photo"
    {...register("photo", {
      required: "Profile Photo is required",
    })}
  />

  {errors.photo && (
    <p className="text-red-500 mt-1">{errors.photo.message}</p>
  )}
</div>
{/* Nid pic */}
<div className="mb-1 w-full md:w-[32%] m-2">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    NId Photo
  </label>

  <input
    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    id="multiple_files"
    type="file"
    multiple
    placeholder=" NId Photo"
    {...register("nidPhoto", {
      required: " NId Photo is required",
    })}
  />

  {errors.nidPhoto && (
    <p className="text-red-500 mt-1">{errors.nidPhoto.message}</p>
  )}
</div>
{/* Driving licsence pic */}
{/* {`mb-1 w-full md:w-[32%] m-2 ${selectedType === "rider"? "block":"hidden"}`} */}
<div className="">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Driving license Photo
  </label>

  <input
    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    id="multiple_files"
    type="file"
    multiple
    placeholder=" Driving license Photo"
    {...register("licsensePhoto", {
      required: " Driving license Photo is required",
    })}
  />

  {errors.licsensePhoto && (
    <p className="text-red-500 mt-1">
      {errors.licsensePhoto.message}
    </p>
  )}
</div>
</div>
{/* vehicle type */}
<div className="mb-1">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Vehicle Type
  </label>
  <select
    id="types"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    {...register("vehicleType", {
      required: "Vehicle type is required",
    })}
  >
    <option selected>Choose a Vehicle type</option>
    <option value="car">Car</option>
    <option value="bike">Bike</option>
  </select>
  {errors.vehicleType && (
    <p className="text-red-500 mt-1">
      {errors.vehicleType.message}
    </p>
  )}
</div>
{/* {` ${selectedType === "rider"? "md:flex items-center":"hidden"}`} */}
<div className="md:flex items-center">
 {/* Car Name */}
 <div className="mb-1 w-full md:w-[32%] m-2">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Car Name
  </label>

  <input
    type="text"
    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
      errors.carName
        ? " border border-red-500 focus:border-red-500"
        : " border border-gray-300 focus:border-blue-500"
    }`}
    placeholder="Car Name"
    {...register("carName", {
      required: "Car Name is required",
    })}
  />
  {errors.carName && (
    <p className="text-red-500 mt-1">{errors.carName.message}</p>
  )}
</div>
{/* Car Model */}
<div className="mb-1 w-full md:w-[32%] m-2">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Car Model
  </label>

  <input
    type="text"
    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
      errors.carModel
        ? " border border-red-500 focus:border-red-500"
        : " border border-gray-300 focus:border-blue-500"
    }`}
    placeholder="Car Model"
    {...register("carModel", {
      required: "Car Model is required",
    })}
  />
  {errors.carModel && (
    <p className="text-red-500 mt-1">{errors.carModel.message}</p>
  )}
</div>
{/* Car Name Plate */}
<div className="mb-1 w-full md:w-[32%] m-2">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Car Name Plate
  </label>

  <input
    type="text"
    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
      errors.carNamePlate
        ? " border border-red-500 focus:border-red-500"
        : " border border-gray-300 focus:border-blue-500"
    }`}
    placeholder="Car Name Plate"
    {...register("carNamePlate", {
      required: "Car Name Plate is required",
    })}
  />
  {errors.carNamePlate && (
    <p className="text-red-500 mt-1">
      {errors.carNamePlate.message}
    </p>
  )}
</div>
</div>

<div className="flex justify-center items-center mt-3">
<button
  className="w-[fit-content] text-white py-2 px-32 rounded-md text-lg  bg-primaryCol hover:bg-secondaryCol block"
  type="submit"

>
  Sign Up
</button>
</div>
</form>
  )
}

export default RiderSignUp