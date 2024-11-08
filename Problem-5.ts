{

    
    const getProperty = <T, K extends keyof T>(objData: T, key: K): T[K] =>{
        return objData[key];
    }

    const person = {name: 'Habib', age: 25, city: 'CTG'}
    console.log(getProperty(person, 'name'));
}