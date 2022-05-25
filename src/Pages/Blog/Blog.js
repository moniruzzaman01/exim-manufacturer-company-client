import React from "react";

const Blog = () => {
  return (
    <div className=" flex justify-center">
      <div className=" w-full px-5">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              14.1 How will you improve the performance of a React Application?
            </h2>
            <p className=" mb-10">
              Answer: First of all I can find out unnecessary re-render and stop
              them. It will improve my site performance.
            </p>
            <h2 className="card-title">
              14.2 What are the different ways to manage a state in a React
              application?
            </h2>
            <p className=" mb-10">
              Answer: In react application states are handled with useState.
              Prop drilling to handle these states to share it to other child
              components. context API is more powerfull feature to prevent
              propdrilling. It helps us to pass state from one component to
              other without propdrilling.
            </p>
            <h2 className="card-title">
              14.3 How does prototypical inheritance work?
            </h2>
            <p className=" mb-10">
              Answer: When we read a property from an object but it's missing
              Javascript automatically takes it from the prototype. In
              programing this is called prototypical inheritance. <br />
              if we declare two object and given them "name" property to one
              another to "class". and then if we call the property "name" from
              another with using __proto__ then prototypical inheritance will
              give us the value take from first object.
            </p>
            <h2 className="card-title">
              14.4 Why you do not set the state directly in React. For example,
              if you have const [products, setProducts] = useState([]). Why you
              do not set products = [...] instead, you use the setProducts
            </h2>
            <p className=" mb-10"></p>
            <h2 className="card-title">
              14.5 You have an array of products. Each product has a name,
              price, description, etc. How will you implement a search to find
              products by name?
            </h2>
            <p className=" mb-10">
              {`Answer: 
const products = [
  {
    name: "potato chips",
    price: 40,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
  },
  {
    name: "green chili ",
    price: 10,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
  },
  {
    name: "fish",
    price: 20,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
  },
  {
    name: "meat",
    price: 50,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
  },
];

const search = "meat";
products.forEach((product) => {
  if (product.name.includes(search)) {
    console.log(product);
  }
});`}
            </p>
            <h2 className="card-title">
              14.6 What is a unit test? Why should write unit tests?
            </h2>
            <p className=" mb-10">
              Answer: Unit testing is a software testing method where
              “units”—the individual components of software—are tested.
              Developers write unit tests for their code to make sure that the
              code works correctly. This helps to detect and protect against
              bugs in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
