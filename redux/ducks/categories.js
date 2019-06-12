export const SELECT_CATEGORY = 'CATEGORIES//SELECT_CATEGORY';

const initialState = {
  selectedCategory: 'all',
  list: [
    {
      question: 'What is Binomo?',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'popular'
    },
    {
      question: 'This is panel header with arrow icon?',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'payouts'
    },
    {
      question: 'Registration Confirmation Issues',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'statistics'
    },
    {
      question: 'What is Binomo?',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'popular'
    },
    {
      question: 'This is panel header with arrow icon?',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'popular'
    },
    {
      question: 'Registration Confirmation Issues',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'promotions'
    },
    {
      question: 'What is Binomo?',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'other'
    },
    {
      question: 'This is panel header with arrow icon?',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'popular'
    },
    {
      question: 'Registration Confirmation Issues',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'statistics'
    },
    {
      question: 'What is Binomo?',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'other'
    },
    {
      question: 'This is panel header with arrow icon?',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'promotions'
    },
    {
      question: 'Registration Confirmation Issues',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'statistics'
    },
    {
      question: 'What is Binomo?',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'payouts'
    },
    {
      question: 'This is panel header with arrow icon?',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'popular'
    },
    {
      question: 'Registration Confirmation Issues',
      answer:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
      category: 'statistics'
    }
  ]
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_CATEGORY:
      return { ...state, selectedCategory: payload };
    default:
      return state;
  }
}

export const setCategory = category => ({
  type: SELECT_CATEGORY,
  payload: category
});

export const getCurrentCategory = state =>
  state.categories.selectedCategory && state.categories.selectedCategory;

export const getListOfCategory = state => {
  if (state.categories.selectedCategory === 'all') return state.categories.list;

  return (
    state.categories &&
    state.categories.list.filter(
      item => item.category === state.categories.selectedCategory
    )
  );
};
