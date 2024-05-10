import express from 'express';

const  app = express();

app.get('/', (req,res)=>{
    res.send('Server is ready')
});


app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id:1,
            title: 'Question 1',
            content:'Why did the scarecrow'
            
        },
        {
            id:2,
            title: 'Second Question ',
            content:'Why did the scarecrow'
            
        },
        {
            id:3,
            title: 'Third Question',
            content:'Why did the scarecrow'
            
        },
        {
            id:4,
            title: 'Fourth Question',
            content:'Why did the scarecrow'
            
        },
        {
            id:4,
            title: 'Fifth Question',
            content:'Why did the scarecrow'
            
        },
        
    ]
    res.send(jokes)
})



const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
}


);

