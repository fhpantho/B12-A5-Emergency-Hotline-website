1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: getElementByID can catch the html element by their ID ,
    getElementByClassName can catch html element by their Class,
    and  querySelector/querySelectorAll can catch all type of html element and we can catch it like css style 

2. How do you create and insert a new element into the DOM?

ans: 
<body id="Body">
<script>
    let Body = document.getElementByID("Body");
    let div = document.creatElement("div");
    Body.appendChild(div);
</script>
</body>

3. What is Event Bubbling and how does it work?

ans:

Event Bubbling is a way that  event travel through the DOM in js

when we use a event it occurs on the current Element then it goes to the parentElement then grandparent Element until it goes to the Documnet

4. What is Event Delegation in JavaScript? Why is it useful?

ans:
Event Delegation Using event bubbling to handle event efficiently by attaching a single listener to a parent element


5. What is the difference between preventDefault() and stopPropagation() methods?

ans:

preventDefault() stop the default behivior and stopPropagation() stop the event bubbling
