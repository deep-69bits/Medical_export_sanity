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
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'content',
            type: 'string',
            title: 'Content'
        },
        {
            
                name: 'cat',
                title: 'Category',
                type: 'reference',
                weak: true,
                to: [{type: 'catergory'}],
                description: 'Add the Category'
        }
    ]
}