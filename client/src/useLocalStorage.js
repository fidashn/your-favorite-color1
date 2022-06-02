const { useState, useEffect } = require("react")

const useLocalStorage = (key, value) =>{
const [localItem, setLocalItem] = useState(()=>{

  let currentValue;
try {
  currentValue = JSON.parse(
    localStorage.getItem(key) || String(value)
  );
} catch (error) {
  currentValue = value;
}
return currentValue;
});

useEffect (()=> {
  localStorage.setItem(key, JSON.stringify(localItem));
},[localItem, key]);

return [localItem, setLocalItem];
}
export default useLocalStorage;