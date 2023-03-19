const data = [
  {
    id: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Lakshadweep_-_Agatti_Islands.jpg/1024px-Lakshadweep_-_Agatti_Islands.jpg",
    personUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    price: "3,400",
    place: "Fifth Ave",
    name: "Jane Doe",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Maldives",
    rating: 4.9,
    type: "House",
  },
  {
    id: 2,
    url: "https://static.toiimg.com/photo/94978002.cms",
    personUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    price: "3,400",
    place: "Fifth Ave",
    name: "Jon Favreau",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Samudram",
    rating: 4.9,
    type: "House",
  },
  {
    id: 3,
    url: "https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg",
    personUrl:
      "https://i.pinimg.com/originals/39/34/1a/39341ac32898c0a5d0d3fc189cda0f79.jpg",
    price: "3,400",
    place: "Fifth Ave",
    name: "Adam Smith",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Maldives",
    rating: 4.9,
    type: "House",
  },
  {
    id: 4,
    url: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/05/29/8f/26/agatti-island.jpg",
    personUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg",
    price: "3,400",
    place: "Fifth Ave",
    name: "Mihir Saini",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Samudram",
    rating: 4.9,
    type: "House",
  },
  {
    id: 5,
    url: "https://static.wixstatic.com/media/5817a9_b646b1c64bb54377b3dd889c99a4544d~mv2.jpg/v1/fill/w_556,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5817a9_b646b1c64bb54377b3dd889c99a4544d~mv2.jpg",
    personUrl:
      "https://pro2-bar-s3-cdn-cf6.myportfolio.com/d48da40e698e7716f036601a19145577/7cab58a066061edfaaeec2d7_rw_1200.jpg?h=24ed8734c6bb08435132bee905423625",
    price: "3,400",
    place: "Fifth Ave",
    name: "Tupac Shakur",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Maldives",
    rating: 4.9,
    type: "House",
  },
  {
    id: 6,
    url: "https://maritimeindia.org/wp-content/uploads/2018/05/rsz_1boats-and-shacks-in-lakshadweep-islands-min-1280x720-1.jpg",
    personUrl: "https://aermiks.files.wordpress.com/2012/01/200010.jpg",
    price: "3,400",
    place: "Fifth Ave",
    name: "Adil Hassan",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Samudram",
    rating: 4.9,
    type: "House",
  },
  {
    id: 7,
    url: "https://www.tusktravel.com/blog/wp-content/uploads/2022/02/Kalpeni-Island-Lakshadweep.jpg",
    personUrl:
      "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?cs=srgb&dl=pexels-nathan-cowley-1300402.jpg&fm=jpg",
    price: "3,400",
    place: "Fifth Ave",
    name: "Rohit Verma",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Cordelia",
    rating: 4.9,
    type: "House",
  },
  {
    id: 8,
    url: "https://www.civilsocietyonline.com/static/media/static/2021/07/06/ENVIRONMENT-1.869x568.jpg",
    personUrl:
      "https://img.freepik.com/premium-photo/people-leisure-concept-portrait-handsome-guy-with-beard-mustache-with-stylish-hairstyle-dressed-grey-sweater-isolated_176532-5936.jpg",
    price: "3,400",
    place: "Fifth Ave",
    name: "Shanaya Bharadwaj",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Cordelia",
    rating: 4.9,
    type: "House",
  },
  {
    id: 9,
    url: "https://images.indianexpress.com/2021/01/lakshadweep.jpg",
    personUrl:
      "https://www.marcoanelli.com/wp-content/uploads/2013/09/0656MOMA0416.jpg",
    price: "3,400",
    place: "Fifth Ave",
    name: "Lucky Ali",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Cordelia",
    rating: 4.9,
    type: "House",
  },
  {
    id: 10,
    url: "https://static.toiimg.com/photo/94978002.cms",
    price: "3,400",
    place: "Fifth Ave",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Agatti",
    rating: 4.9,
    type: "House",
  },
  {
    id: 11,
    url: "https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg",
    price: "3,400",
    place: "Fifth Ave",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Agatti",
    rating: 4.9,
    type: "House",
  },
  {
    id: 12,
    url: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/05/29/8f/26/agatti-island.jpg",
    price: "3,400",
    place: "Fifth Ave",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. These cases are perfectly simple and easy. ",
    location: "Agatti",
    rating: 4.9,
    type: "House",
  },
];

module.exports = { data };
