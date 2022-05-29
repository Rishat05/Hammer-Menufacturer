import React from 'react';

const Blogs = () => {
    return (
        <div class="card max-w-full bg-base-100 shadow-xl image-full mx-auto">
            <div class="card-body">
                <h2 class="card-title">Q1. How will you improve the performance of a React Application?</h2>
                <p> (1)Avoid Async Initialization in componentWillMount() (2)CSS Animations Instead of JS Animations  , Using a CDN ,  Using Web Workers for CPU Extensive Tasks ,  Consider Server-side Rendering   ,  Use Reselect in Redux to Avoid Frequent Re-render , Spreading props on DOM elements , Avoiding Props in Initial States.</p>

                <h2 class="card-title">Q2. What are the different ways to manage a state in a React application?</h2>
                <p>There are several other ways to manage state s in React, including the use of:
                    Hooks
                    React Context API
                    Apollo Link State</p>

                <h2 class="card-title">Q3. How does prototypical inheritance work?</h2>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto.</p>

                <h2 class="card-title">Q4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p></p>
                <h2 class="card-title">Q5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>I will implement by using search query. I will crate first url as http//:host/product/$name = name. Dynamically name used.and make a get api to fetch the required product.</p>

                <h2 class="card-title">Q6. What is a unit test? Why should write unit tests?</h2>
                <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected.To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</p>

            </div>
        </div>
    );
};

export default Blogs;