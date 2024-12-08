// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import wordRouter from './src/routes/wordRouter.js';
// import classRouter from './src/routes/classRouter.js';
// import topicRouter from './src/routes/topicRouter.js';
// import materialRouter from './src/routes/materialRouter.js';
// import Paths from './src/constants/paths.js';
// import bodyParser from 'body-parser';
// import env from 'dotenv';
// import classRepository from './src/repositories/classRepository.js';
// import topicRepository from './src/repositories/topicRepository.js';
// import materialRepository from './src/repositories/materialRepository.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// env.config();

// app.use((req, res, next) => {
//   res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline' 'unsafe-eval'");
//   next();
// });

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'src', 'views'));
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(`${Paths.Base}`, wordRouter);
// app.use(`${Paths.Base}/classes`, classRouter);
// app.use(`${Paths.Base}/topics`, topicRouter);
// app.use(`${Paths.Base}/materials`, materialRouter);

// app.get('/classes', async (req, res) => {
//   try {
//     const searchType = 'all';
//     const classes = await classRepository.getClasses(searchType, '');
//     res.render('class', { classes, searchType });
//   } catch (error) {
//     console.error('Error rendering classes page:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.get('/topics', async (req, res) => {
//   const { classCode, subject } = req.query;
//   try {
//     const topics = await topicRepository.getTopicsByClassAndSubject(classCode, subject);
//     res.render('topic', { topics, classCode, subject });
//   } catch (error) {
//     console.error('Error rendering topics page:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.get('/materials', async (req, res) => {
//   const { classCode, topicId } = req.query;
//   try {
//     const materials = await materialRepository.getMaterialsByTopicId(topicId);
//     res.render('materials', { materials, classCode, topicId });
//   } catch (error) {
//     console.error('Error rendering materials page:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src', 'views', 'login.html'));
// });

// app.get('/dictionary', (req, res) => {
//   const searchType = 'all';
//   res.render('dictionary', { videoLink: null, word: null, searchType });
// });

// app.get('/search', async (req, res) => {
//   const word = req.query.word;
//   const searchType = req.query.searchType || 'all';
//   try {
//     const query = 'SELECT video_link FROM words WHERE word = $1';
//     const result = await pool.query(query, [word]);
//     if (result.rows.length > 0) {
//       const videoLink = result.rows[0].video_link;
//       res.render('dictionary', { videoLink, word, searchType });
//     } else {
//       res.render('dictionary', { videoLink: null, word: 'Not found', searchType });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port: ${PORT}`);
// });
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import wordRouter from './src/routes/wordRouter.js';
import classRouter from './src/routes/classRouter.js';
import topicRouter from './src/routes/topicRouter.js';
import materialRouter from './src/routes/materialRouter.js';
import Paths from './src/constants/paths.js';
import bodyParser from 'body-parser';
import env from 'dotenv';
import classRepository from './src/repositories/classRepository.js';
import topicRepository from './src/repositories/topicRepository.js';
import materialRepository from './src/repositories/materialRepository.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
env.config();

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline' 'unsafe-eval'");
  next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(`${Paths.Base}`, wordRouter);
app.use(`${Paths.Base}/classes`, classRouter);
app.use(`${Paths.Base}/topics`, topicRouter);
app.use(`${Paths.Base}/materials`, materialRouter);

app.get('/classes', async (req, res) => {
  try {
    const searchType = 'all';
    const classes = await classRepository.getClasses(searchType, '');
    res.render('class', { classes, searchType });
  } catch (error) {
    console.error('Error rendering classes page:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/topics', async (req, res) => {
  const { classCode, subject } = req.query;
  try {
    const topics = await topicRepository.getTopicsByClassAndSubject(classCode, subject);
    res.render('topic', { topics, classCode, subject });
  } catch (error) {
    console.error('Error rendering topics page:', error);
    res.status(500).send('Internal Server Error');
  }
});


// app.get('/materials', async (req, res) => {
//   const { classCode, topicId } = req.query;
//   try {
//     const materials = await materialRepository.getMaterialsByTopicId(topicId);
//     res.render('material', { materials, classCode, topicId });
//   } catch (error) {
//     console.error('Error rendering materials page:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
const getImageData = (imageBuffer) => {
  if (!imageBuffer) return null;
  return imageBuffer.toString('base64');
};

app.get('/materials', async (req, res) => {
  const { subject, topicId } = req.query;
  try {
    const materials = await materialRepository.getMaterialsByTopicId(topicId);

    // Convert the image binary data to Base64
    const materialsWithBase64Images = materials.map(material => ({
      ...material,
      image: material.image ? material.image.toString('base64') : null
    }));

    res.render('material', { materials: materialsWithBase64Images, subject, topicId });
  } catch (error) {
    console.error('Error rendering materials page:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/dictionary', (req, res) => {
  const searchType = 'all';
  res.render('dictionary', { videoLink: null, word: null, searchType });
});

app.get('/search', async (req, res) => {
  const word = req.query.word;
  const searchType = req.query.searchType || 'all';
  try {
    const query = 'SELECT video_link FROM words WHERE word = $1';
    const result = await pool.query(query, [word]);
    if (result.rows.length > 0) {
      const videoLink = result.rows[0].video_link;
      res.render('dictionary', { videoLink, word, searchType });
    } else {
      res.render('dictionary', { videoLink: null, word: 'Not found', searchType });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'login.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
