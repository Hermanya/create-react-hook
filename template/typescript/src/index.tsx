import * as React from 'react';

// Example Hook
// it makes use of useState and useEffect

export const useMyHook = () => {
  let [{
    counter
  }, setCounter] = React.useState<{
    counter: number;
  }>({
    counter: 0
  });

  React.useEffect(() => {
    let interval = window.setInterval(() => {
      setCounter(counter + 1)
    }, 1000)
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return counter;
};
export default useMyHook;