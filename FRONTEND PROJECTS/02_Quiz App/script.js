// 1] selecting the option if the user click on the div
/*let input = document.querySelector(`input[name='science']`)

document.querySelector('.topic').addEventListener('click', function(){
    console.log('clicked');
    document.querySelector('science').click()
})*/

const topics = document.querySelectorAll('.topic');

    topics.forEach(topic => {
        topic.addEventListener('click', () => {
            const radioBtn = topic.querySelector('input[type="radio"]');
            if (radioBtn) {
                radioBtn.click();
            }
        });
    });

/*const submit = document.querySelector('#submit-btn')
submit.addEventListener('click', function(){

})*/

 

