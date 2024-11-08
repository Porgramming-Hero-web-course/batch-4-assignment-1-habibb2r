{

    
    const getProperty = <T, K extends keyof T>(objData: T, key: K): T[K] =>{
        const propertyValue : T[K] = objData[key];
        console.log(propertyValue);
        return propertyValue
    }

    const person = {name: 'Habib', age: 25, city: 'CTG'}
    console.log(getProperty(person, 'name'));
}