import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setfulnsme] = useState("");
  const [phone, SetPhone] = useState("");
  const [adderess, setAdderess] = useState("");
  const [profile, setProfile] = useState();
  const [userdata, setuserdata] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then((userCredential) => {
        const storage = getStorage();
        const storageRef = ref(
          storage,
          `profiles/${profile.name + Math.random()}`
        );
        uploadBytes(storageRef, profile).then(() => {
          getDownloadURL(storageRef).then((url) => {
            addDoc(collection(db, "users"), {
              url,
              email,
              password,
              fullname,
              adderess,
              phone,
            })
              .then(() => {
                alert("loggedIn sucesfully");
              })
              .catch((e) => {
                console.log(e);
              });
          });
        });
        const docRef = addDoc(collection(db, "users"), {
          email,
          password,
          phone,
          adderess,
          url,
          profile,
        })
          .then(() => {
            navigate("/login");
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorCode, errorMessage);
      });
  };

  return (
    <div className="container flex flex-row text-center md:w-[50vw] xl:w-[28vw] sm:w-[15vw] lg:w-[28vw]  pb-3 items-start  justify-center ">
      <div className="w-full flex flex-col  gap-2 bg-white rounded-xl p-4">
        <div className="flex flex-col p-2  w-full  gap-1">
          <h1 className="text-xl font-semibold">Create an aacount </h1>

          <h1 className="text-center text-base text-black/60 ">
            create an account to buy awesome products
          </h1>
        </div>
        <div className="flex flex-col p-2 gap-3 justify-center">
          <input
            className="p-2 bg-slate-100"
            value={fullname}
            onChange={(e) => setfulnsme(e.target.value)}
            type="password"
            placeholder="Enter full name"
            required
            autoComplete="false"
          />
          <input
            className="p-2 bg-slate-100"
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 bg-slate-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
            autoComplete="false"
          />

          <input
            className="p-2 bg-slate-100"
            value={adderess}
            onChange={(e) => setAdderess(e.target.value)}
            type="password"
            placeholder="Address"
            required
            autoComplete="false"
          />
          <input
            className="p-2 bg-slate-100"
            value={phone}
            onChange={(e) => SetPhone(e.target.value)}
            type="password"
            placeholder="phone number"
            required
            autoComplete="false"
          />
          <input
            type="file"
            name="profile"
            placeholder="upload photo"
            id=""
            onChange={(e) => setProfile(e.target.files[0])}
          />
        </div>
        <div className="button flex justify-center text-white">
          <button
            className="px-3 py-2 bg-[#4EAA76] rounded "
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>
        <p>
          Already have an account ?{" "}
          <Link to={"/login"}>
            <a
              href=""
              className="text-black text-decoration-none underline hover:text-blue-700"
            >
              sigin
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
