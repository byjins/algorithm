const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()


const STR_SET = ['c=', 'c-', 'dz=', 'd-', 'lj','nj', 's=', 'z='];

let searchStr = input;

let count = 0;

for(let i = 1; i <= input.length; i++) {
    const searchStr = input.slice()
}


while(searchStr.length > 0){
    const str2 = searchStr.slice(0, 2);
    const str3 = searchStr.slice(0, 3);

    if(STR_SET.includes(str2)){
        searchStr = searchStr.replace(str2, "");
    }else if(STR_SET.includes(str3)){
        searchStr = searchStr.replace(str3, "");
    }else{
        searchStr = searchStr.slice(1);
    }
    count += 1;
}

console.log(count);

// 더 깔끔한 코드?

while (searchStr.length > 0) {
    const strToCheck = [searchStr.slice(0, 3), searchStr.slice(0, 2)];

    let matchFound = false;
    for (const str of strToCheck) {
        if (STR_SET.includes(str)) {
            searchStr = searchStr.replace(str, "");
            matchFound = true;
            break;
        }
    }

    if (!matchFound) {
        searchStr = searchStr.slice(1);
    }

    count += 1;
}
