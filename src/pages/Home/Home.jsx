import Layout from "../../components/layout/Layout";
import heroImg from "../../assets/images/hero.png";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Layout>
      <section>
        <div className="container flex justify-between flex-wrap lg:flex-nowrap">
          <div className="left mt-[7rem] ml-[2rem] flex justify-center flex-col items-center gap-y-3">
            <h1 className=" text-left text-2xl lg:text-5xl font-bold lg:mr-0 mr-[42rem]">
              Skill up for An{" "}
              <span className="text-blue-500">unstoppable </span>Journey of
              Knowledge
            </h1>

            <p className="lg:pr-0 pr-[40rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              repudiandae porro fugiat cupiditate deserunt quasi qui vero
              soluta. Nesciunt laborum dolores recusandae qui!lorem3
            </p>
           
          </div>

          

          <div className="right">
            <img src={heroImg} width={700} height={700} className="pr-[2rem] mt-[4rem] hidden lg:block" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
