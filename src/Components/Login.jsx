import React from "react";
import HeroContainerPage from "../Reusable/HeroContainerPage";
import Registration from "../assets/Registration/Registration.jpg";
import styled from "styled-components";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleImage from "../assets/Icons/googleImage.png";
import { Link } from "react-router-dom";

function Login() {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <HeroContainerPage backgroundImage={Registration}>
      <Form className="md:mx-[4rem] sm:mx-[1rem] mx-[1rem] form bg-white py-[2rem] rounded-lg 2xl:w-3/6 lg:3/6 md:4/6 sm:full w-full 2xl:px-[12rem] ld:px-[12rem] md:px-[4rem] sm:px-[1rem] px-[1rem]">
        <div>
          <Title className="text-3xl">Log In</Title>
          <p className="text-center text-white mt-3">
            Get started by creating a 100% free knowledge Base for your passion
          </p>
        </div>

        <div className="container mx-auto mt-4">
          <form action="" className="grid gap-2">
            <input
              type="text"
              className="py-3 rounded-full px-6 mt-3 w-full"
              placeholder="Email"
              required
            />

            <input
              type="text"
              className="py-3 rounded-full px-6 mt-3 w-full"
              placeholder="Password"
              required
            />

            <div className="flex justify-center mt-3">
              <SubmitButton type="submit" className="btnDark">
                Log In
              </SubmitButton>
            </div>

            <p className="text-center text-white mt-3">
              Don't have an account yet?{" "}
              <Link to={"/signUp"} className="underline underline-offset-4">
                Sign up
              </Link>
            </p>

            <div className="grid gap-3">
              <p className="text-center text-white">or</p>
              <div className="flex justify-center">
                <button
                  onClick={() => login()}
                  className="bg-white py-3 px-6 rounded-md"
                >
                  <img
                    style={{
                      height: "1.8rem",
                    }}
                    src={GoogleImage}
                    alt="Google Image"
                    title="Google Image"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </Form>
    </HeroContainerPage>
  );
}

const Form = styled.div`
  box-shadow: rgb(2, 12, 27) 0px 10px 30px -15px;
  background-color: transparent;
  backdrop-filter: blur(6px);
`;

const Title = styled.div`
  color: #fff;
  text-align: center;
`;

const SubmitButton = styled.button`
  padding: 0.6rem 1rem 0.6rem 1rem;
  background-color: #543115;
  color: #fff;
  width: 8rem;
  border-radius: 28px;
`;

const GoogleButtonImage = styled.div`
  height: 2rem;
`;

export default Login;
