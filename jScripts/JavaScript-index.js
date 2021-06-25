function dotClicked(index) {
    var dotElement = document.getElementById('dot' + index);
    dotElement.classList.add('dot-active');

    for (let i = 1; i <= 3; i++) {
        if (i !== index) {
            document.getElementById('dot' + i).classList.remove('dot-active');
        }
    }

    var sliderImage1 = document.getElementById('sliderImage1');
    var sliderImage2 = document.getElementById('sliderImage2');
    var sliderImage3 = document.getElementById('sliderImage3');
    var sliderText1 = document.getElementById('image-slider-text');
    var sliderText2 = document.getElementById('image-slider-text2');
    var sliderText3 = document.getElementById('image-slider-text3');
    var imageDescription1 = document.getElementById('image-description1');
    var imageDescription2 = document.getElementById('image-description2');
    var imageDescription3 = document.getElementById('image-description3');
    var sliderButton1 = document.getElementById('slider-button1');
    var sliderButton2 = document.getElementById('slider-button2');
    var sliderButton3 = document.getElementById('slider-button3');
    initPictures(sliderImage1, sliderImage2, sliderImage3);

    if (index === 1) {
        sliderImage1.classList.add('pita-zaatar-for-index');
        sliderText1.innerHTML = 'פיתה זעתר';
        imageDescription1.innerHTML = 'קרעי פיתה עם זעתר ושמן זית בשדרוג שלנו עם תוספת צזיקי בצד';
        sliderButton1.href = '#';
        sliderButton1.innerHTML = 'לפיתה זעתר לחצו כאן';
        sliderButton1.classList.add('notActive');

        sliderImage2.classList.add('pizza-pita-for-index');
        sliderText2.innerHTML = 'פיצה פיתה';
        imageDescription2.innerHTML = 'פיתה עם רוטב עגבניות וגבינה צהובה מגורדת';
        sliderButton2.href = 'p.pita.html';
        sliderButton2.innerHTML = 'לפיצה פיתה לחצו כאן';
        sliderButton2.classList.remove('notActive');

        sliderImage3.classList.add('hachapita-for-index');
        sliderText3.innerHTML = "חצ'אפיתה";
        imageDescription3.innerHTML = 'פיתה עם ביצת עין, גבינות, שמן זית והמרכיב הסודי שלנו- "הרבה אהבה"';
        sliderButton3.href = 'p.hacha.html';
        sliderButton3.innerHTML = "לחצ'אפיתה לחצו כאן";
        sliderButton3.classList.remove('notActive');

    }
    if (index === 2) {
        sliderImage1.classList.add('kish-for-index');
        sliderText1.innerHTML = 'קישים בטעמים';
        imageDescription1.innerHTML = 'מבחר קישים אישיים בטעמים שונים: קיש תרד, קיש גבינות ועוד..';
        sliderButton1.href = '#';
        sliderButton1.innerHTML = 'לקישים לחצו כאן';
        sliderButton1.classList.add('notActive');

        sliderImage2.classList.add('nutella-toast-for-index');
        sliderText2.innerHTML = 'טוסט פיתה נוטלה';
        imageDescription2.innerHTML = " פיתה נוטלה מושחתת ביותר, חמה ומתוקה ישר מהטוסטר";
        sliderButton2.href = '#';
        sliderButton2.innerHTML = "לטוסט נוטלה לחצו כאן";
        sliderButton2.classList.add('notActive');

        sliderImage3.classList.add('pasta-for-index');
        sliderImage3.title = 'Credit: designed by John3/toppng';
        sliderText3.innerHTML = 'פסטה עגבניות';
        imageDescription3.innerHTML = 'מתכון לפסטה עגבניות ובזיליקום מקורי מאיטליה שלא תפסיקו לאכול..';
        sliderButton3.href = '#';
        sliderButton3.innerHTML = "לפסטה עגבניות לחצו כאן";
        sliderButton3.classList.add('notActive');
    }
    if (index === 3) {
        sliderImage1.classList.add('arais-pita-for-index');
        sliderText1.innerHTML = 'עראיס';
        imageDescription1.innerHTML = 'פיתה ממולאת בבשר טלה ושומן כבש, עם הרבה ירק ובצל';
        sliderButton1.href = '#';
        sliderButton1.innerHTML = "לעראיס לחצו כאן";
        sliderButton1.classList.add('notActive');

        sliderImage2.classList.add('sabich-pita-for-index');
        sliderText2.innerHTML = 'סביח בפיתה';
        imageDescription2.innerHTML = 'פיתה עם חציל מטוגן, ביצה קשה, סלט, טחינה והרבה אהבה...';
        sliderButton2.href = '#';
        sliderButton2.innerHTML = "לסביח לחצו כאן";
        sliderButton2.classList.add('notActive');

        sliderImage3.classList.add('tomato-salad-for-index');
        sliderText3.innerHTML = 'סלט עגבניות מנומרות';
        imageDescription3.innerHTML = 'סלט עגבניות שרי עם רצועות בצל סגול דקות, ברוטב בלסמי ושמן זית';
        sliderButton3.href = '#';
        sliderButton3.innerHTML = "לסלט עגבניות לחצו כאן";
        sliderButton3.classList.add('notActive');
    }
}

function initPictures(sliderImage1, sliderImage2, sliderImage3) {
    sliderImage1.className = '';
    sliderImage2.className = '';
    sliderImage3.className = '';
    sliderImage1.classList.add('foodIMG');
    sliderImage2.classList.add('foodIMG');
    sliderImage3.classList.add('foodIMG');
    sliderImage1.title = '';
    sliderImage2.title = '';
    sliderImage3.title = '';
    sliderImage1.classList.add('no-display');
    sliderImage2.classList.add('no-display');
    sliderImage3.classList.add('no-display');
    //setTimeout(() => {
    //sliderImage1.classList.remove('no-display');
    //sliderImage2.classList.remove('no-display');
    //sliderImage3.classList.remove('no-display');
    //}, 1000)

}