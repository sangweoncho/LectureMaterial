const objarray = [
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' },
];
for (const i in objarray) {
  // debugger;
  console.log('v-for in 지시자 : ', objarray[i]);
}
for (const i of objarray) {
  // debugger;
  console.log('v-for of 지시자 : ', i);
}
// i === {text, value}
for (const { text, value } of objarray) {
  debugger;
  console.log('v-for of text,value 지시자 : ', text, value);
}
