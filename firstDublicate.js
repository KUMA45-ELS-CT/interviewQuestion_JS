function dublicates(str) {
    let uniquelist = {};
    for (i in str) {
        if (uniquelist[str[i]]) {
            return str[i];
        }
        else {
            uniquelist[str[i]] = str[i];
        }    
    }
    return -1
}
console.log(dublicates("bacefdde"));
