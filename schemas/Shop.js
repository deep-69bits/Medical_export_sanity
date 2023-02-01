export default{
    name: 'product',
    type: 'document',
    title: 'Product',
    fields:[
        {
            name: 'productimage',
            type: 'image',
            title: 'Product Image'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'content',
            type: 'string',
            title: 'Content'
        },
    ]
}