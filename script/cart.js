var arr = JSON.parse(localStorage.getItem("product_data")) || [];
console.log(arr)
      
appendData(arr);
function appendData(arr) {
      var main_div = document.getElementById('left_section'); 
       arr.forEach(function(elem,index)
    {

        let cart_item = document.createElement('div')
        cart_item.setAttribute("class","cart-item")
        let image = document.createElement("img");
        image.src = elem.image;
        let right_cart = document.createElement('div')
        right_cart.setAttribute("class", "cart-item-right")
        let item_remove = document.createElement('div')
        item_remove.setAttribute('class','item-name-remove')
        let title = document.createElement("p");
        title.textContent = elem.title;
        let remove = document.createElement("p");
           remove.onclick = () => {
               arr.splice(index, 1);
               localStorage.setItem("product_data",arr)
               main_div.innerHTML = "";
               appendData(arr);
        }
        remove.setAttribute("class", "item-remove")
        remove.textContent ="Remove"
        let price = document.createElement('p');
        price.setAttribute('class', 'item_price')
        price.textContent = elem.price;
        let size_div = document.createElement('div')
        size_div.setAttribute('class','size-quantity')
        let item_size_div = document.createElement('div');
        item_size_div.setAttribute('class', 'item-size-div');
        let size = document.createElement('p');
        size.textContent = "Size:-";
        let free_size = document.createElement('p');
        free_size.textContent = "Free Size";
        let item_quantity_div = document.createElement('div');
        item_quantity_div.setAttribute('class', 'item-quantity-div');
        let qty = document.createElement('p');
        qty.textContent = "Qty";
        let qty_change = document.createElement('div');
        qty_change.setAttribute('class', 'quantity-change-div')
        let button1 = document.createElement('button');
        button1.textContent = '-'
        let button2 = document.createElement('button');
        let quantity_length = document.createElement('p')
        quantity_length.textContent = '2'
        button2.textContent = '+';
        qty_change.append(button1, quantity_length, button2);
        item_quantity_div.append(qty, qty_change);
        item_size_div.append(size, free_size)
        size_div.append(item_size_div, item_quantity_div);
        item_remove.append(title, remove);
        right_cart.append(item_remove, price, size_div);
        cart_item.append(image, right_cart);
         main_div.append(cart_item);


        })
    }