function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i < data.length; i++ ) {
        if (typeof(data[i]) === 'number') {
            data[i] = data [i] * 2;
        } else {
            data[i] = '${data[i]} done';
        }
    }


    console.log(data);

    return data;
}

secondTask();