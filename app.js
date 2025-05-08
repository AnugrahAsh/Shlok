const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios')

const aartiData = require('./Aarti/aarti-main'); 
const shlokaData = require('./Shloka/shloka-main')
const bhajansData = require('./Bhajan/bhajan-main');
const { title } = require('process');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/aarti/:id', (req, res) => {
    const asideColor = {
        "ganesh": "#f77f00",
        "ram": "#dfb13e",
        "matarani":'#cb5fdc',
        "krishna": '#4da823',
        "shiv": 'royalblue',
        "vishnu": '#304f74',
        "bharmha": '#666'

    };
    const backgroundColor = {
        "ganesh": "#ffd580",
        "ram": "#f3e19b",
        "matarani":'#e3cbc9',
        "krishna":'#bbf0a9',
        "shiv": '#96c1cf',
        "vishnu": '#97a4b4',
        "bharmha": '#999'
    };
    const { id } = req.params;
    var name = id
    
    if (aartiData[id]) {
        const data = aartiData[id];
        res.render('show', { aartiData: data, title: id, asideColor: asideColor[name], bgColor: backgroundColor[name]}); 
    } else {
        res.status(404).render('error');
    }
});



app.get('/', (req, res) => {
    res.render('home', {logo: '/logo.png'});
});

app.get('/aarti', (req, res) => {
    res.render('aarti');
});


app.get('/horoscope', async (req, res) => {
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 
    'Aquarius', 'Pisces'
  ];

  try {
    const horoscopes = await Promise.all(
      signs.map(sign =>
        axios.get('https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily', {
          params: { sign, day: 'TODAY' },
        })
      )
    );

    const horoscopeData = horoscopes.map(response => response.data);
    res.render('horoscope', { horo: horoscopeData, signs:signs });
  } catch (error) {
    console.error('Error fetching horoscopes:', error.message);
    res.status(500).send('Failed to fetch horoscopes.');
  }
});

// Keep your existing routes
app.get('/bhajan', (req,res)=>{  
  res.render('bhajan', {bhajansData})
})

app.get('/bhajan/:id', (req, res) => {
  const { id } = req.params;
  const bhajan = bhajansData[id - 1];

  if (!bhajan) {
    return res.status(404).send('Bhajan not found');
  }

  res.render('show-bhajan', { id, bhajan });
});

// Add a new route for the search API (optional - for more advanced search functionality)
app.get('/api/search/bhajans', (req, res) => {
  const searchTerm = req.query.q?.toLowerCase() || '';
  
  if (!searchTerm) {
    return res.json(bhajansData);
  }
  
  const results = bhajansData.filter(bhajan => 
    bhajan.title.toLowerCase().includes(searchTerm) || 
    bhajan.lyrics.toLowerCase().includes(searchTerm)
  );
  
  res.json(results);
});

const fetchChapterData = async (chapterNumber) => {
  try {
    const options = {
      method: 'GET',
      url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/`,
      headers: {
        'x-rapidapi-key': '9f00ed486amsh8de2fb7fd6c915fp1be5c0jsn0da3eb1b15f3',
        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);

    // Ensure response.data is an array and map the required values
    if (Array.isArray(response.data)) {
      return response.data.map((item) => ({
        verse: item.text,
        translation: item.translations?.[0]?.description || 'No translation available',
        commentaries: item.commentaries?.[1]?.description || 'No Commentary available'
      }));
    } else {
      console.log(`Unexpected data format for chapter ${chapterNumber}: response.data is not an array`);
      return [];
    }
  } catch (error) {
    console.error(`Error fetching data for chapter ${chapterNumber}:`, error.message);
    return [];
  }
};

app.get('/bhagvat-geeta/:id', async (req, res) => {
  const { id } = req.params;

  // Fetch the data dynamically for each request
  const chapterData = await fetchChapterData(id);
  

  if (chapterData.length === 0) {
    return res.status(500).send('Data not available yet. Please try again later.');
  }

  res.render('bhagvat-geeta', { chapterData, id });
});

app.get('/shlokas', (req, res)=>{
  res.render('shlokas', {shlokaData})
})


app.get('*', (req, res) => {
    res.status(404).render('error');
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
