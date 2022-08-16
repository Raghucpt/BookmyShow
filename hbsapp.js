const express = require('express')
const app = express();
const hbs = require('hbs')

app.set('view engine','hbs')
app.set('views','views1')

hbs.registerPartials("./views1/components")
app.use(express.static('./images')) // ./name is a folder name only /name is file name
app.use(express.static('./styles'))


app.get('/',(req,res)=>{
    // let db=[
    //     {
    //         name:"abc",
    //         age:24
    //     },
    //     {
    //         name:"xyz",
    //         age:26
    //     }
    // ]
    // res.render('home',{heading:"welcome to home", db})

    let data = [
        {
            image:'/vk.avif', // only / is a file name no need to give path
            title:'VikranthRona',
            discription:'Adventure/Mystry/Thriller'
        },
        {
            image:'/gp.avif',
            title:'Galipata',
            discription:'Comedy/Drama/Romantic'
        },
        {
            image:'/777.avif',
            title:'777 Charli',
            discription:'Adventure/Drama/Comedy'
        },
        {
            image:'/mv1avif.avif',
            title:'Bullet Train',
            discription:'Action/Thriller'
        },
        {
            image:'/pt.avif',
            title:'PetroMax',
            discription:'Drama'
        },
    ]

    let data2 = [
        {
            image:'/wkshop.avif'
        },
        {
            image:'/fit.avif'
        },
        {
            image:'/kids.avif'
        },
        {
            image:'/comedy.avif'
        },
        {
            image:'/music.avif'
        }
    ]

    let data3 = [
        {
            image:'/premiere.avif'
        },   
    ]

    let data4 = [
        {
            image:'/portrait.avif'
        },
        {
            image:'/et00.avif'
        },
        {
            image:'/et002.avif'
        },
        {
            image:'/et003.avif'
        },
        {
            image:'/et004.avif'
        },
    ]

    // res.render('home',{heading:"welcome to home", db})
    res.render('home',{data,data2,data3,data4, cr1image:'/cr1.avif', cr2image:'/cr2.avif', cr3image:'/cr3.avif', cr4image:'./sit.avif', cr5image:'./pt.avif', cr6image:'./rocket.avif', cr7image:'./bimb.avif'})
})

app.listen(3000,()=>{
    console.log('listening to port 3000');
})