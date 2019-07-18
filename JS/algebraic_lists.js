// https://www.codewars.com/kata/529a92d9aba78c356b000353

/* 

MY SOLUTION

*/
Cons.fromArray = function(array) {

    let consList = null;

    array.forEach((value, index) => {

        if (index == 0) {
            consList = new Cons(value, null);
            return;
        }

        let currentCons = consList;
        while (currentCons.tail !== null) {
            currentCons = currentCons.tail;
        }

        currentCons.tail = new Cons(value, null);
    });

    return consList;
};

function filter(list, predicate) {

    let listCurrent = list;
    let newList = null;
    let newListCurrent = null;

    while (listCurrent !== null) {

        if (predicate(listCurrent.head)) {

            if (newList === null) {

                newList = new Cons(listCurrent.head, null);
                newListCurrent = newList;

            } else {
                newListCurrent.tail = new Cons(listCurrent.head, null);
                newListCurrent = newListCurrent.tail;
            }

        } 

        listCurrent = listCurrent.tail;
    }

    return newList;
}

function map(list, mapper) {
  
    let listCurrent = list;
    let newList = null;
    let newListCurrent = null;

    while (listCurrent !== null) {

        if (newList === null) {

            newList = new Cons(mapper(listCurrent.head), null);
            newListCurrent = newList;

        } else {
            newListCurrent.tail = new Cons(mapper(listCurrent.head), null);
            newListCurrent = newListCurrent.tail;
        }

        listCurrent = listCurrent.tail;

    }
    
    return newList;
  
}

Cons.prototype.filter = function(predicate) {
  return filter(this, predicate);
};

Cons.prototype.map = function(mapper) {
  return map(this, mapper);
};

function Cons(head,tail){
    this.head = head;
    this.tail = tail;
}

/*

BEST FUCKING SOLUTION

*/

Cons.fromArray = function(array) {
    return array.reduceRight(function(list, e) { return new Cons(e, list); }, null);
};
Cons.prototype.filter = function(predicate) {
  var tail = this.tail && this.tail.filter(predicate);
  return predicate(this.head) ? new Cons(this.head, tail) : tail;
};
Cons.prototype.map = function(mapper)    {
  return new Cons(mapper(this.head), this.tail && this.tail.map(mapper));
};


/*

TESTS

*/
Cons.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]).filter((value) => { return value % 2 !== 0 });
Cons.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]).map((value) => { return value * value });