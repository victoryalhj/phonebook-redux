import ContactList from "../../component/ContactList";

let initialState = {
  ContactList:[]
};

function reducer(state=initialState,action) {
  const {type,payload} = action
  switch(type){
    case "ADD_CONTACT":
      return {
        ...state,
        ContactList:[
          ...state.ContactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber
          },
        ],
      };
    default:
      return { ...state };
    }
}

export default reducer;