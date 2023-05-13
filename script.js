function addnew() {
    $('#list').append(`
    <div style="display: flex;">
                    <span>Fiyat: </span>
                    <input type="number">
                    <span>Tax yüzde: </span>
                    <input type="number">
                </div>
                <br>`);
}

$('#list').on('input', 'div input', function() {
    let calc = ''
    let total = 0;

    $('#list > div').each(function () { 
        let price = $($(this)).children('input').eq(0).val();
        let tax = $($(this)).children('input').eq(1).val()
        let netprice = 0;
        if (!tax) {
            netprice = price
        } else {
            netprice = Number(price) + Number((price * (tax/100)))
        }
        calc += `${calc.length === 0 ? '' : ' + '}${((!price) ? '0' : netprice)}` 
        total += Number(netprice)
    });
    $('#calc').html((calc.split("+").length - 1 === 0 ? '' : calc))
    $('#result').html('= ' + total)
});


// sort algorithm
// const arr = [5, 3, 10, 7, 8, 20, 2]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length;j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//         }
//     }
// }
// console.log(arr)