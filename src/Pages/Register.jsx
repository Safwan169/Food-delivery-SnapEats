import React, { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff, IoKey } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";
import Lottie from "lottie-react";
import animation from "../../public/loading.json";
import { my_context } from "../ContextProvider";
import { auth } from "../../firebase.config";
import Authtitle from "../Componants/Authentication/Authtitle";
import { useNavigate } from "react-router";
const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState();

  const [image, setImage] = useState(null);

  const [imageUrl, setImageUrl] = useState(null);

  const { createUser, setDep, dep } = useContext(my_context);
  const [eye, setEye] = useState(false);
  const [ok, setOk] = useState();
  const [okk, setOkk] = useState();

  const handlePhoto = (e) => {
    setImage(e.target.files[0]);
    setLoading(true);
  };

  useEffect(() => {
    const handlePhotoUrl = async () => {
      if (image) {
        // console.log(image);

        // setLoading(true);

        const formData = new FormData();
        formData.append("image", image);

        // Send image to ImgBB API
        try {
          const res = await axios.post(
            `https://api.imgbb.com/1/upload?key=041ade7e4cb9e3652777ac4caca1ef91`, 
            formData
          );
          setImageUrl(res?.data?.data?.url);
          console.log(res?.data?.data?.url);
        } catch (error) {
          console.error("Error uploading image:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    handlePhotoUrl();
  }, [image]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = imageUrl;
    console.log(photoURL);

    setOkk("");
    setOk("");

    if (image == null) {
      console.log("Please");

      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        color: "red",
        title: "Please submit your Image",
      });
    }

    console.log(imageUrl, "here is the image link");
    if (imageUrl) {
      if (password.length < 6) {
        setOkk("Your password must be 6 letters");
        return;
      } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        setOkk("Password must include both uppercase and lowercase letters");

        return;
      }
      //    console.log(name,email,password,photoURL)
      createUser(email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: `${name}`,
            photoURL: `${imageUrl}`,
          }).then(() => {
            Swal.fire({
              title: "Good job!",
              text: "You have successfully Registered",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            setDep(!dep);
            navigate("/");
          });
        })

        .catch((error) => {
          setOk("Email already in use ");
        });
    }
  };

  return (
    <>
      <div className="h-screen mt-5 md:mt-32 relative  lg:mt-40 ">
        <Authtitle
          name={"Register"}
          text={"Already Have an account? "}
          go={"Sign In"}
          where={"/login"}
        ></Authtitle>
        <div className="lg:flex md:flex justify-center px-2 lg:px-0 h-   mx-auto">
          <img
            className="mb-4 lg:mb-0 md:mb-0"
            src="https://i.ibb.co/HdGkVSv/register-pic.jpg"
            alt=""
          />

          <div className="lg:w-1/2 md:w-1/2  ">
            <form onSubmit={handleSubmit} class="max-w-md mx-auto">
              {/* name */}
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="text"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Name{" "}
                </label>
              </div>

              {/* email */}
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex items-center gap-2"
                >
                  <MdOutlineEmail size={15} /> Email address
                </label>
              </div>
              {ok && <p className=" ml-3 text-red-500">{ok}</p>}

              {/* password */}
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type={eye ? "text" : "password"}
                  name="password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex gap-2 items-center"
                >
                  <IoKey size={15} /> Password
                </label>
                <p
                  onClick={() => setEye(!eye)}
                  className="absolute right-0 bottom-3"
                >
                  {eye ? <IoEyeOff /> : <FaEye />}
                </p>
              </div>

              {okk && <p className=" ml-2 text-red-500">{okk}</p>}
              {/* photo url */}
              {/* <div class="relative z-0 w-full mb-5 group">
   
              {/* for photo url to host  */}

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Pick a Photo</span>
                </div>
                <input
                  type="file"
                  name="photo"
                  onChange={handlePhoto}
                  className="file-input file-input-bordered w-full max-w-xs"
                />
                <div className="label"></div>
              </label>

              <div className=" text-end ">
                <button
                  type="submit"

                  disabled={loading}
                  className={` rounded-3xl  ${loading?'cursor-not-allowed bg-gray-400':'cursor-pointer text-white bg-red-500 hover:bg-blue-800 ' }  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                >
                  Submit
                </button>
              </div>
            </form>
            {/* <div className="divider mt-5 font-bold"></div>
              <Withsocial text={'Register with Social Media'}></Withsocial> */}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="w-full h-full bg-slate-800 z-50">
          <Lottie
            className="w-72 h-72 absolute right-1/2 top-1/2  -translate-y-1/2 translate-x-1/2  mx-auto"
            animationData={animation}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Register;
