import DB from "../db";
export const resolvers = {
    Query:{
        async Products () {
            
                return await DB.models.product.findAll();
        },

        greet: (root, {name}) => {
            return `Hello ${name}`
        }
    }
};