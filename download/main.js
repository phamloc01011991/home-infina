const createQR = (id, text) => {
    new QRCode(id, {
        text,
        width:200,
        height:200,
        colorDark:"#000000",
        colorLight:"#ffffff",
        correctLevel:QRCode.CorrectLevel.H
    });

}

createQR("apk-qrcode", "https://infinasoftware.com/app.apk");
createQR("ios-qrcode", "itms-services://?action=download-manifest&amp;url=https://infinasoftware.com/app.plist");

   const starsContainer = document.querySelector('.stars');

    for (let n = 1; n <= 100; n++) {
      const container = document.createElement('div');
      container.classList.add('container');

      const star = document.createElement('div');
      star.classList.add('star');

      container.appendChild(star);
      starsContainer.appendChild(container);
    }


