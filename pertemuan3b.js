// function satu() {
//     console.log("hallo saya satu");
// }

// function dua() {
//     console.log("saya dua");
// }

// function tiga() {
//     console.log("saya tiga");
// }

// function empat() {
//     console.log("saya empat");
// }


const satuedit = (callback) => {
    console.log("hallo saya satu edit");
    callback();
}

const duaedit = (callback) => {
    console.log("hallo saya dua edit");
    callback();
}

const tigaedit = (callback) => {
    console.log("hallo saya tiga edit");
    callback();
}


const empatedit = () => {
    console.log("hallo saya empat edit");
}



// satuedit(duaedit);
// // duaedit();
// tigaedit();
// empatedit();

satuedit(() =>{
    duaedit(() => {
        tigaedit(() =>{
            empatedit();
        });
    });
});