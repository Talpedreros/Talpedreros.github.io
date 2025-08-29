const validar = () => {

    document.querySelectorAll('.form-control, .form-select').forEach((item) =>{ 

        if(item.value.trim()==''){
            item.classList.add('is-invalid')
        }else{
            item.classList.add('is-valid')
        }

    })
}