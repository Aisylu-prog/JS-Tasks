function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    const length = data.length;
    for (let i = 1; i <= length; i++) {
       result [i - 1] = data [length - i];
    }

    console.log(result);

    return result;
}

thirdTask();
