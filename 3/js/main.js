const PICTURE_COUNT = 25;
const LIKE_MIN_NUMBER = 15;
const LIKE_MAX_NUMBER = 200;
const AVATAR_COUNT = 6;
const COMMENT_COUNT = 30;
const DESCRIPTIONS = [
  'Мои питомцы. ',
  'Котики бутербродики.',
  'Пляж в Челябинске.',
  'Съемки фильма Звонок.',
  'Поем в хоре.',
  'Улетаем из Европы.',
  'Паримся в бане.',
  'Читаю книги.',
  'Правильное питание.',
  'Машина в ремонте.',
];

const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Роман',
  'Борис',
  'Семен',
  'Кекс',
  'Александр',
  'Михаил',
  'Сергей',
  'Латиф'
];


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];


const createIdGenerator = () => {
  let lastGeneratrdId = 0;
  return () => {
    lastGeneratrdId += 1;
    return lastGeneratrdId;
  };
};
const generateCommentId = createIdGenerator();


const getArrayCount = (count, description, names, comment) => {
  const photos = [];
  for (let i = 0; i < count; i++) {

    const createComment = () => ({
      id: count + generateCommentId(),
      avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
      message: `${getRandomArrayElement(comment)} ${getRandomArrayElement(comment)}`,
      name: getRandomArrayElement(names)});

    const photo = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      descriotion: getRandomArrayElement(description),
      like: getRandomInteger(LIKE_MIN_NUMBER, LIKE_MAX_NUMBER),
      comments: Array.from({length: getRandomInteger(0, COMMENT_COUNT)},createComment),
    };
    photos.push(photo);
  }
  return photos;
};

const createDataGeneration = getArrayCount(PICTURE_COUNT, DESCRIPTIONS, NAMES, COMMENT_LINES);
