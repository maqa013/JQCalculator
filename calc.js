

$('.btn').click(function(){
 
 let text = $(this).text()
 $('input').val($('input').val() + text)

})


$('#empty').click(function(){
    $('input').val('')
})

$('#remove').click(function(){
    let value = $('input').val()

    $('input').val(value.substring(0, value.length - 1))
})




 $('#equal').click(function(){

    let value = $('input').val()
    $('input').val(eval(value))
 })




  $('#percent').click(function(){

     let value = $('input').val()
     $('input').val(value / 100)
  })

  $('#devide').click(function(){

    let value = $('input').val()
    $('input').val(value / value)
 })


//  $('#plmn').click(function(){
//    let value = $('input').val()

//    if(value){

//    }
//  })


