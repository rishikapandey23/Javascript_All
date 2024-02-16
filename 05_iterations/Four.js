const myObject = {
    js: 'javascript',
    cpp: 'c++',
    swift: "swift by apple",
    rb: "ruby"
}
for(const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py","java"]
for(const key in programming){
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"Frannce")
map.set('IN',"India")
// For in is not working in objects..

for (const key in map) {
   console.log(key);
}