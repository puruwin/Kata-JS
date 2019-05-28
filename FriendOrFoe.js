function friend(friends){
    //your code here
    var fList = [];
    var j = 0;
    for (let i = 0; i < friends.length; i++) {
        if(friends[i].length == 4){
            fList[j] = friends[i];
            j++;
        }
    }
    return fList;
}
