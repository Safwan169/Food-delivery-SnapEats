import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const my_context = createContext();
const ContextProvider = ({ children }) => {
  const [restaurantBtn, setRestaurantBtn] = useState("All");

  const [menu, setMenu] = useState(0);

  const [triger, setTriger] = useState(false);


  const [cart,setCart]=useState();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [dep, setDep] = useState(false);
  const [dep2, setDep2] = useState(false);
  const [userLoad, setUserLoad] = useState("false");

  const [load, setLoad] = useState(false);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const google = () => {
    setLoading(true);

    return signInWithPopup(auth);
  };

  useEffect(() => {
    const  cartFoods = JSON.parse(localStorage.getItem("cartFood"));
    setCart(cartFoods);
  }, [triger]);

  useEffect(
    () => {
      setLoading(true)
      const unSubscribe = onAuthStateChanged(auth, (user) => {

        if (user) {

          // jwt
          // axios
          //   .post("https://b9a12-server-side-safwan169.vercel.app/jwt", user, {
          //     withCredentials: true,
          //   })
          //   .then((res) => {
          //     console.log("token response", res.data);
          //   });

          
         
          setUser(user);

          
        
          setLoading(false);

          // }, [])
        } else {
          // User is signed out
          // ...
          setLoading(false);

          setUser(false);

          axios
            .post(
              "https://b9a12-server-side-safwan169.vercel.app/logout",
              user,
              {
                withCredentials: true,
              }
            )
            .then((res) => {
              console.log(res.data);
            });
        }
      });

      return unSubscribe;
    },
    [dep],
    [dep2]
  );

  const data = {
    setRestaurantBtn,
    restaurantBtn,
    setMenu,
    menu,
    setTriger,
    triger,
    cart,
    setCart,
    createUser,
    signInUser,
    google,
    user,
    dep2,
    setDep,
    setDep2,
    loading,
    setLoading,
    load,
    setLoad,
    
    setUserLoad,
    userLoad,
  };
  return <my_context.Provider value={data}>{children}</my_context.Provider>;
};

export default ContextProvider;
