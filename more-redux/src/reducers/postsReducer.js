export default (posts = [], action) =>{
    switch(action.type)
    {
        case 'FETCH_POSTS':
            return action.payload.response;
            
        default:
            return posts;
    }
};