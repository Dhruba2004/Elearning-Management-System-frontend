import Layout from "../../components/layout/Layout";

const courses = [
  {
    id: 1,
    title: "Javascript For Beginners",
    image:
      "https://i0.wp.com/onlinecoursesgalore.com/wp-content/uploads/2018/01/best-javascript-programming-courses-online.jpg?ssl=1",
    instructor: "Brad Traversy",
    price: "599",
  },
  {
    id: 2,
    title: "Python For Beginners",
    image: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg",
    instructor: "Stephen Grider",
    price: "699",
  },
  {
    id: 3,
    title: "Fullstack Web Development",
    image: "https://img-c.udemycdn.com/course/750x422/4505104_8592_8.jpg",
    instructor: "Angela Yu",
    price: "999",
  },
  {
    id: 4,
    title: "Git and Github Complete Course",
    image: "https://img-c.udemycdn.com/course/480x270/3352204_9c9a_20.jpg",
    instructor: "Hitesh Choudhury",
    price: "499",
  },
  {
    id: 4,
    title: "Next.js From Scratch 2024",
    image: "https://www.freecodecamp.org/news/content/images/2023/07/next.png",
    instructor: "Hitesh Choudhury",
    price: "799",
  },
  {
    id: 4,
    title: "React js complete tutorial",
    image: "https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg",
    instructor: "Andrew Roberts",
    price: "699",
  },
];
export default function Course() {
  return (
    <Layout>
      <div className="container m-4 flex flex-col ">
        <h1 className="text-4xl mx-auto font-bold">
          Courses to get you started
        </h1>
        <div>
          <div className="bg-transparent flex justify-center items-center mb-[2rem]">
            <div className="card-container grid lg:grid-cols-3  md:grid-cols-2  md:gap-8 gap-4 mt-[3em]">
              {courses.map((item, id) => (
                <div
                  key={id}
                  className="h-[380px] w-[300px] shadow-sm flex justify-center  items-center flex-col bg-[#f0f0f0] p-4 rounded-lg hover:scale-105 transition cursor-pointer"
                >
                  <figure><img src={item.image} className="w-[400px] mb-[1rem] rounded-md" /></figure>
                  <div className="flex flex-col mb-[4rem]">
                    <h2 className="text-center mt-2 font-bold text-1xl">
                      {item.title}
                    </h2>
                    <h3 className="text-gray-600 text-[16px]">{item.instructor}</h3>
                    {/* <Rating sx={{marginTop:"2rem"}}></Rating> */}
                  </div>
                  <div className="flex gap-[22px]">
                    <h2 className="text-2xl mt-[1.575rem] ml-[1rem] items-start"> ₹{item.price}</h2>
                    <button className="px-7 py-3 rounded-xl text-violet-600 bg-transparent border-[1px] border-violet-600 mt-[1rem] font-bold ">Buy now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
