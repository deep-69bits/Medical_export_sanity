export default{
    name: 'subcatergory',
    type: 'document',
    title: 'Sub Categories',
    fields:[
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