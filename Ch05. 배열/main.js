/*
배열
 - 값과 인덱스로 참조되어 정렬된 집합이다.
 - index는 배열의 위치를 의마한다.
 - 자바스크립트에서는 배열의 값은 서로 타입이 다를 수도 있고 비어 있을 수도 있다.

*/

/*
배열 생성
 - 리터럴 표기법, 생성자 표기법
*/

// 리터럴 표기법
// let fruit = ['사과','바나나','딸기','',123]; 

// 생성자 표기법
let fruit = new Array('사과','바나나','딸기');

/*
배열 접근
 - 대괄호 []를 통해 배열안의 값에 접근할 수 있다
 - index는 0부터 시작한다.
*/
console.log(fruit[0]);
fruit[1] = "포도";
console.log(fruit[1]);

/*
배열에서 자주 쓰이는 속성 및 매서드
 - length : 배열의 길이
 - push : 배열 끝에 항목 추가하기
 - pop : 배열 끝에 항목 제거하기
 - unshift : 배열 앞에 항목 추가하기
 - shift : 배열 앞에 항목 제거하기
 - forEach : 배열의 항목을 순환하며 처리하기
 - indexOf : 배열 안에서 index 찾기
 - splice : index 위치에 있는 항목 제거하기
*/  
// console.log(fruit.length);
// fruit.push('오렌지');
// fruit.pop();

/*
구조 분해 할당
 - 배열이나 객체의 속성값을 개별 변수에 담을 수 있게 하는 표현식이다.
*/
// let apple = fruit[0];
// let banana = fruit[1];
// console.log(apple,banana);

let [apple, ...other] = fruit
console.log(apple);
console.log(other);

/*
전개 구문 (spread syntax)
 - ... 표기법을 사용하여 값 말고도 배열안의 항목을 펴치는 방식으로
 할당이 가능하다.
*/

let arr = [1,'a',2,'b'];
let spread = [...arr,3,'c'];
console.log(spread);

/*
배열 복사
 - 배열은 객체이기 때문에 참조값을 갖고 있어서 이 값을 다른 배열에 할당하면
   같은 참조값을 갖기 때문에 한 배열에서 값을 변경하면 다른 배열도 함께
   변경이 된다. (얕은 복사)
 
 - 깊은 복사 구문 (전개 구문, Array.from, slice)
*/
//얕은복사
// let copy = fruit;
// copy.pop();
// console.log(copy);
// console.log(fruit);

// 깊은 복사
// 전개 구문
// let copy = [...fruit];
// copy.pop();
// console.log(copy);
// console.log(fruit);

// Array.form
// let copy = Array.from(fruit);
// copy.pop();
// console.log(copy);
// console.log(fruit);

// slice
let copy = fruit.slice();
copy.pop();
console.log(copy);
console.log(fruit);
