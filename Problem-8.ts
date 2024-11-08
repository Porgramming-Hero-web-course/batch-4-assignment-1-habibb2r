{



    const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
        const checkKeys = keys.every(key => obj[key])
        return checkKeys
      };
      
      const person = { name: "Alice", age: 25, email: "alice@example.com" };
      console.log(validateKeys(person, ["name", "age"])); 
    //   console.log(validateKeys(person, ["name", "age", "wrongkey"])); 
}
  