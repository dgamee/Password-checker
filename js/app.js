




$(document).ready(function(){
    $('#search').click(async function(){
        let api='https://passwords.xposedornot.com/api/v1/pass/anon/'
        let password=$('#password').val();
        let inputHash=(keccak_512(password).substring(0,10));
        try{
            const res=await fetch(api+inputHash);
            if(res.ok){
                const jsonRes=await res.json();
                $('#detail').html(`Password has been leaked <b id="red">${jsonRes.SearchPassAnon.count}</b> times`)
                $('#password').val('')
            }
            if(res.status===404){
                $('#detail').val('');
                $('#detail').html(`Password has not been leaked`)
                $('#password').val('')
            }
        }catch(error){
            console.log(error)
        }
    })

    $('#hash').click(async function(){
        let password=$('#psw').val();
        let inputHash=(keccak_512(password));

        $('#hashDetail').html(`Your hashed password is <b class="lockscreen-wrapper"id="green">${inputHash.substring(0,45)}
        <br>${inputHash.substring(45,90)}<br>${inputHash.substring(90,129)}</b>`);
        $('#hashDetail').val('')
    })
})