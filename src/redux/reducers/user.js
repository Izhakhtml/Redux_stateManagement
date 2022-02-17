const Reducer=(state = [],action)=>{
    const{type,payload}=action
        switch (type) {
            case "LOG_IN":
                return [...state,payload]
            default:
                return state
        }
    }
export default Reducer;