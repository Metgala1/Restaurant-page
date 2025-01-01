import firstSrc from "./burger-rest.jpg"
import secondSrc from "./Hburger.jpg"
import picOne from "./Avocado burger.jpg"
import picTwo from "./beacon burger.jpg"
import picThree from "./bison burger.jpg"
import picFour from "./buffalo burger.jpg"
import picFive from "./cheese burger.jpg"
import picSix from "./juice lucy burger.jpg"
import picSeven from "./lamb burger.jpg"
import picEight from "./mushroom burger.jpg"
import picNine from "./slider burger.jpg"
import picTen from "./veggie burger.jpg"
function CreateImg(src, alt){ 
    this.src = src;
    this.alt = alt;
}
const image1 = new CreateImg(firstSrc, "Burger Shop");
const image2 = new CreateImg(secondSrc, "Juicy Burger")

export function initailPageLoader(){
    const content = document.getElementById("content");
    content.innerHTML = " "
    const container = document.createElement("div");
    container.id = "container";
    content.appendChild(container);
    //creating divs in the container

    //first div in the container 
    const div1 = document.createElement("div");
    div1.classList.add("div1");
    //img in the first div in the container
    const myImg = document.createElement("img")
    myImg.classList.add("my-img");
    myImg.src = image1.src;
    myImg.alt = image1.alt;
    div1.appendChild(myImg)
    //appending the div to the container
    container.appendChild(div1)

    //second div in the container
    const div2 = document.createElement("div");
    div2.classList.add("div2")
    const description = document.createElement("div");
    description.classList.add("description");
    div2.appendChild(description)
    //p element in the description
    const pElement = document.createElement("p");
    pElement.innerHTML = "Butcher's Grill<br> The best Burgers at your serving"
    description.appendChild(pElement)
    // sample div with an image of a burger
    const sampleDiv = document.createElement("div")
    sampleDiv.classList.add("sample");
    //img inthe sample div
    const mySecondImg = document.createElement("img");
    mySecondImg.classList.add("sample-burger") 
    mySecondImg.src = image2.src;
    mySecondImg.alt = image2.alt;
    sampleDiv.appendChild(mySecondImg)
    div2.appendChild(description);
    div2.appendChild(sampleDiv)
    //appending the second div to the container
    container.appendChild(div2)


    //last div in the home page 
    const div3 = document.createElement("div");
    div3.classList.add("div3")
    div3.textContent = "BUTCHER'S GRILL BURGER"
    //appending the the last div to the container
    container.appendChild(div3)

}

function Burger(photo, name, price){
    this.photo = photo;
    this.name = name;
    this.price = price;
}
// Creating muy make burger algorithm
const myBurgers = []

function makeBurger(photo, name, price){
    const burger = new Burger(photo,name, price)
    myBurgers.push(burger)
}
makeBurger(picOne, "Avocado Burger", 7);
makeBurger(picTwo, "Beacon", 5);
makeBurger(picThree, "Bison Burger", 8);
makeBurger(picFour, "Buffalo", 9);
makeBurger(picFive, "Cheese Burger", 12);
makeBurger(picSix, "Juice Burger", 9);
makeBurger(picSeven, "Juice lucy Burger", 9);
makeBurger(picEight, "Lamb burger", 7);
makeBurger(picNine, "Mush Room Burger", 5);
makeBurger(picTen, "Veggie Burger", 6);

//creating my menupage

export function menupage(){
    const content = document.getElementById("content");
    const menuContainer = document.createElement("div")
    menuContainer.id = "menu-container"
    content.appendChild(menuContainer)
     myBurgers.forEach((burger) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item")
        menuItem.innerHTML = `
        <div class="menu-photo">
                <img class="item-photo" src=${burger.photo} alt="burger">  
            </div>
            <div class="menu-description">
               <article class="article">
                <p class="item-name">${burger.name}</p>
                <p class="item-price">price: $${burger.price}</p>
               </article>
            </div>
        `
        menuContainer.appendChild(menuItem)
     })

}
export function about(){
    const content = document.getElementById("content");
    content.innerHTML = `
      <div class="about-container">
        <div class="con-div1">
            <h1>About Butcher's Grill burgers</h1>

            <p>At Butcher's Grill, we're not just flipping patties; we're crafting an experience. We believe a great burger is more than just meat between buns – it's a symphony of flavors, textures, and passion.</p>
          
            <h2>Our Story</h2>
            <ul>
              <li><strong>The Family Recipe:</strong> Our family recipe for burgers has been passed down for generations. We've perfected it with years of love and experimentation, and we're thrilled to share this tradition with you.</li>
              <li><strong>The Culinary Adventure:</strong> [Owner Name] always dreamed of opening a restaurant where they could share their love of burgers with the world. After years of culinary exploration and honing their skills, [Restaurant Name] was born.</li>
              <li><strong>The Community Focus:</strong> We wanted to create a space where the community could come together to enjoy delicious food and good company. [Restaurant Name] is more than just a burger joint; it's a gathering place for friends and family.</li>
            </ul>
          
            <h2>What Makes Us Unique</h2>
          
            <ul>
              <li><strong>Signature Sauce:</strong> Our secret sauce is the heart and soul of every burger. It's a unique blend of flavors that will have you coming back for more.</li>
              <li><strong>Fresh, Local Ingredients:</strong> We prioritize quality and sustainability by sourcing our ingredients from local farms whenever possible.</li>
              <li><strong>Creative Combinations:</strong> We're not afraid to get creative! From classic cheeseburgers to gourmet creations with unique toppings, we have something for everyone.</li>
              <li><strong>Hand-Cut Fries:</strong> Our crispy, golden fries are made fresh daily and perfectly complement our juicy burgers.</li>
            </ul>
          
            <h2>Our Commitment</h2>
          
            <p>We're committed to providing our customers with an exceptional dining experience. Our friendly staff is always ready to assist you and ensure you have a memorable meal.</p>
          
            <p>We strive for excellence in every burger we serve. We use only the highest quality ingredients and meticulous preparation to ensure consistent flavor and quality.</p>
          
            <h2>Call to Action</h2>
          
            <p>Ready to experience the [Restaurant Name] difference? Visit us today and discover why we're the talk of the town!</p>
          
        </div>
        <div class="con-div2">
        <img class="about-img" src=${firstSrc} alt="Butcher Grill restaurant">
        </div>
    </div>
    `
}



export function clearContent(){
    const content = document.getElementById("content");
    content.innerHTML = ""
}
