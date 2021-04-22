import db from '../utils/db';

const { user } = db;

const seed = async () => {
  await user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      posts: {
        create: [
          {
            title: 'Amazing',
            content: "I'm on a seafood diet. I see food and I eat it.",
            published: true,
          },
          {
            title: 'Great',
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field.',
            published: true,
          },
          {
            title: 'Cool',
            content: 'I made a pencil with two erasers. It was pointless.',
            published: true,
          },
          {
            title: 'Soon',
            content: "I've got a great joke about construction, but I'm still working on it.",
            published: true,
          },
        ],
      },
    },
  });

  await user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      posts: {
        create: {
          title: 'Lorem ipsum dolor sit amet.',
          content: 'Ut sem metus, auctor tincidunt elementum',
          published: true,
        },
      },
    },
  });
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit();
  })
  .finally(async () => {
    await db.$disconnect();
  });

export default {};
