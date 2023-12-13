const app = require('../app')
const request = require('supertest');



const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1NzUwYTRiNWIyNWE4OTAzZGUxNDg3ZiIsIm5hbWUiOiJKb3JnZSIsImxhc3RuYW1lIjoiRmlzY2hlciIsImVtYWlsIjoiam9yZ2VAbWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE3MDI0Mjc1OTB9.6h7ITDiuiO3yY40c11XKklz1T_mg_RHxXOmRIkFDueo'
const material = {
    'name': 'material in test',
    'materialId': '334',// cambiar en cada peticion para pasar test
    'gramsPrice': 1,
}
const materialPrice = {
    "materialId": "001",
    "gramas": 3
}

describe('Testing on create material', () => { 
    test('should response status 403',async() => { 
        return request(app)
        .post("/materials/create")
        .set('Access', 'TOKEN')
        .send({})
        .expect(403)
        .then(({ok})=>{
            console.log(ok);
        })
     })

    test('should create a material',async() => { 
        return request(app)
        .post("/materials/create")
        .set('Access', token)
        .set('Accept', 'application/json')
        .send(material)
        .expect(200)
        .then(({ok})=>{
            console.log(ok);
        });
     })

    test('should response with price',async() => { 
        return request(app)
        .post("/materials/price")
        .set('Access', token)
        .set('Accept', 'application/json')
        .send(materialPrice)
        .expect(200)
        .then(({ok})=>{
            console.log(ok);
        });
     })
 })