// 백틱 이용해서 줄바꿈
let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumped over the lazy dog.
abbcccdddd
`;

// const regexp = new RegExp('the', 'gi')
const regexpMatch = /the/gi;
console.log(str.match(regexpMatch));

const regexpTest = /fox/gi;
console.log(regexp.test(str)); // true

const regexpReplace = /fox/gi;
console.log(str.replace(regexpReplace, "aaa")); // fox -> aaa
// str = str.replace(regexpReplace, "aaa") // 바뀐 것 재할당

str.match(/the/); // 1개만 찾음
str.match(/the/g); // 여러개 찾음
str.match(/the/gi); // 여러개 + 대소문자 구분 안함
str.match(/\./gi);
// \ : 이스케이프 문자(Escape Character)란 백슬래시 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자
str.match(/\.$/gim); // 끝나는 줄에 마침표가 있는지 확인 + 찾음
// g : 문자열 전체, 맨 마지막이 끝임, m : 각 줄을 시작하고 끝나는 부분으로 인식

str.match(/d$/gm); // g로만 하면 맨 마지막에 아무것도 없어서 못 찾음
str.match(/^t/gim);

str.match(/http/g);
str.match(/h..p/g); // . : 와일드 카드
str.match(/fox|dog/g); // fox, dog 둘 다 찾음
str.match(/fox|dog/); // fox 찾으면 끝

str.match(/https?/g); // ? : s가 있을수도 있고 없을 수도 있음

str.match(/d{2}/g); // 'dd', 'dd'
str.match(/d{2,}/g); // 'dddd' d가 2개 이상
str.match(/\w{2,3}/g); // \w(숫자를 포함한 영어)
str.match(/\b\w{2,3}\b/g); // \b(숫자나 문자가 아니면 경계)

str.match(/[fox]/g); // f 또는 o 또는 x
str.match(/[0-9]{1,}/g); // 010, 1234, 5678,,,
str.match(/[가-힣]{1,}/g); // 한개 이상의 한글 찾기

str.match(/\w/g); // 모든 문자 + _ 배열
str.match(/\bf\w{1,}\b/g); // f로 시작하는 모든 문자 찾기!!
// 경계, f, 모든문자(1개이상), 경계
str.match(/\d/g); // 모든 숫자
str.match(/\d{1,}/g); // 모든 숫자 덩어리
str.match(/\s/g); // 공백 등

const h = `    hello world!   `;
h.replace(/\s/g, ""); // 공백 전부 제거, helooworld!

str.match(/.{1,}(?=@)/g); // @ 를 기준으로 삼아서 앞쪽에 있는 내용을 일치
str.match(/(?<=@).{1,}/g); // 뒤 쪽, gmail.com
