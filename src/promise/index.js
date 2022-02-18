const sometimesWillHappen = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve("Hey!");
        } else {
            reject("Mierda!");
        }
    });
}

sometimesWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const sometimesWillHappen2 = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() => {
                resolve ("TRUE");
            }, 2000)
        }else {
            const error0 = new Error("MIERDA!");
            reject(error0)
        }
    });
}

sometimesWillHappen2()
    .then(response => console.log(response))
    .catch(err1 => console.error(err1));

Promise.all([sometimesWillHappen(), sometimesWillHappen2()])
    .then(response => {
        console.log("XD", response);
    })
    .catch(err => {
        console.error(err);
    })


