/*
How to pass value from child to parent in react componets?
>Define a callback in parent which takes the data I need in as a parameter.
>Pass that callback as a prop to the child.
>Call the callback using this.props.[callback] in the child (insert your own name where it says [callback] of course), 
and pass in the data as the argument.

what is Context?
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
const MyContext = React.createContext(defaultValue);

Error Boundaries:
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, 
and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle 
methods, and in constructors of the whole tree below them.
Error boundaries do not catch errors for:
>Event handlers (learn more)
>Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
>Server side rendering
>Errors thrown in the error boundary itself (rather than its children)

How to share data between two component?
props,context, useReducers, publish/subscribe 

Life Cyle methods in React?
mounting
-----------
>constructor()
>static getDerivedStateFromProps()
>render()
>componentDidMount()

updating
----------
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

unmounting
componentWillUnmount()


What is virtual Dom in react
Each time we change something in our JSX file, all the objects that are there in the virtual DOM gets updated. Though it may sound that
it is ineffective but the cost is not much significant as updating the virtual DOM doesn’t take much time. React maintains two Virtual
DOM at each time, one contains the updated Virtual DOM and one which is just the pre-update version of this updated Virtual DOM. 
Now it compares the pre-update version with the updated Virtual DOM and figures out what exactly has changed in the DOM.
This process is known as ‘diffing’. Once React finds out what exactly has changed then it updated those objects only, on real DOM. 
This significantly improves the performance and is the main reason why Virtual DOM is much loved by developers all around.
https://reactjs.org/docs/faq-internals.html

what do hooks bring to react ?
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

forwarder in react ?
Ref forwarding in React is a feature that lets components pass down (“forward”) refs to their children. It gives the child component a reference
to a DOM element created by its parent component. This then allows the child to read and modify that element anywhere it is being used.

pure componets ?
A component is said to be pure if it is guaranteed to return the same result given the same props and state. 
A functional component is a good example of a pure component because, given an input, you know what will be rendered. 
Class components can be pure too as long as their props and state are immutable.

box shadow check it in IE cross border?

why web worker?
Web workers in Javascript are a great way to execute some task which is very laborious and time taking into a thread separate from the main thread. 
They run in background and perform tasks without interfering with the user interface.
Web Workers are not the part of JavaScript, they’re a browser feature which can be accessed through JavaScript.
Web workers are created by a constructor function Worker() which runs a named JS file.
// create a dedicated web worker
const myWorker = new Worker('worker.js');

state ans stateless components?

differnce class and functional components?
props - properties ?
how to secure the application
https://www.keycdn.com/blog/web-application-security-best-practices

interface 
closure?
cors?
require and import 
*/
