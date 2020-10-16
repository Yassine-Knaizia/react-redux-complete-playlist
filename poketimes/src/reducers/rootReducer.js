const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "3",
      title: "a Helix Fossil was Found",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
  ],
};

const reducers = {
  DELETE_POST: (state, action) => {
    let newPosts = state.posts.filter((post) => {
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: newPosts,
    };
  },
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (Object.keys(reducers).includes(action.type) ) {
    return reducers[action.type](state,action)
  }
  return state;
};

export default rootReducer;
