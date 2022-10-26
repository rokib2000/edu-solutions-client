import React from "react";
import { useReactToPrint } from "react-to-print";
import { useLoaderData } from "react-router-dom";
import { useRef } from "react";
import { FaRegHeart, FaUsers } from "react-icons/fa";

const CoursesDetails = () => {
  const course = useLoaderData();
  //   console.log(course);
  const { name, description, like, review, fee, img, duration, lecture, project, students } = course;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "edu-solution",
    onafterprint: () => console.log("print success"),
  });

  return (
    <div ref={componentRef} style={{ width: "100%", height: window.innerHeight }}>
      <div class="antialiased">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div>
                  <div class="h-64 md:h-80 rounded-lg  mb-4">
                    <div class="h-64 md:h-80 rounded-lg  mb-4 flex items-center justify-center">
                      <img src={img} alt={name} className="rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <h2 class="mb-2 leading-tight tracking-tight font-bold  text-2xl md:text-3xl">{name}</h2>
                <p class=" text-sm">
                  By <span className="text-indigo-600">Edu Solutions</span>
                </p>

                <div class="flex items-center space-x-4 my-4">
                  <div>
                    <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span class="text-indigo-400 mr-1 mt-1">$</span>
                      <span class="font-bold text-indigo-600 text-3xl">{fee}</span>
                    </div>
                  </div>
                  <div class="flex-1">
                    <p class="text-green-500 text-xl font-semibold">Duration: {duration}Month</p>
                    <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4 my-4">
                  <div class="flex-1">
                    <div className="rating ">
                      <input type="radio" name="rating-1" className="mask mask-star text-amber-500" />
                      <input type="radio" name="rating-1" className="mask mask-star text-amber-500" />
                      <input type="radio" name="rating-1" className="mask mask-star text-amber-500" />
                      <input type="radio" name="rating-1" className="mask mask-star text-amber-500" />
                      <input type="radio" name="rating-1" className="mask mask-star text-amber-500" />
                    </div>
                    <p class=" text-xl ">
                      Review: <span className="text-amber-500">{review}</span>
                    </p>
                  </div>
                  <div class="flex-1">
                    <p class=" text-xl ">
                      Lecture: <span className="text-violet-500">{lecture}</span>
                    </p>
                    <p class=" text-xl ">
                      Projects: <span className="text-violet-500">{project}</span>
                    </p>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center">
                      <FaUsers className="mr-2 text-2xl text-fuchsia-600" />
                      <span className="font-semibold"> {students}</span>
                    </div>
                    <div class="flex items-center">
                      <FaRegHeart className="mr-2 text-2xl text-fuchsia-600" />{" "}
                      <span className="font-semibold">{like}</span>
                    </div>
                  </div>
                </div>

                <p class="">{description}</p>

                <div class="flex py-4 space-x-4">
                  <button type="button" class="btn btn-secondary btn-md">
                    Add to Cart
                  </button>
                  <button onClick={handlePrint} className="btn btn-primary btn-md">
                    Save Pdf
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
