
const fakeDB = [
  {
    id: 'abcd190d',
    title: 'How\'s business? Boomin',
    slug: 'hows-business-boomin',
    content: 'Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. I’m up to something. Fan luv. Lion! The key is to drink coconut, fresh coconut, trust me. Cloth talk. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.',
  },
  {
    id: 'xys190a',
    title: 'The Pathway to More Success',
    slug: 'the-pathway-to-more-success',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: '128sd043hd',
    title: 'Cloth Talk Part I',
    slug: 'cloth-talk-part-i',
    content: 'Lorem Khaled Ipsum is a major key to success. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! We don’t see them, we will never see them. Find peace, life is like a water fall, you’ve gotta flow. Wraith talk. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm.',
  },
  {
    id: 'xys190b',
    title: 'Cloth Talk Part II',
    slug: 'cloth-talk-part-ii',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: '128sd043hf',
    title: 'Cloth Talk Part III',
    slug: 'cloth-talk-part-iii',
    content: 'Lorem Khaled Ipsum is a major key to success. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! We don’t see them, we will never see them. Find peace, life is like a water fall, you’ve gotta flow. Wraith talk. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm.',
  },
  {
    id: 'xys190s',
    title: 'The Major Key',
    slug: 'the-major-key',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: '128sd04d',
    title: 'You Smart.You Loyal.',
    slug: 'you-smart-you-loyal',
    content: 'Lorem Khaled Ipsum is a major key to success. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! We don’t see them, we will never see them. Find peace, life is like a water fall, you’ve gotta flow. Wraith talk. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm.',
  },
  {
    id: 'xys190a1',
    title: 'The Pathway to More Success1',
    slug: 'the-pathway-to-more-success1',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: 'xys190a2',
    title: 'The Pathway to More Success2',
    slug: 'the-pathway-to-more-success2',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: 'xys190a3',
    title: 'The Pathway to More Success3',
    slug: 'the-pathway-to-more-success3',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: 'xys190a4',
    title: 'The Pathway to More Success4',
    slug: 'the-pathway-to-more-success4',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: 'xys190a5',
    title: 'The Pathway to More Success5',
    slug: 'the-pathway-to-more-success5',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: 'xys190a6',
    title: 'The Pathway to More Success6',
    slug: 'the-pathway-to-more-success6',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: 'xys190a7',
    title: 'The Pathway to More Success7',
    slug: 'the-pathway-to-more-success7',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: 'xys190a8',
    title: 'The Pathway to More Success8',
    slug: 'the-pathway-to-more-success8',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: 'xys190a9',
    title: 'The Pathway to More Success9',
    slug: 'the-pathway-to-more-success9',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: 'xys190a0',
    title: 'The Pathway to More Success0',
    slug: 'the-pathway-to-more-success0',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
];

export default fakeDB;
