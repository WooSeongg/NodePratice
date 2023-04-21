const answer = `콜백지옥 현상은 비동기 코드를 작성할 때 발생할 수 있습니다.
이를 해결할 수 있는 방안으로 프로미스가 나왔습니다.
비동기 작업의 결과를 반환하며 작업이 성공적으로 완료되면 이행(resolve)상태가 되어 값을 반환하고,
실패시 거부(reject)상태가 되어 에러를 반환합니다.
이렇게 작성된 프로미스 객체는 then메서드와 catch메서드로 성공과 실패 결과를 반환 합니다.
finally메서드는 마지막에 반드시 실행되는 메서드입니다.
예를들어 항상 성공을 반환하는 promise1 객체를 만들었습니다.
이 프로미스를 실행시키면 항상 성공값이 반환되므로 then메서드가 실행되고
promise2 객체는 항상 실패가 반환되기 때문에 항상 catch메서드가 실행됩니다
그리고 마지막엔 finally메서드가 호출되는것을 확인할 수 있습니다. 
(promise가 비동기로 동작하기 때문에 결과가 순서대로 나오지는 않습니다)
`;
console.log(answer);

const promise1 = new Promise((resolve, reject) => {
    if(true){
        resolve('성공!');
    }
    else{
        reject('실패!');
    }
})

promise1
    .then( (result) => {
        console.log(`Resolve: ${result}`);
    })
    .catch( (error) => {
        console.log(`Reject: ${error}`);
    })
    .finally( () => {
        console.log(`Finally 실행됨`);
    });

const promise2 = new Promise((resolve, reject) => {
    if(false){
        resolve('성공!');
    }
    else{
        reject('실패!');
    }
})

promise2
    .then( (result) => {
        console.log(`Resolve: ${result}`);
    })
    .catch( (error) => {
        console.log(`Reject: ${error}`);
    })
    .finally( () => {
        console.log(`Finally 실행됨`);
    });
    