const express = require('express')

const app = express()

app.set('view engine','ejs')

app.get('/',(req,res)=> {
    let cars = [
       {
        image:"https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rj7/2022.png?imwidth=291",
        title:"e-tron GT"
       },
       {
        image:"https://www.audi.in/content/dam/nemo/in/models/E-tron/etroncatalunyared_sv.png?imwidth=291",
        title:"e-tron GT"
       },
       {
        image:"https://www.audi.in/content/dam/nemo/in/models/a4-sedan/A4navarrablue_sv.png?imwidth=291",
        title:"e-tron GT"
       },
       {
        image:"https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5as/2018.png?imwidth=291",
        title:"e-tron GT"
       },
       {
        image:"https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rj7/2022.png?imwidth=291",
        title:"e-tron GT"
       },
       {
        image:"https://www.audi.in/content/dam/nemo/in/models/a6/a6-sedan/A6firmamemntblue_sv.png?imwidth=291",
        title:"e-tron GT"
       },
       {
        image:"https://www.audi.in/content/dam/nemo/in/models/a6/a6-sedan/A6firmamemntblue_sv.png?imwidth=291",
        title:"e-tron GT"
       },
       {
        image:" https://www.audi.in/content/dam/nemo/in/models/a8/A8Lvesuviusgrey_sv.png?imwidth=291",
        title:"e-tron GT"
       },
    ]

    let slides = [
        { 
          image:"https://www.audi.in/content/dam/nemo/in/3_O-Homepage/TestDrive-883x496.jpg?imwidth=880",
          para:"Book a Drive"
        },
        { 
            image:"https://www.audi.in/content/dam/nemo/in/3_O-Homepage/ApprovedPlus-883X496.jpg?imwidth=880",
            para:"Book a Drive"
          },
          { 
            image:"https://www.audi.in/content/dam/nemo/in/3_O-Homepage/BookServices-833x496.jpg?imwidth=880",
            para:"Book a Drive"
          }
    ]

    let rows = [
        {
            image:"https://www.audi.in/content/dam/nemo/in/models/q3/prq3big.png?imwidth=880"
        },
        {
            image:"https://www.audi.in/content/dam/nemo/in/customer-area/News/NewAudiQ3.jpg?imwidth=880"
        },
        {
            image:"https://www.audi.in/content/dam/nemo/in/customer-area/News/Audi%20Q3Sportbacktopline.jpg?imwidth=441"
        }
    ]

   res.render('index',{cars,slides,rows})
})


app.listen(3000,(req,res)=> {
    console.log('listening on port 3000')
})








