import db from '../utils/db';

const { post } = db;

const seed = async () => {
  await post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Amazing',
      content: "I'm on a seafood diet. I see food and I eat it.",
      published: true,
    },
  });

  await post.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Great',
      content: 'Why did the scarecrow win an award? Because he was outstanding in his field.',
      published: false,
    },
  });

  await post.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: 'Cool',
      content: 'I made a pencil with two erasers. It was pointless.',
      published: true,
    },
  });

  await post.upsert({
    where: { id: 4 },
    update: {},
    create: {
      title: 'Soon',
      content: "I've got a great joke about construction, but I'm still working on it.",
      published: true,
    },
  });

  await post.upsert({
    where: { id: 5 },
    update: {},
    create: {
      title: 'Lorem ipsum dolor sit amet.',
      content: 'Ut sem metus, auctor tincidunt elementum',
      published: true,
    },
  });
};

seed()
  .catch(e => {
    console.error(e);
    process.exit();
  })
  .finally(async () => {
    await db.$disconnect();
  });
