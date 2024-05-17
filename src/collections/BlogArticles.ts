import type { CollectionConfig } from 'payload/types'



export const BlogArticles = {
    slug:'blogArticles',

    fields:[
        {
            name:'title',
            label:'Title',
            type:'text',
        },
        {
            name:'description',
            label:'Description',
            type:'textarea',
        }
    ]
}