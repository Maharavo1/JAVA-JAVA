import React, { useState } from 'react';


function useIncrement(initialeValue=0 , step=1){
  const [count , setCount]  = useState(initialeValue)

  const increment = function(){
    setCount(c=> c+1)
  }

  return[
    count ,increment
  ]
}

function Example(){
  const [count , increment] = useIncrement(10)
  return <button>
    Incrementer {count}
  </button>

}


/**function useIncrement() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(c => c + 1);
    }
    return [count, increment];
}

function Example() {
    const [count, increment] = useIncrement(); // Ajout des parenthèses pour appeler useIncrement comme une fonction

    useEffect(()=>{
      const timer = window.setInterval(()=>{
        increment()
      },1000)

      return function () {
        clearInterval(timer)
      }
    },[])

    useEffect(()=>{
      document.title = "Example" + count
    },1000)


    return (
        <div>
            <button onClick={increment}>Incrementer : {count}</button>
        </div>
    );
}
export default Example;
 */



/*import React, { useState } from 'react';

function Example() {
  // Déclare deux nouvelles variables d'état : count1 et count2
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = function (e) {
    e.preventDefault();
    setCount1(c => c + 1);
  }

  const handleClick2 = function(e){
    e.preventDefault();
    setCount2(c => c + 2);
  }

  return (
    <div>
      <button onClick={handleClick1}>Incrementer count1: {count1}</button>
      <button onClick={handleClick2}>Incrementer count2: {count2}</button>
    </div>
  );
}

export default Example;*/




 

