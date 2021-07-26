import DirectoryActionTypes from './directory.types';

const INITIAL_STATE = {
  sections: null,
  isFetching: false,
  errorMessage: undefined
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryActionTypes.FETCH_SECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case DirectoryActionTypes.FETCH_SECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sections: action.payload
      };
    case DirectoryActionTypes.FETCH_SECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default directoryReducer;

// const INITIAL_STATE = {
//   sections: [
//     {
//       title: 'borougth',
//       imageUrl: 'https://n1s1.elle.ru/08/86/9b/08869b016e72fbfe3dd3efe96441ed89/620x350_0xc35dbb80_13649039501517326511.jpg',
//       id: 1,
//       linkUrl: 'shop/borougth'
//     },
//     {
//       title: 'camomile',
//       imageUrl: 'https://i.pinimg.com/564x/92/8f/2f/928f2fed3bc03f8c73b73c259b53806b.jpg',
//       id: 2,
//       linkUrl: 'shop/camomile'
//     },
//     {
//       title: 'england',
//       imageUrl: 'https://i.pinimg.com/564x/b0/59/2c/b0592c7a54d0d4108858d41c272cb769.jpg',
//       id: 3,
//       linkUrl: 'shop/england'
//     },
//     {
//       title: 'garden',
//       imageUrl: 'https://i.pinimg.com/564x/17/06/b9/1706b9f4b012c5529f2db4e2523227e8.jpg',
//       size: 'large',
//       id: 4,
//       linkUrl: 'shop/garden'
//     },
//     {
//       title: 'assam',
//       imageUrl: 'https://i.pinimg.com/564x/fa/ed/14/faed144035068a995a5f79c248b93f3a.jpg',
//       size: 'large',
//       id: 5,
//       linkUrl: 'shop/assam'
//     }
//   ]
// };
