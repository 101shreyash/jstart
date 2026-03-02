Code runs inside a global execution context first. also known as Global Environment 
That context goes through  two phases memory phase and execution phase.

In memory phase, variables are set to undefined (let/const stay uninitialized), functions store their definitions. 
                                                 
  In execution phase, statements run.

When a function is called during execution, a new function execution context is created and pushed onto the call stack. That context also has its own memory phase and execution phase.

Functions execute fully before being popped from the stack. It is not “line by line getting out of the stack” 
the entire function context stays on the stack until it finishes. After it returns, it is removed. If functions are nested, the stack follows LIFO order.

The return value goes to the caller context, not directly to global automatically.
