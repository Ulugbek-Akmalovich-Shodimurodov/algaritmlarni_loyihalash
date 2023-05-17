let Btn = document.querySelector("#ok")
let Btn_trap = document.querySelector("#ok_trap")
let Btn_simson = document.querySelector("#ok_simson")

let Natija = document.querySelector(".natija")

let ArrSum = []


function Misol(x){
    return Math.abs(Math.sin(x + 3) * Math.log2(x * x + 3 * x + 1))
}


// turburchak usuli

Btn.addEventListener("click", (e)=>{
    e.preventDefault();


    let A_uzgaruvchi = document.querySelector(".a").value - 0
    let B_uzgaruvchi = document.querySelector(".b").value - 0
    const n = 10;
    let h = (B_uzgaruvchi - A_uzgaruvchi)  / n;
    let sum = 0;


    const table = document.querySelector(".tabletsiya_turt")
    let k = 0;

    for(let delta_X = A_uzgaruvchi; delta_X <= B_uzgaruvchi; delta_X += h){


        let nat = Misol(delta_X)
        nat = Math.round(nat * 1000)/1000;
        table.innerHTML += `<tr>
                                <td>F(X<sub>${k++}</sub>)</td>
                                <td>${nat}</td>
                            </tr>`
        sum += nat
    }

    sum = Math.round(h * sum * 1000)/1000;
    table.innerHTML += `<tr>
                            <td>Usul natijasi:</td>
                            <td>${sum}</td>
                        </tr>`
})



// trapetsiya usuli

Btn_trap.addEventListener("click", (e)=>{
    e.preventDefault();


    let A_uzgaruvchi = document.querySelector(".at").value - 0
    let B_uzgaruvchi = document.querySelector(".bt").value - 0
    const n = 10;
    let h = (B_uzgaruvchi - A_uzgaruvchi)  / n;
    let sum = 0;

    const table = document.querySelector(".tabletsiya_trap")
    let k = 0;

    for(let delta_X = A_uzgaruvchi ; delta_X <= B_uzgaruvchi; delta_X += h){


        let nat = Misol(delta_X)
        nat = Math.round(nat * 1000)/1000;
        table.innerHTML += `<tr>
                                <td>F(X<sub>${k++}</sub>)</td>
                                <td>${nat}</td>
                            </tr>`
        sum += nat
    }
    let y0 = Misol(A_uzgaruvchi)/2

    let yn = Misol(B_uzgaruvchi)/2

    sum = (sum + y0 + yn) * h;

    sum = Math.round(sum * 1000)/1000;

    table.innerHTML += `<tr>
                            <td>Usul natijasi:</td>
                            <td>${sum}</td>
                        </tr>`
})

// simson usuli


Btn_simson.addEventListener("click", (e)=>{
    e.preventDefault();


    let A_uzgaruvchi = document.querySelector(".as").value - 0
    let B_uzgaruvchi = document.querySelector(".bs").value - 0
    const n = 10;
    let h = (B_uzgaruvchi - A_uzgaruvchi)  / n;
    let sum = 0;
    let toq_sum = 0;
    let juft_sum = 0


    const table = document.querySelector(".tabletsiya_simson")
    let k = 0;

    for(let delta_X = A_uzgaruvchi ; delta_X <= B_uzgaruvchi; delta_X += h){


        let nat = Misol(delta_X)
        nat = Math.round(nat * 1000)/1000;
        table.innerHTML += `<tr>
                                <td>F(X<sub>${k++}</sub>)</td>
                                <td>${nat}</td>
                            </tr>`
        sum += nat
        ArrSum.push(nat);
    }
    for(let i = 1; i < n; i += 2){
        toq_sum += ArrSum[i];
        juft_sum += ArrSum[i + 1];
    }
    let y0 = Misol(A_uzgaruvchi)

    let yn = Misol(B_uzgaruvchi)
    sum = (h/3 )* (y0 + yn + 4*toq_sum + 2 * (juft_sum - ArrSum[n]));

    sum = Math.round(sum * 1000)/1000;

    table.innerHTML += `<tr>
                            <td>Usul natijasi:</td>
                            <td>${sum}</td>
                        </tr>`
})



// 2-topshiriq misollari

// C++ da

