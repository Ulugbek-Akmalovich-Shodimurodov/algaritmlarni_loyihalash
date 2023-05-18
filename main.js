let Btn = document.querySelector("#ok")
let Btn_trap = document.querySelector("#ok_trap")
let Btn_simson = document.querySelector("#ok_simson")

let Natija = document.querySelector(".natija")
let table  = document.querySelector(".tabletsiya_turt")


function Misol(x){
    return Math.abs(Math.sin(x + 3) * Math.log2(x * x + 3 * x + 1))
}


// turburchak usuli

Btn.addEventListener("click", (e)=>{
    e.preventDefault();


    let X_uzgaruvchilar = document.querySelector(".a").value.split(',')
    let Y_uzgaruvchilar = document.querySelector(".b").value.split(',')

    let sum_X = 0;
    let sum_X2 = 0;
    let sum_X3 = 0;
    let sum_X4 = 0;
    let sum_Y = 0;
    let sum_XY = 0;
    let sum_XX = 0;
    let ssum_X = 0;
    let sum_xxy = 0;

    for (let i = 0; i < X_uzgaruvchilar.length; i++) {

        sum_X += X_uzgaruvchilar[i] - 0;
        sum_Y += Y_uzgaruvchilar[i] - 0;
        sum_XY += 1 * X_uzgaruvchilar[i]*Y_uzgaruvchilar[i];
        sum_XX += 1 * X_uzgaruvchilar[i]*X_uzgaruvchilar[i];
        ssum_X += X_uzgaruvchilar[i] - 0;

        sum_X4 += Math.pow(X_uzgaruvchilar[i], 4);
        sum_X3 += Math.pow(X_uzgaruvchilar[i], 3);
        sum_X2 += Math.pow(X_uzgaruvchilar[i], 2);
        sum_xxy += Math.pow(X_uzgaruvchilar[i], 2)*Y_uzgaruvchilar[i];
    }
        ssum_X *= ssum_X;

        let a = (X_uzgaruvchilar.length*sum_XY - sum_X*sum_Y)/(X_uzgaruvchilar.length*sum_XX - ssum_X);
        let b = (sum_Y - a*sum_X)/X_uzgaruvchilar.length;


        let detA = sum_X4*(sum_X2*6-sum_X*sum_X) - sum_X3*(sum_X3*6-sum_X*sum_X2)+sum_X2*(sum_X*sum_X3-sum_X2*sum_X2);
        let det_a = sum_xxy*(sum_X2*6-sum_X*sum_X)-sum_X3*(sum_XY * 6 - sum_X*sum_Y) + sum_X2*(sum_X*sum_XY-sum_Y*sum_X2);
        let det_b = sum_X4*(sum_XY*6-sum_Y*sum_X)-sum_xxy*(sum_X3*6-sum_X*sum_X2)+sum_X2*(sum_X3*sum_Y-sum_XY*sum_X2);
        let det_c = sum_X4*(sum_X2*sum_Y-sum_X*sum_XY)-sum_X3*(sum_X3*sum_Y-sum_XY*sum_X2)+sum_xxy*(sum_X*sum_X3-sum_X2*sum_X2);

        let A = det_a/detA;
        let B = det_b/detA;
        let C = det_c/detA;

                            table.innerHTML += `
                            <tr>
                                <td></td>
                                <td><b>Chiziqli model:</b></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>A = ${a}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>B = ${b}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><b>Y = ${Math.floor(a*10000)/10000}x ${b > 0 ? " + " : ' '}${Math.floor(b*10000)/10000}</b></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><b>Kvadratik model:</b></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>A = ${A}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>B = ${B}</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>C = ${C}</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td><b>Y = ${Math.floor(A*1000)/1000}x<sup>2</sup>${B > 0 ? " + " : ' '}${Math.floor(B*10000)/10000}x${C > 0 ? " + " : ' '}${Math.floor(C*1000)/1000}</b></td>
                            </tr>`
})

