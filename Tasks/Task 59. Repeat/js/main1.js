function getDiffDate(date1, date2){
    let a = date1.split(".").map((item) => +item);
    let b = date2.split(".").map((item) => +item);

    if((a[2]>b[2]) || ((a[2] == b[2]) && (a[1]>b[1])) || ((a[2] == b[2]) && a[1] == b[1] && a[0]>b[0])){
        return 1;
    }

    if(a[2] == b[2] && a[1] == b[1] && a[0] ==b[0]){
        return 0;
    }

    return -1;
}

function getDiffDate2(date1, date2){
    let diff = (new Date(date1)).getTime()- (new Date(date2)).getTime();
    if(diff > 0){
        return 1;
    }
    if(diff < 0){
        return -1;
    }

    return 0;
}


console.log(getDiffDate("28.03.2023", "29.03.2023")); 
console.log(getDiffDate2("28.03.2023", "29.03.2023")); 