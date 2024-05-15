
fetch('https://restcountries.com/v3.1/name/azerbaijan')
    .then(response => response.json())
    .then(data => {
        
        let country = data[0];
        let adi = country.name.common;
        let bayraq = country.flags.png;
        let sahesi = country.area + " km²";
        let paytaxt = country.capital[0];
        let gerbi = country.coatOfArms;

        console.log("Adı: ", adi);

        console.log("Şəkili: ", bayraq);
        console.log("Sahəsi: ", sahesi);
        console.log("Paytaxtı: ", paytaxt);
        console.log("Gerbi: ", gerbi);
    })
    .catch(error => console.error('Xəta:', error));








